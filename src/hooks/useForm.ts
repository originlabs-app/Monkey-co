import { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { logger } from '@/services/logger';

interface ValidationRule<T> {
  validate: (value: T) => boolean;
  message: string;
}

interface FieldConfig<T> {
  initialValue: T;
  validators?: ValidationRule<T>[];
}

type FormConfig<T extends Record<string, any>> = {
  [K in keyof T]: FieldConfig<T[K]>;
};

type FormErrors<T> = Partial<Record<keyof T, string>>;

interface UseFormReturn<T extends Record<string, any>> {
  values: T;
  errors: FormErrors<T>;
  touched: Partial<Record<keyof T, boolean>>;
  isValid: boolean;
  isSubmitting: boolean;
  handleChange: (name: keyof T) => (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (name: keyof T) => () => void;
  handleSubmit: (onSubmit: (values: T) => Promise<void>) => (e: FormEvent) => Promise<void>;
  setFieldValue: (name: keyof T, value: T[keyof T]) => void;
  setFieldError: (name: keyof T, error: string) => void;
  resetForm: () => void;
}

export function useForm<T extends Record<string, any>>(
  config: FormConfig<T>
): UseFormReturn<T> {
  // État initial
  const getInitialValues = (): T => {
    const values = {} as T;
    Object.keys(config).forEach((key) => {
      values[key as keyof T] = config[key as keyof T].initialValue;
    });
    return values;
  };

  const [values, setValues] = useState<T>(getInitialValues());
  const [errors, setErrors] = useState<FormErrors<T>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation
  const validateField = useCallback(
    (name: keyof T, value: T[keyof T]): string | undefined => {
      const fieldConfig = config[name];
      if (!fieldConfig.validators) return undefined;

      for (const validator of fieldConfig.validators) {
        if (!validator.validate(value)) {
          return validator.message;
        }
      }
      return undefined;
    },
    [config]
  );

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors<T> = {};
    let isValid = true;

    Object.keys(values).forEach((key) => {
      const error = validateField(key as keyof T, values[key as keyof T]);
      if (error) {
        newErrors[key as keyof T] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [values, validateField]);

  // Handlers
  const handleChange = useCallback(
    (name: keyof T) => (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.type === 'checkbox' 
        ? (e.target.checked as any)
        : (e.target.value as any);
      
      setValues((prev) => ({ ...prev, [name]: value }));
      
      // Valider au changement si le champ a été touché
      if (touched[name]) {
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    },
    [touched, validateField]
  );

  const handleBlur = useCallback(
    (name: keyof T) => () => {
      setTouched((prev) => ({ ...prev, [name]: true }));
      const error = validateField(name, values[name]);
      setErrors((prev) => ({ ...prev, [name]: error }));
    },
    [values, validateField]
  );

  const handleSubmit = useCallback(
    (onSubmit: (values: T) => Promise<void>) => async (e: FormEvent) => {
      e.preventDefault();
      
      // Toucher tous les champs
      const allTouched: Partial<Record<keyof T, boolean>> = {};
      Object.keys(values).forEach((key) => {
        allTouched[key as keyof T] = true;
      });
      setTouched(allTouched);

      // Valider
      if (!validateForm()) {
        logger.warn('Form validation failed', { errors });
        return;
      }

      setIsSubmitting(true);
      try {
        await onSubmit(values);
        logger.info('Form submitted successfully', { values });
      } catch (error) {
        logger.error('Form submission error', { error });
        throw error;
      } finally {
        setIsSubmitting(false);
      }
    },
    [values, errors, validateForm]
  );

  const setFieldValue = useCallback((name: keyof T, value: T[keyof T]) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const setFieldError = useCallback((name: keyof T, error: string) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, []);

  const resetForm = useCallback(() => {
    setValues(getInitialValues());
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, []);

  const isValid = Object.keys(errors).length === 0;

  return {
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldError,
    resetForm,
  };
}

// Validateurs communs réutilisables
export const validators = {
  required: (message = 'Ce champ est requis'): ValidationRule<any> => ({
    validate: (value) => Boolean(value),
    message,
  }),

  email: (message = 'Email invalide'): ValidationRule<string> => ({
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    message,
  }),

  minLength: (min: number, message?: string): ValidationRule<string> => ({
    validate: (value) => value.length >= min,
    message: message || `Minimum ${min} caractères requis`,
  }),

  maxLength: (max: number, message?: string): ValidationRule<string> => ({
    validate: (value) => value.length <= max,
    message: message || `Maximum ${max} caractères autorisés`,
  }),

  pattern: (regex: RegExp, message: string): ValidationRule<string> => ({
    validate: (value) => regex.test(value),
    message,
  }),
};