import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { logger } from '@/services/logger';

// Types
interface AppState {
  user: {
    email: string | null;
    isSubscribed: boolean;
  };
  ui: {
    isLoading: boolean;
    notifications: Notification[];
  };
  preferences: {
    language: 'fr' | 'en';
    theme: 'light' | 'dark';
  };
}

interface Notification {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  timestamp: number;
}

// Actions
type AppAction =
  | { type: 'SET_USER_EMAIL'; payload: string }
  | { type: 'SET_USER_SUBSCRIBED'; payload: boolean }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'ADD_NOTIFICATION'; payload: Omit<Notification, 'id' | 'timestamp'> }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }
  | { type: 'SET_LANGUAGE'; payload: 'fr' | 'en' }
  | { type: 'SET_THEME'; payload: 'light' | 'dark' }
  | { type: 'RESET_STATE' };

// Initial state
const initialState: AppState = {
  user: {
    email: null,
    isSubscribed: false,
  },
  ui: {
    isLoading: false,
    notifications: [],
  },
  preferences: {
    language: 'fr',
    theme: 'light',
  },
};

// Reducer
function appReducer(state: AppState, action: AppAction): AppState {
  logger.debug('App state update', { action });
  
  switch (action.type) {
    case 'SET_USER_EMAIL':
      return {
        ...state,
        user: { ...state.user, email: action.payload },
      };
      
    case 'SET_USER_SUBSCRIBED':
      return {
        ...state,
        user: { ...state.user, isSubscribed: action.payload },
      };
      
    case 'SET_LOADING':
      return {
        ...state,
        ui: { ...state.ui, isLoading: action.payload },
      };
      
    case 'ADD_NOTIFICATION':
      const notification: Notification = {
        ...action.payload,
        id: crypto.randomUUID(),
        timestamp: Date.now(),
      };
      return {
        ...state,
        ui: {
          ...state.ui,
          notifications: [...state.ui.notifications, notification],
        },
      };
      
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        ui: {
          ...state.ui,
          notifications: state.ui.notifications.filter(n => n.id !== action.payload),
        },
      };
      
    case 'SET_LANGUAGE':
      return {
        ...state,
        preferences: { ...state.preferences, language: action.payload },
      };
      
    case 'SET_THEME':
      return {
        ...state,
        preferences: { ...state.preferences, theme: action.payload },
      };
      
    case 'RESET_STATE':
      return initialState;
      
    default:
      return state;
  }
}

// Context
interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider
interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

// Hook principal
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}

// Hooks spécialisés pour éviter la complexité dans les composants
export function useNotifications() {
  const { state, dispatch } = useApp();
  
  const addNotification = (type: Notification['type'], message: string) => {
    dispatch({ type: 'ADD_NOTIFICATION', payload: { type, message } });
    
    // Auto-remove après 5 secondes pour success/info
    if (type === 'success' || type === 'info') {
      setTimeout(() => {
        dispatch({ type: 'REMOVE_NOTIFICATION', payload: message });
      }, 5000);
    }
  };
  
  const removeNotification = (id: string) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
  };
  
  return {
    notifications: state.ui.notifications,
    addNotification,
    removeNotification,
  };
}

export function useUser() {
  const { state, dispatch } = useApp();
  
  const setEmail = (email: string) => {
    dispatch({ type: 'SET_USER_EMAIL', payload: email });
  };
  
  const setSubscribed = (isSubscribed: boolean) => {
    dispatch({ type: 'SET_USER_SUBSCRIBED', payload: isSubscribed });
  };
  
  return {
    user: state.user,
    setEmail,
    setSubscribed,
  };
}

export function useLoading() {
  const { state, dispatch } = useApp();
  
  const setLoading = (isLoading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: isLoading });
  };
  
  return {
    isLoading: state.ui.isLoading,
    setLoading,
  };
}