# CLAUDE.md - Single Source of Truth (SSOT) pour AnimaPackage React

Ce fichier est la **RÉFÉRENCE ABSOLUE** pour le développement de ce projet. **TOUJOURS** commencer par lire ce fichier avant toute action.

## 🚨 RÈGLES CRITIQUES - À LIRE EN PREMIER

### 1. SSOT - Single Source of Truth (OBLIGATOIRE)
**Ce fichier EST la vérité absolue. Toute déviation doit être justifiée par une ADR (Architecture Decision Record).**

#### Hiérarchie des sources de vérité :
1. **CLAUDE.md** (ce fichier) - Règles et principes absolus
2. **TODO.md** - État actuel des tâches et priorités
3. **package.json** - Dépendances et scripts autorisés
4. **Code existant** - Patterns à suivre/améliorer

### 2. Avant CHAQUE modification de code

```bash
# OBLIGATOIRE - Checklist de vérification :

# 1. Est-ce que ça existe déjà ?
grep -r "NomDeLaFonction" src/ --exclude-dir=node_modules
find src/ -name "*composant*" -type f

# 2. Où placer le code ? (Architecture stricte)
# - Composants UI → src/components/[NomComposant]/
# - Icônes → src/icons/[NomIcone]/
# - Pages → src/screens/[NomPage]/
# - Hooks → src/hooks/
# - Services API → src/services/
# - Constantes → src/constants/
# - i18n → src/i18n/locales/
# - Animations → src/animations/
# - Styles globaux → src/ (racine uniquement)

# 3. Y a-t-il un pattern existant ?
ls src/components/  # Vérifier la structure des composants
cat src/components/Button/Button.tsx  # Exemple de pattern
```

### 3. Architecture actuelle (NE JAMAIS DUPLIQUER)

```
AnimaPackage-React/
├── src/
│   ├── components/        # Composants réutilisables AVEC pattern strict
│   │   └── [Component]/   # TOUJOURS un dossier par composant
│   │       ├── index.ts   # Export propre
│   │       ├── [Component].tsx
│   │       ├── style.css  # Styles isolés
│   │       └── [Component].stories.ts  # Storybook
│   ├── screens/          # Pages complètes
│   ├── icons/            # Icônes SVG en composants React
│   ├── hooks/            # Hooks personnalisés
│   ├── services/         # Couche API
│   ├── constants/        # Constantes globales
│   ├── i18n/            # Internationalisation
│   └── animations/       # Fichiers Lottie JSON
├── static/              # Assets statiques (images, PDFs)
├── public/              # Fichiers publics Netlify
└── TODO.md              # Roadmap et tâches
```

### 4. Quality Gates (OBLIGATOIRE avant commit)

**🚫 ZÉRO TOLÉRANCE pour :**
- [ ] Types `any` (sauf className temporaire)
- [ ] `console.log/error` (utiliser un logger)
- [ ] Imports relatifs (`../`) - TOUJOURS absolus
- [ ] Duplication de code/composants
- [ ] Fichiers > 300 lignes
- [ ] Fonctions > 50 lignes
- [ ] CSS inline (sauf animation dynamique)
- [ ] Hardcoded strings (utiliser i18n)
- [ ] Composants sans PropTypes ET TypeScript
- [ ] API calls sans gestion d'erreur

### 5. Commandes autorisées

```bash
# Développement
npm run dev              # Lance le serveur Vite (port 5173)
npm run build           # Build production
npm run preview         # Preview du build
npm run storybook       # Documentation composants

# Qualité (✅ CONFIGURÉ)
npm run lint            # ESLint + Prettier
npm run lint:fix        # Auto-fix des erreurs
npm run format          # Prettier sur tout le code
npm run type-check      # TypeScript strict
npm run test            # Tests avec Vitest
npm run test:ui         # Interface graphique des tests
npm run test:coverage   # Coverage report
npm run quality         # Tout vérifier d'un coup
```

## 🔴 WORKFLOW DE DÉVELOPPEMENT OBLIGATOIRE

### 1️⃣ Analyse avant action
```bash
# TOUJOURS exécuter avant de coder :
/ssot                   # Vérifier les règles CLAUDE.md
grep -r "feature" src/  # Chercher si ça existe
npm run type-check      # Vérifier les types (quand configuré)
```

### 2️⃣ Pattern de composant STRICT

```typescript
// src/components/MonComposant/MonComposant.tsx
import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "./style.css";

// 1. Interface TypeScript OBLIGATOIRE
interface MonComposantProps {
  title: string;
  onClick?: () => void;
  className?: string; // Seul 'any' toléré temporairement
}

// 2. Composant avec typage strict
export const MonComposant: React.FC<MonComposantProps> = ({
  title,
  onClick,
  className = ""
}) => {
  const { t } = useTranslation();
  
  return (
    <div className={`mon-composant ${className}`}>
      {/* Jamais de string hardcodé */}
      <h2>{t('monComposant.title', { defaultValue: title })}</h2>
    </div>
  );
};

// 3. PropTypes OBLIGATOIRE (double validation)
MonComposant.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
};
```

```typescript
// src/components/MonComposant/index.ts
export { MonComposant } from "./MonComposant";
```

### 3️⃣ Gestion des erreurs OBLIGATOIRE

```typescript
// ❌ INTERDIT
try {
  const response = await fetch(url);
  console.log("Success"); // JAMAIS
} catch (error: any) {    // JAMAIS any
  console.error(error);   // JAMAIS console
}

// ✅ OBLIGATOIRE
import { logger } from "@/services/logger"; // ✅ Créé

try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  logger.info("API call successful", { endpoint: url });
  return await response.json();
} catch (error) {
  if (error instanceof Error) {
    logger.error("API call failed", { 
      error: error.message,
      endpoint: url 
    });
    // Afficher à l'utilisateur
    throw new Error(t('errors.apiCallFailed'));
  }
  throw error;
}
```

### 4️⃣ i18n OBLIGATOIRE

```typescript
// ❌ INTERDIT
<button>Envoyer</button>
<p>Merci pour votre inscription!</p>

// ✅ OBLIGATOIRE
<button>{t('common.send')}</button>
<p>{t('subscription.thankYou')}</p>
```

## 🏗️ ARCHITECTURE DECISION RECORDS (ADR)

### ADR-001: Pattern de composants
**Date :** 2024-01-28
**Statut :** Accepté
**Décision :** Chaque composant dans son propre dossier avec index.ts, styles isolés, et Storybook
**Raison :** Évite les conflits CSS, améliore la maintenabilité

### ADR-002: Double validation TypeScript + PropTypes
**Date :** 2024-01-28
**Statut :** Accepté
**Décision :** Utiliser les deux pour la robustesse maximale
**Raison :** TypeScript compile-time + PropTypes runtime = zéro erreur

### ADR-003: Imports absolus obligatoires
**Date :** 2024-01-28
**Statut :** Accepté
**Décision :** Configurer Vite pour les imports absolus depuis src/
**Raison :** Évite la fragilité des imports relatifs

## 📊 MÉTRIQUES DE QUALITÉ

### Seuils stricts (non négociables)
```typescript
export const QUALITY_METRICS = {
  maxFileLines: 300,          // Fichier trop long = découper
  maxFunctionLines: 50,       // Fonction trop longue = refactoriser
  maxComponentProps: 7,       // Trop de props = revoir l'architecture
  maxNestingLevel: 4,         // Trop imbriqué = simplifier
  minTestCoverage: 80,        // Quand tests configurés
  maxCyclomaticComplexity: 10,
  zeroConsoleLog: true,       // Aucune exception
  zeroTypeAny: true,          // Sauf className temporaire
  zeroRelativeImports: true,  // Aucune exception
};
```

## 🚨 ANTI-PATTERNS À ÉVITER

### 1. Le "Monstre Component"
```typescript
// ❌ INTERDIT - Composant de 3000+ lignes
export const LandingPage = () => {
  // 500 lignes de state
  // 1000 lignes de handlers
  // 1500 lignes de JSX
};

// ✅ OBLIGATOIRE - Découper en sous-composants
export const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </>
  );
};
```

### 2. Le "State Chaos"
```typescript
// ❌ INTERDIT - 20+ useState dans un composant
const [email, setEmail] = useState("");
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
// ... 17 autres

// ✅ OBLIGATOIRE - useReducer ou custom hook
const { formState, updateField, submitForm } = useContactForm();
```

### 3. Le "Copy-Paste Driven Development"
```typescript
// ❌ INTERDIT - Duplication
<button className="btn-primary">Envoyer</button>
<button className="btn-primary">Soumettre</button>
<button className="btn-primary">Valider</button>

// ✅ OBLIGATOIRE - Composant réutilisable
<Button variant="primary">{t('send')}</Button>
<Button variant="primary">{t('submit')}</Button>
<Button variant="primary">{t('validate')}</Button>
```

## 🔧 OUTILS DE DÉVELOPPEMENT

### Configuration ESLint stricte (✅ IMPLÉMENTÉ)
Voir `.eslintrc.json` pour la configuration complète avec :
- ❌ `no-console`: "error"
- ❌ `@typescript-eslint/no-explicit-any`: "error"
- ✅ Limites de complexité et taille
- ✅ Imports absolus obligatoires
- ✅ Règles React strictes

### Configuration TypeScript stricte (⏳ À IMPLÉMENTER)
Ajouter dans `tsconfig.json` :
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### Configuration Vite pour imports absolus (✅ IMPLÉMENTÉ)
Configuration active dans `vite.config.ts` avec :
- Alias `@` → `src/`
- CSS Modules configurés
- Support des imports absolus

## 📋 CHECKLIST AVANT CHAQUE COMMIT

```bash
# Automatiser avec husky + lint-staged
- [ ] Pas de console.log
- [ ] Pas de any (sauf className)
- [ ] Pas d'imports relatifs
- [ ] Tous les strings dans i18n
- [ ] Gestion d'erreur sur tous les try/catch
- [ ] PropTypes + TypeScript sur tous les composants
- [ ] Pas de duplication de code
- [ ] Fichiers < 300 lignes
- [ ] Build passe sans warning
```

## 🎯 COMMANDES SLASH OBLIGATOIRES

- `/ssot` : **TOUJOURS EN PREMIER** - Vérifie CLAUDE.md
- `/clean` : Nettoie le code selon les standards
- `/pasta` : Détecte le spaghetti code
- `/quality` : Vérifie les métriques de qualité
- `/refactor` : Propose des améliorations

## 💡 PRINCIPES FONDAMENTAUX

1. **"Quality First"** : Mieux vaut 1h de plus maintenant que 10h de debug plus tard
2. **"No Technical Debt"** : On ne laisse JAMAIS de TODO ou code sale
3. **"Component Thinking"** : Tout est composant réutilisable
4. **"Type Everything"** : Si ce n'est pas typé, ça n'existe pas
5. **"Test or Regret"** : Pas de code sans test (quand configuré)

## 🚀 PROCHAINES ÉTAPES CRITIQUES

1. **Implémenter le logger** pour remplacer tous les console.log
2. **Configurer ESLint** avec les règles strictes
3. **Configurer les imports absolus** dans Vite
4. **Refactoriser LandingPage** (3500+ lignes → composants)
5. **Typer tous les `any`** dans les icônes
6. **Créer les tests** pour les composants critiques

---

**⚠️ RAPPEL FINAL : Ce fichier est la LOI. Toute déviation = dette technique = INTERDIT**