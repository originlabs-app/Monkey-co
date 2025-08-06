const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

interface MailingData {
  email: string;
  consent: boolean;
  timestamp: string;
  source: string;
}

interface ApiResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

export const subscribeToMailing = async (data: MailingData): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/mailing`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Erreur lors de l\'inscription');
    }

    return result;
  } catch (error) {
    // Logger sera importé après installation des dépendances
    // logger.error('Erreur API:', error);
    throw error;
  }
};