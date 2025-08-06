# Guide d'Export et d'Intégration du Dashboard Monkey-co

## 📋 Contexte
- **Landing Page** : Déjà exportée depuis Figma/Anima ✅
- **Dashboard** : À exporter et intégrer proprement
- **Objectif** : Livrer un code propre au développeur backend

## 🎯 Stratégie Simple d'Export

### 1️⃣ **Structure Finale Recommandée**

```
Monkey-co-Project/
├── landing-page/           # Votre dossier actuel (AnimaPackage-React-BWtCA)
│   ├── src/
│   ├── package.json
│   └── README.md
│
├── dashboard/              # Nouveau export Anima
│   ├── src/
│   ├── package.json
│   └── README.md
│
└── shared/                 # Code partagé (optionnel)
    ├── types/
    ├── utils/
    └── constants/
```

### 2️⃣ **Processus d'Export Étape par Étape**

#### **Étape 1 : Préparer la Structure**
```bash
# Depuis le dossier parent de votre projet actuel
mkdir Monkey-co-Project
cd Monkey-co-Project

# Renommer et déplacer le projet landing page
mv ../AnimaPackage-React-BWtCA ./landing-page
```

#### **Étape 2 : Exporter le Dashboard depuis Anima**
1. Dans Figma/Anima, sélectionner les écrans du dashboard
2. Exporter avec Anima (React + TypeScript)
3. **IMPORTANT** : Nommer le dossier exporté `dashboard`
4. Placer ce dossier dans `Monkey-co-Project/`

#### **Étape 3 : Configuration Post-Export**

##### **A. Mise à jour du package.json du dashboard**
```json
{
  "name": "@monkey-co/dashboard",
  "version": "1.0.0",
  "description": "Dashboard Monkey-co - Interface utilisateur SaaS",
  "scripts": {
    "dev": "vite --port 5174",  // Port différent de la landing
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

##### **B. Variables d'environnement**
Créer `dashboard/.env.example`:
```bash
# API Backend
VITE_API_URL=http://localhost:8000/api

# Configuration
VITE_APP_NAME=Monkey-co Dashboard
VITE_APP_VERSION=1.0.0

# Features flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_DEBUG=true
```

### 3️⃣ **Code Propre pour le Backend**

#### **Structure API Recommandée dans `dashboard/src/`**

##### **services/api/config.ts**
```typescript
// Configuration centralisée des endpoints
export const API_ENDPOINTS = {
  // Auth
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    refresh: '/auth/refresh',
    logout: '/auth/logout',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
  },
  
  // User Management
  user: {
    profile: '/user/profile',
    updateProfile: '/user/profile',
    changePassword: '/user/change-password',
    uploadAvatar: '/user/avatar',
  },
  
  // Projects
  projects: {
    list: '/projects',
    get: (id: string) => `/projects/${id}`,
    create: '/projects',
    update: (id: string) => `/projects/${id}`,
    delete: (id: string) => `/projects/${id}`,
    stats: (id: string) => `/projects/${id}/stats`,
  },
  
  // Investments
  investments: {
    list: '/investments',
    create: '/investments',
    get: (id: string) => `/investments/${id}`,
    history: '/investments/history',
  },
  
  // Rewards
  rewards: {
    balance: '/rewards/balance',
    history: '/rewards/history',
    claim: '/rewards/claim',
  },
};

// Configuration de base
export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
};
```

##### **types/api.types.ts**
```typescript
// Types génériques pour les réponses API
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;
  timestamp: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Types métier
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  status: UserStatus;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
  INVESTOR = 'investor',
}

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  SUSPENDED = 'suspended',
}

export interface Project {
  id: string;
  name: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  targetAmount: number;
  currentAmount: number;
  startDate: string;
  endDate: string;
  imageUrl?: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export enum ProjectCategory {
  SOLAR = 'solar',
  WIND = 'wind',
  REFORESTATION = 'reforestation',
  OCEAN_CLEANUP = 'ocean_cleanup',
  OTHER = 'other',
}

export enum ProjectStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  FUNDED = 'funded',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export interface Investment {
  id: string;
  userId: string;
  projectId: string;
  amount: number;
  currency: 'USDC' | 'KEYCOIN';
  status: InvestmentStatus;
  transactionHash?: string;
  createdAt: string;
}

export enum InvestmentStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  FAILED = 'failed',
  REFUNDED = 'refunded',
}

export interface RewardBalance {
  usdc: number;
  keycoin: number;
  pendingUsdc: number;
  pendingKeycoin: number;
  lastUpdated: string;
}
```

##### **services/api/client.ts**
```typescript
import { API_CONFIG } from './config';
import { ApiResponse } from '@/types/api.types';
import { logger } from '@/services/logger';

class ApiClient {
  private baseURL: string;
  private headers: Record<string, string>;

  constructor() {
    this.baseURL = API_CONFIG.baseURL;
    this.headers = API_CONFIG.headers;
  }

  private getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }

  private async request<T>(
    method: string,
    endpoint: string,
    data?: any,
    customHeaders?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    const token = this.getAuthToken();

    const headers: Record<string, string> = {
      ...this.headers,
      ...customHeaders,
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const config: RequestInit = {
      method,
      headers,
    };

    if (data && method !== 'GET') {
      config.body = JSON.stringify(data);
    }

    try {
      logger.info(`API ${method} ${endpoint}`, { data });
      
      const response = await fetch(url, config);
      const result = await response.json();

      if (!response.ok) {
        logger.error(`API Error ${response.status}`, result);
        return {
          success: false,
          error: result.error || {
            code: 'UNKNOWN_ERROR',
            message: result.message || 'Une erreur est survenue',
          },
          timestamp: new Date().toISOString(),
        };
      }

      logger.info(`API Success ${method} ${endpoint}`, result);
      return {
        success: true,
        data: result.data || result,
        message: result.message,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      logger.error(`API Network Error ${method} ${endpoint}`, error);
      return {
        success: false,
        error: {
          code: 'NETWORK_ERROR',
          message: 'Erreur de connexion au serveur',
        },
        timestamp: new Date().toISOString(),
      };
    }
  }

  // Méthodes publiques
  async get<T>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
    return this.request<T>('GET', `${endpoint}${queryString}`);
  }

  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>('POST', endpoint, data);
  }

  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>('PUT', endpoint, data);
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>('DELETE', endpoint);
  }

  async upload<T>(endpoint: string, formData: FormData): Promise<ApiResponse<T>> {
    const token = this.getAuthToken();
    const headers: Record<string, string> = {};
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'POST',
        headers,
        body: formData,
      });

      const result = await response.json();
      
      return {
        success: response.ok,
        data: result.data,
        error: result.error,
        message: result.message,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      return {
        success: false,
        error: {
          code: 'UPLOAD_ERROR',
          message: 'Erreur lors de l\'upload',
        },
        timestamp: new Date().toISOString(),
      };
    }
  }
}

export const apiClient = new ApiClient();
```

##### **services/api/index.ts**
```typescript
// Export centralisé de l'API
export { apiClient } from './client';
export { API_ENDPOINTS, API_CONFIG } from './config';
export * from './auth.service';
export * from './user.service';
export * from './project.service';
export * from './investment.service';
```

##### **services/api/auth.service.ts**
```typescript
import { apiClient } from './client';
import { API_ENDPOINTS } from './config';
import { User, ApiResponse } from '@/types/api.types';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  user: User;
  token: string;
  refreshToken: string;
}

interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const authService = {
  async login(data: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    const response = await apiClient.post<LoginResponse>(
      API_ENDPOINTS.auth.login,
      data
    );
    
    if (response.success && response.data) {
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('refreshToken', response.data.refreshToken);
    }
    
    return response;
  },

  async register(data: RegisterRequest): Promise<ApiResponse<User>> {
    return apiClient.post<User>(API_ENDPOINTS.auth.register, data);
  },

  async logout(): Promise<void> {
    await apiClient.post(API_ENDPOINTS.auth.logout);
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
  },

  async refreshToken(): Promise<ApiResponse<{ token: string }>> {
    const refreshToken = localStorage.getItem('refreshToken');
    return apiClient.post(API_ENDPOINTS.auth.refresh, { refreshToken });
  },
};
```

### 4️⃣ **Documentation pour le Backend**

Créer `dashboard/API-INTEGRATION.md`:

```markdown
# Documentation d'Intégration API - Dashboard Monkey-co

## Vue d'ensemble
Ce document décrit l'intégration entre le frontend React et l'API backend.

## Configuration

### Variables d'environnement
```bash
VITE_API_URL=http://localhost:8000/api  # URL de base de l'API
```

### Headers requis
- `Content-Type: application/json`
- `Authorization: Bearer {token}` (pour les routes protégées)

## Endpoints Attendus

### Authentification
| Méthode | Endpoint | Description | Body |
|---------|----------|-------------|------|
| POST | `/auth/login` | Connexion | `{ email, password }` |
| POST | `/auth/register` | Inscription | `{ email, password, firstName, lastName }` |
| POST | `/auth/logout` | Déconnexion | - |
| POST | `/auth/refresh` | Refresh token | `{ refreshToken }` |

### Gestion Utilisateur
| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/user/profile` | Profil utilisateur |
| PUT | `/user/profile` | Mise à jour profil |
| POST | `/user/avatar` | Upload avatar (multipart/form-data) |

### Projets
| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/projects` | Liste des projets (pagination) |
| GET | `/projects/:id` | Détails d'un projet |
| POST | `/projects` | Créer un projet |
| PUT | `/projects/:id` | Modifier un projet |
| DELETE | `/projects/:id` | Supprimer un projet |

## Format des Réponses

### Succès
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful",
  "timestamp": "2024-01-01T12:00:00Z"
}
```

### Erreur
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Description de l'erreur",
    "details": { ... }
  },
  "timestamp": "2024-01-01T12:00:00Z"
}
```

### Pagination
```json
{
  "success": true,
  "data": {
    "items": [...],
    "total": 100,
    "page": 1,
    "pageSize": 20,
    "totalPages": 5
  }
}
```

## Codes d'Erreur
- `AUTH_REQUIRED`: Token manquant
- `TOKEN_EXPIRED`: Token expiré
- `INVALID_CREDENTIALS`: Identifiants invalides
- `VALIDATION_ERROR`: Erreur de validation
- `NOT_FOUND`: Ressource non trouvée
- `FORBIDDEN`: Accès refusé
- `SERVER_ERROR`: Erreur serveur

## Gestion des Tokens
1. Le token JWT est stocké dans localStorage
2. Durée de vie: 24h (à confirmer)
3. Refresh token: 30 jours (à confirmer)
4. Auto-refresh avant expiration

## Exemples d'Utilisation

### Connexion
```typescript
import { authService } from '@/services/api';

const handleLogin = async (email: string, password: string) => {
  const response = await authService.login({ email, password });
  
  if (response.success) {
    // Redirection vers dashboard
    navigate('/dashboard');
  } else {
    // Afficher l'erreur
    showError(response.error.message);
  }
};
```

### Appel API Générique
```typescript
import { apiClient } from '@/services/api';

const fetchProjects = async () => {
  const response = await apiClient.get('/projects', {
    page: 1,
    pageSize: 20,
  });
  
  if (response.success) {
    setProjects(response.data.items);
  }
};
```
```

### 5️⃣ **Scripts de Lancement**

Créer `Monkey-co-Project/package.json`:
```json
{
  "name": "@monkey-co/monorepo",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "landing-page",
    "dashboard"
  ],
  "scripts": {
    "dev:landing": "npm run dev --workspace=landing-page",
    "dev:dashboard": "npm run dev --workspace=dashboard",
    "dev:all": "concurrently \"npm run dev:landing\" \"npm run dev:dashboard\"",
    "build:landing": "npm run build --workspace=landing-page",
    "build:dashboard": "npm run build --workspace=dashboard",
    "build:all": "npm run build:landing && npm run build:dashboard"
  },
  "devDependencies": {
    "concurrently": "^7.6.0"
  }
}
```

### 6️⃣ **Checklist Finale**

- [ ] Structure des dossiers créée
- [ ] Dashboard exporté depuis Anima
- [ ] Configuration API mise en place
- [ ] Types TypeScript définis
- [ ] Documentation API complète
- [ ] Variables d'environnement configurées
- [ ] Scripts de lancement fonctionnels
- [ ] README pour le backend développeur

## 🚀 Commandes Rapides

```bash
# Installation complète
cd Monkey-co-Project
npm install

# Développement
npm run dev:all        # Lance tout
npm run dev:landing    # Landing seule
npm run dev:dashboard  # Dashboard seul

# Build production
npm run build:all
```

## 📝 Notes Importantes

1. **Ports différents** : Landing (5173) et Dashboard (5174)
2. **API centralisée** : Toute la config dans `/services/api`
3. **Types partagés** : Possibilité de créer un dossier `shared/`
4. **Logs structurés** : Logger déjà configuré
5. **Gestion d'erreurs** : Standardisée avec ApiResponse

## 🎯 Résultat Attendu

Le développeur backend recevra :
- Code TypeScript propre et typé
- Documentation claire des endpoints
- Gestion d'erreurs standardisée
- Configuration flexible
- Architecture scalable

---

**Ce guide vous permet de livrer un code professionnel et maintenable !**