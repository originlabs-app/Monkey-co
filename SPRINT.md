# TODO - Tâches restantes avant lancement

## 🚨 Priorité HAUTE

### 1. Intégration animation Lottie
- [ ] Installer la bibliothèque lottie-react
- [ ] Intégrer l'animation des feuilles dans le hero banner
- [ ] Remplacer les feuilles statiques par l'animation

### 2. Conformité RGPD ✅
- [x] Ajouter une checkbox de consentement sous le champ email
- [x] Ajouter le texte légal de consentement
- [x] Bloquer l'envoi du formulaire sans consentement
- [x] Stocker le consentement avec l'email

### 3. Formulaire email fonctionnel ✅
- [x] Ajouter la gestion d'état (useState) pour l'email
- [x] Implémenter la validation email
- [x] Ajouter la logique d'envoi au backend
- [x] Gérer les états de chargement/succès/erreur
- [x] Afficher les messages de feedback utilisateur

### 4. Intégration API Backend
- [ ] Créer le service API avec les endpoints
- [ ] Configurer la route POST /api/mailing
- [ ] Gérer les erreurs réseau
- [ ] Tester l'intégration complète

## 📊 Priorité MOYENNE

### 5. Animations de scroll ✅
- [x] Créer des animations CSS personnalisées
- [x] Ajouter des animations d'apparition progressive
- [x] Animer les sections au scroll avec IntersectionObserver
- [x] Corriger le problème de scroll horizontal
- [x] Optimiser les performances des animations

### 6. Responsive & Cross-browser
- [ ] Tester sur tous les navigateurs majeurs
- [ ] Vérifier le responsive sur différentes tailles
- [ ] Corriger les bugs CSS spécifiques aux navigateurs
- [ ] Tester sur appareils réels

## 🔧 Priorité BASSE

### 7. Optimisations
- [ ] Optimiser les images (format WebP)
- [ ] Lazy loading des images
- [ ] Minifier le CSS
- [ ] Analyser et réduire la taille du bundle

### 8. SEO & Accessibilité
- [ ] Ajouter les balises meta
- [ ] Optimiser pour le SEO
- [ ] Vérifier l'accessibilité (ARIA labels)
- [ ] Ajouter un sitemap

## 📝 Notes pour le backend

**Endpoint**: POST /api/mailing

**Body de la requête**:
```json
{
  "email": "user@example.com",
  "consent": true,
  "timestamp": "2024-01-15T10:30:00Z",
  "source": "landing_page"
}
```

**Réponses attendues**:
- 200: { "success": true, "message": "Inscription réussie" }
- 400: { "error": "Email invalide" }
- 409: { "error": "Email déjà inscrit" }
- 500: { "error": "Erreur serveur" }