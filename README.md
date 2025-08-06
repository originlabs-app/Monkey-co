# Monkey-co - Plateforme de Financement Écologique

**Stop au blabla, place à l'action. Investis tes cryptos pour la planète et reçois des récompenses en USDC et KEYCOIN.**

## 🚀 Démarrage Rapide

### Prérequis
- [NodeJS](https://nodejs.org/en/) (version 18+)
- npm ou yarn

### Installation
```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le projet sera accessible sur [http://localhost:5173/](http://localhost:5173/)

## 🛠️ Scripts Disponibles

### Développement
```bash
npm run dev              # Serveur de développement (port 5173)
npm run build           # Build production
npm run preview         # Preview du build
npm run storybook       # Documentation composants (port 6006)
```

### Qualité & Tests
```bash
npm run lint            # ESLint + Prettier
npm run lint:fix        # Auto-fix des erreurs
npm run format          # Prettier sur tout le code
npm run type-check      # TypeScript strict
npm run test            # Tests avec Vitest
npm run test:ui         # Interface graphique des tests
npm run test:coverage   # Coverage report
npm run quality         # Tout vérifier d'un coup
```

## 🏗️ Architecture

### Structure du Projet
```
src/
├── components/         # Composants réutilisables
├── screens/           # Pages complètes
├── hooks/             # Hooks personnalisés
├── services/          # Couche API et logger
├── contexts/          # State management
├── types/             # Types TypeScript
├── tests/             # Configuration tests
├── i18n/              # Internationalisation
├── icons/             # Icônes SVG
└── animations/        # Animations Lottie
```

### Technologies
- **React 18** + TypeScript
- **Vite** pour le build
- **Vitest** + React Testing Library
- **ESLint** + Prettier (règles strictes)
- **i18next** (FR/EN)
- **Husky** + lint-staged

## 🎯 Fonctionnalités

### ✅ Implémenté
- Landing page responsive
- Formulaire d'inscription avec RGPD
- Animations au scroll
- Internationalisation (FR/EN)
- Logger professionnel
- Tests unitaires
- Quality gates

### 🚧 En Développement
- Intégration API backend
- Animations Lottie
- Optimisations performance
- Tests d'intégration

## 📊 Métriques de Qualité

### Seuils Stricts
- **Code coverage** : 80% minimum
- **Complexité cyclomatique** : Max 10 par fonction
- **Taille de fichier** : Max 300 lignes
- **Types any** : 0 (sauf className temporaire)
- **Console.log** : 0 (logger obligatoire)

### Vérification
```bash
npm run quality  # Vérifie tous les seuils
```

## 🚨 Règles de Développement

### Architecture
- Structure modulaire
- Composants réutilisables
- Imports organisés

### Qualité du Code
- Tests unitaires
- Documentation
- Code review

### Standards
- TypeScript strict
- ESLint + Prettier
- Husky hooks

## 📝 Contribution

### Avant chaque commit
1. `npm run quality` (doit passer)
2. Tests validés
3. Documentation mise à jour
4. Code review effectuée

### Workflow
1. Créer une branche feature
2. Développer avec quality gates
3. Tests complets
4. Pull request avec review

## 🔧 Configuration

### ESLint Strict
- Règles TypeScript strictes
- Imports absolus obligatoires
- Pas de console.log
- Limites de complexité

### TypeScript Strict
- Mode strict activé
- Pas de any implicite
- Vérifications strictes

### Husky + lint-staged
- Pre-commit hooks
- Auto-fix avant commit
- Quality gates automatiques

## 📚 Documentation

- **TODO.md** : Roadmap et tâches
- **Storybook** : Documentation composants
- **Code comments** : Documentation inline

## 🌍 Environnement

### Variables d'Environnement
```bash
VITE_API_URL=http://localhost:3000  # URL de l'API backend
```

### Ports
- **Frontend** : 5173 (Vite)
- **Storybook** : 6006
- **Tests UI** : 6006 (Vitest UI)

## 🚀 Déploiement

### Netlify (Configuré)
- Build automatique
- Redirections SPA
- Headers de sécurité

### Build Production
```bash
npm run build
# Fichiers dans /dist
```

---

**⚠️ RAPPEL : Ce projet suit des standards de qualité élevés. Toute déviation = dette technique = INTERDIT**
