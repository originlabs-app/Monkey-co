# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🚨 RÈGLES CRITIQUES - À LIRE EN PREMIER

### 1. SSOT - Single Source of Truth (OBLIGATOIRE)
**TOUJOURS vérifier si le code existe déjà avant de créer quoi que ce soit**
- 📖 **CLAUDE.md EST le SSOT** - Ce fichier contient toutes les règles et principes
- ✅ Une seule source de vérité par fonctionnalité
- ❌ JAMAIS de duplication de code/config/schémas

### 2. Avant CHAQUE ajout de code
```bash
# OBLIGATOIRE - Faire ces vérifications :

# 1. Est-ce que ça existe déjà ?
grep -r "NomDeLaFonction" . --exclude-dir=node_modules
find . -name "*nom-fichier*" -type f | grep -v node_modules

# 2. Où est la bonne place ? (RÈGLES ANIMAPACKAGE)
# - Composants → src/components/[NomComposant]/
# - Services → src/services/
# - Hooks → src/hooks/
# - Types → src/types/
# - Contexts → src/contexts/
# - Tests → src/tests/
# - i18n → src/i18n/locales/
# - Animations → src/animations/
# - Icons → src/icons/

# 3. Y a-t-il déjà un service similaire ?
ls src/services/
```

### 3. Architecture actuelle (NE PAS DUPLIQUER)
- **React + Vite** : Architecture frontend uniquement
- **Composants** : `src/components/[NomComposant]/` avec pattern strict
- **Services** : `src/services/` (API, logger)
- **Hooks** : `src/hooks/` (useForm, useScrollAnimation, etc.)
- **Contexts** : `src/contexts/` (AppContext pour state management)
- **Types** : `src/types/` (icon.types.ts, etc.)
- **Tests** : `src/tests/` (setup.ts, configuration Vitest)
- **i18n** : `src/i18n/locales/` (fr.json, en.json)
- **Assets** : `static/` (images, PDFs)

### 4. Quality Gates (OBLIGATOIRE)
**Avant chaque commit, vérifier :**
- [ ] Code coverage minimum : 80% (quand tests configurés) - **Migration progressive acceptée**
- [ ] Complexité cyclomatique max : 10 par fonction - **Migration progressive acceptée**
- [ ] Nombre de paramètres max : 4 par fonction - **Migration progressive acceptée**
- [ ] Pas de duplication de code détectée
- [ ] Gestion d'erreurs appropriée
- [ ] Documentation mise à jour

**Note :** Pour les projets avec du code legacy, une migration progressive est autorisée (voir section "Migration Progressive").

### 5. Vérification des dépendances
**Avant chaque ajout de package :**
- [ ] Impact sur le bundle size évalué
- [ ] Raison de la dépendance documentée
- [ ] Alternative existante vérifiée
- [ ] Version stable et maintenue
- [ ] Licence compatible avec le projet

## 🔴 CRITICAL REMINDERS - READ FIRST

### Workflow de développement OBLIGATOIRE

**🚨 RÈGLE ABSOLUE : TOUJOURS commencer par `/ssot`**

1. **CONSULTER CLAUDE.md** - `/ssot` OBLIGATOIRE avant toute action
2. **Les fichiers TODO dictent la progression** - Suivre TODO.md étape par étape
3. **Progression tâche par tâche** - Une seule tâche à la fois selon les priorités
4. **Checkmark APRÈS test validé** - Ne JAMAIS checkmarker sans validation utilisateur
5. **Scénario de test OBLIGATOIRE** - Fournir un scénario détaillé avant checkmark
6. **Validation avant progression** - Si test échoue, on reste sur la tâche
7. **Pour chaque nouvelle tâche** :
   a. Poser des questions sur l'implémentation souhaitée
   b. Proposer un userflow logique basé sur l'existant
   c. Pour le front : TOUJOURS référencer le design de la landing page
8. **Documentation après achèvement** - Ajouter contexte et décisions dans TODO.md

### Commandes et environnement
- **npm run dev** : L'utilisateur gère le serveur de développement (port 5173)
- **Autres commandes** : Claude exécute via Bash (build, lint, test)
- **Si erreur** : L'utilisateur copie/colle les logs du terminal

## 🎨 RÈGLES DE DESIGN ET UI

### RÈGLE #1 : PRÉSERVATION DU DESIGN PAR DÉFAUT
**AVANT TOUT CHANGEMENT D'UI/DESIGN :**
1. **Demander explicitement** : "Dois-je changer le design ou seulement analyser ?"
2. **Préserver par défaut** : Ne JAMAIS changer un design validé sans permission
3. **Screenshots obligatoires** : Si changement demandé, montrer avant/après
4. **Validation utilisateur** : Attendre "OK pour changer le design" explicite
5. **Git check** : Vérifier git diff avant de modifier des composants UI existants
6. **Backup obligatoire** : Créer une copie du fichier original avant modification

### RÈGLE #2 : DISTINCTION ANALYSE vs IMPLÉMENTATION
**Mots-clés ANALYSE** → Ne pas coder :
- "analyser", "identifier", "diagnostiquer", "problèmes"
- "proposer une solution" (= donner des recommandations, pas coder)
- "évaluer", "examiner", "vérifier", "audit"
- "pourquoi", "comment se fait-il que"

**Mots-clés IMPLÉMENTATION** → Coder :
- "implémenter", "corriger", "refactoriser", "modifier"
- "faire", "créer", "ajouter", "mettre en place"
- "fixer", "réparer", "appliquer"
- Phrases impératives : "fait ça", "change ça", "ajoute ça"

### RÈGLE #3 : QUESTION OBLIGATOIRE AVANT ACTION
**Toujours demander :**
1. "Est-ce une analyse ou une implémentation ?"
2. "Dois-je préserver le design existant ?"
3. "Quel est le scope exact de la modification ?"
4. "Y a-t-il des éléments à NE PAS toucher ?"

### RÈGLE #4 : CLARIFICATION DU SCOPE
**En cas de doute sur le scope :**
1. **Lister les actions possibles** : "Je peux faire A, B ou C"
2. **Demander confirmation** : "Veux-tu que je fasse A seulement ou aussi B et C ?"
3. **Proposer par étapes** : "Je propose de d'abord faire A, puis on verra pour B"
4. **Mini-scope par défaut** : En cas de doute, faire le minimum

### RÈGLE #5 : TRAÇABILITÉ DES CHANGEMENTS
**Pour tout changement de code :**
1. **Avant** : Afficher ce qui va être modifié
2. **Pendant** : Commenter les raisons du changement
3. **Après** : Résumer ce qui a été fait avec /listdev

## 🎯 COMMANDES SLASH OBLIGATOIRES

### 📋 Commandes de workflow
- `/ssot` : **OBLIGATOIRE** - Vérifie et applique les règles SSOT de CLAUDE.md
- `/questions` : Pose 5-10+ questions sur la tâche actuelle avant développement
- `/userflow` : Propose un userflow détaillé pour la fonctionnalité
- `/test` : Génère un scénario de test complet pour validation
- `/clean` : Améliore le maintien du code, l'organisation des fichiers/dossiers
- `/pasta` : Fais une analyse du SPAGHETTI CODE et autres problèmes
- `/debug` : Débogage en respectant les principes SSOT
- `/design` : Utilise les références design et les styles validés
- `/listdev` : Liste toutes les modifications effectuées et leur impact

### 📝 Implémentation des commandes
Les commandes sont des raccourcis pour le workflow. Quand vous tapez une commande, Claude :
- **OBLIGATOIRE** : Lit CLAUDE.md en premier
- Lit les fichiers nécessaires (TODO.md, CLAUDE.md, etc.)
- Analyse l'état actuel
- Exécute l'action demandée
- Affiche le résultat formaté

**🚨 RÈGLE ABSOLUE** : 
- **TOUJOURS** commencer par `/ssot` avant toute action
- **TOUJOURS** vérifier CLAUDE.md avant de coder
- **TOUJOURS** appliquer les quality gates
- **TOUJOURS** respecter l'architecture SSOT

## 🌟 INTENTIONS DU CTO - ALIGNEMENT STRATÉGIQUE
**Objectif global** : Développer comme un CTO de 45 ans d'expérience – prioriser la qualité, éviter le "spaghetti code", et utiliser l'IA pour du "vibecoding" professionnel sans hallucinations ni désorganisation.

**Intentions clés** :
- **Qualité > Vélocité** : Toujours propre dès le début, même si ça prend plus de temps
- **SSOT absolu** : CLAUDE.md est la référence unique – tout écart doit être justifié
- **Anti-spaghetti** : Zéro tolérance pour les duplications, console.log, types any, ou imports relatifs
- **Workflow IA** : L'IA doit poser des questions, proposer des userflows, et valider par tests avant progression
- **Pragmatique** : Garder la structure actuelle pour la vitesse, refactoriser progressivement

## 📋 MARCHE À SUIVRE DÉTAILLÉE

### 1️⃣ Lecture du TODO
- Ouvrir TODO.md
- Identifier la prochaine tâche non checkmarkée de priorité haute
- Lire TOUS les critères d'acceptation
- Comprendre le contexte et les dépendances

### 2️⃣ Phase de questions (OBLIGATOIRE)
Poser MINIMUM 5 questions avant de coder :
- "Comment veux-tu que [fonctionnalité] se comporte quand [cas d'usage] ?"
- "Quel design/style préfères-tu pour [élément UI] ?"
- "Où doit se situer [fonctionnalité] dans le flow utilisateur ?"
- "Quelles sont les erreurs à gérer pour [action] ?"
- "As-tu des préférences pour [choix technique] ?"

### 3️⃣ Proposition de userflow
Présenter un flow détaillé :
```
📱 Userflow proposé :
1. L'utilisateur arrive sur [page]
2. Il voit [éléments visibles]
3. Il peut [actions possibles]
4. Si [action], alors [résultat]
5. En cas d'erreur : [gestion]
```

### 4️⃣ Développement
- Référencer TOUJOURS le design de la landing page
- Utiliser les composants/patterns existants
- Commiter régulièrement (si demandé)
- Documenter les décisions importantes

### 5️⃣ Scénario de test
Format OBLIGATOIRE :
```
📋 Scénario de test - [Nom fonctionnalité]

Prérequis :
- [ ] Serveur frontend lancé (port 5173)
- [ ] Utilisateur sur la page appropriée

Test :
1. Aller sur http://localhost:5173/[page]
2. Vérifier que [élément] est visible
3. Cliquer sur [bouton/lien]
4. Remplir [formulaire] avec :
   - Champ 1 : "valeur test"
   - Champ 2 : "valeur test"
5. Soumettre le formulaire
6. Vérifier que :
   - [ ] Message de succès apparaît
   - [ ] Redirection vers [page]
   - [ ] Données visibles dans [endroit]

Cas d'erreur à tester :
- Formulaire vide
- Données invalides
- Serveur API éteint
```

### 6️⃣ Validation et checkmark
- Attendre confirmation : "Test validé ✅" 
- Si échec : corriger et reproposer test
- Si succès : checkmarker dans TODO.md
- Ajouter section "✅ Complété" avec détails

### 7️⃣ Documentation
Ajouter dans TODO.md :
```markdown
### ✅ Complété : [Nom tâche]

**Actions effectuées :**
- ✅ [Action 1 réalisée]
- ✅ [Action 2 réalisée]

**Décisions prises :**
- [Décision technique] : [Raison]
- [Choix UX] : [Justification]

**Notes :**
- [Contexte important]
- [Points d'attention pour le futur]
```

## 🏗️ ARCHITECTURE DECISION RECORDS (ADR)

### Format ADR
Chaque décision technique majeure doit être documentée :

```markdown
# ADR-XXX: [Titre de la décision]

**Date :** YYYY-MM-DD
**Statut :** [Proposé | Accepté | Rejeté | Déprécié]

**Contexte :**
[Pourquoi cette décision est nécessaire]

**Décision :**
[Nous avons décidé de...]

**Conséquences :**
- [Conséquence positive]
- [Conséquence négative]
- [Impact sur l'architecture]

**Alternatives considérées :**
- [Alternative 1] : [Pourquoi rejetée]
- [Alternative 2] : [Pourquoi rejetée]
```

## 🔍 CODE REVIEW CHECKLIST (IA)

**Avant chaque modification, vérifier :**

### Architecture
- [ ] Respect du SSOT (pas de duplication)
- [ ] Code placé dans le bon dossier
- [ ] Dépendances appropriées
- [ ] Pas de couplage fort entre modules

### Qualité du code
- [ ] Nommage clair et cohérent
- [ ] Fonctions courtes et focalisées
- [ ] Gestion d'erreurs appropriée
- [ ] Pas de code mort ou commenté

### Tests et documentation
- [ ] Tests inclus (quand framework configuré)
- [ ] Documentation mise à jour
- [ ] Exemples d'utilisation fournis
- [ ] API publique documentée

### Performance
- [ ] Bundle size optimisé
- [ ] Lazy loading approprié
- [ ] Cache utilisé quand pertinent

### Sécurité
- [ ] Validation des inputs
- [ ] Pas de secrets en dur
- [ ] Sanitisation des données

## 📊 MÉTRIQUES DE QUALITÉ

### Objectifs à maintenir
- **Code coverage** : 80% minimum (quand tests configurés)
- **Complexité cyclomatique** : Max 10 par fonction
- **Nombre de paramètres** : Max 4 par fonction
- **Longueur de fonction** : Idéal < 50 lignes, acceptable < 100 si bien structuré
- **Duplication de code** : 0% (utilisation de composants partagés)

### Migration Progressive (ACCEPTÉE)
**Pour les projets existants avec du code legacy, une migration progressive est autorisée :**

#### Phase 1 : Stabilisation (Actuel) - APPROCHE PRAGMATIQUE
- Code coverage : 0% → 60% (tests critiques d'abord)
- **Composants complexes** : < 1000 lignes (acceptable si bien organisé)
- **Composants moyens** : < 800 lignes (sections complètes OK)
- Complexité : 20 max (pages complexes acceptées temporairement)
- Paramètres : 10 max (composants Anima générés)

#### Phase 2 : Refactoring (Recommandé)
- Code coverage : 60% → 80% (tests complets)
- **Composants standards** : 300-500 lignes (avec logique métier)
- **Composants simples** : < 200 lignes
- Complexité : 15 max (complexité maîtrisée)
- Paramètres : 7 max (props raisonnables)

#### Phase 3 : Excellence (Optionnel)
- Code coverage : 80% (objectif final)
- **Composants focalisés** : < 300 lignes (idéal mais non obligatoire)
- **Fonctions** : < 50 lignes (idéal)
- Complexité : 10 max (objectif final)
- Paramètres : 4 max (objectif final)

**Note :** Les objectifs finaux restent flexibles. L'important est d'avoir du code maintenable et lisible, pas de respecter des métriques arbitraires.

### 📏 Philosophie : Lisibilité > Métriques strictes

✅ **Un fichier de 500-800 lignes est ACCEPTABLE si :**
- Le code est bien organisé et lisible
- Les responsabilités sont claires
- La maintenance reste simple
- L'équipe est comfortable avec

❌ **Un fichier de 200 lignes nécessite refactoring si :**
- Le code est confus ou dupliqué
- Plusieurs responsabilités mélangées
- Difficile à tester ou modifier

**Règle d'or :** "Le code parfait est l'ennemi du code qui fonctionne"

### Outils de vérification
```bash
# Vérification de la qualité
npm run lint                    # ESLint + Prettier
npm run type-check             # TypeScript
npm run test                   # Tests unitaires
npm run build                  # Build verification
```

## 🚨 PRINCIPES DE DÉVELOPPEMENT - ÉVITER LE SPAGHETTI CODE

### 🎯 PHILOSOPHIE : "QUALITÉ DÈS LE DÉBUT"

**PRINCIPE FONDAMENTAL :** Mieux vaut prendre 1h de plus pour faire propre que 1 jour pour nettoyer après.

### 📋 RÈGLES ABSOLUES - JAMAIS D'EXCEPTION

#### **1. JAMais de logging non structuré**
```typescript
// ❌ INTERDIT - Ne jamais faire
console.log('Debug endpoint appelé');
console.error('Erreur API contact:', error);

// ✅ OBLIGATOIRE - Toujours faire
logger.info('Debug endpoint appelé');
logger.error('Erreur API contact:', error);
```

#### **2. JAMais de types non stricts**
```typescript
// ❌ INTERDIT - Ne jamais faire
const data: any = response;
} catch (err: any) {

// ✅ OBLIGATOIRE - Toujours faire
interface ApiResponse {
  data: User[];
  status: number;
}
const data: ApiResponse = response;
} catch (err: Error) {
```

#### **3. JAMais d'imports fragiles**
```typescript
// ❌ INTERDIT - Ne jamais faire
import { useCurrentLocale } from '../hooks/useCurrentLocale';
import BusinessPlanModal from '../BusinessPlanModal';

// ✅ OBLIGATOIRE - Toujours faire
import { useCurrentLocale } from '@/hooks/useCurrentLocale';
import BusinessPlanModal from '@/components/BusinessPlanModal';
```

#### **4. JAMais de données hardcodées massives**
```typescript
// ❌ INTERDIT - Ne jamais faire
const mockData = { /* 1000+ lignes de contenu hardcodé */ };

// ✅ OBLIGATOIRE - Toujours faire
const loadData = async () => {
  return await readFromFile();
};
```

### 🔧 QUALITY GATES OBLIGATOIRES

#### **Avant chaque commit, vérifier :**
```bash
# Checklist automatique pour React/TypeScript
- [ ] Types stricts (pas de any/unknown)
- [ ] Logger professionnel (pas de console.log)
- [ ] Imports absolus (pas de ../)
- [ ] Pas de duplication de code
- [ ] Pas de données hardcodées massives
- [ ] Tests passent (Vitest)
- [ ] Lint clean (ESLint)
- [ ] Type check clean (TypeScript)
- [ ] Build clean (Vite)
```

## 🚨 RÈGLES ABSOLUES POUR L'IA

### Règle 1 : "Clean Code First"
```typescript
// Priorité : Qualité > Vélocité
// Mieux vaut prendre 1h de plus pour faire propre
// Que 1 jour pour nettoyer après
```

### Règle 2 : "No Technical Debt"
```typescript
// Interdit de laisser des TODO
// Interdit de commenter "// TODO: nettoyer plus tard"
// Interdit de faire "quick & dirty"
```

### Règle 3 : "Architecture Over Speed"
```typescript
// Mieux vaut une architecture propre
// Qu'un code qui marche vite mais sale
```

## 🚀 PROCHAINES ÉTAPES CRITIQUES

### ✅ FAIT :
1. ✅ **Logger implémenté** (`src/services/logger.ts`)
2. ✅ **ESLint configuré** avec règles ultra-strictes
3. ✅ **Imports absolus** configurés dans Vite
4. ✅ **Vitest + RTL** configuré pour les tests
5. ✅ **Context API** pour state management
6. ✅ **Hook useForm** pour les formulaires

### ⏳ À FAIRE (par priorité) :
1. **Installer les dépendances** (voir commande npm ci-dessous)
2. **Configurer TypeScript strict** dans tsconfig.json
3. **Remplacer console.log** par logger dans api.ts
4. **Refactoriser LandingPage** - Migration progressive acceptée :
   - Phase 1 : Extraire sections principales (OK si ~1000 lignes restantes)
   - Phase 2 : Optimiser si nécessaire (viser 500-800 lignes)
   - Phase 3 : Perfectionnement optionnel (< 300 lignes si valeur ajoutée)
5. **Typer les icônes** avec `IconProps` de `src/types/icon.types.ts`
6. **Créer les premiers tests** pour composants critiques (0% → 60%)
7. **Migrer vers CSS Modules** (renommer `.css` → `.module.css`)

### 📦 Installation des dépendances :
```bash
npm install --save-dev \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-jsx-a11y \
  eslint-plugin-import \
  eslint-import-resolver-typescript \
  prettier \
  vitest \
  @testing-library/react \
  @testing-library/jest-dom \
  @testing-library/user-event \
  @vitest/ui \
  @vitest/coverage-v8 \
  jsdom \
  @types/node
```

---

**⚠️ RAPPEL FINAL : Ce fichier est la LOI. Toute déviation = dette technique = INTERDIT**