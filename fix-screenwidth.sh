#!/bin/bash

echo "🔧 Remplacement de screenWidth < 1440 et screenWidth >= 1440..."

# Backup du fichier
cp src/screens/LandingPage/LandingPage.tsx src/screens/LandingPage/LandingPage.tsx.backup

# Remplacer screenWidth < 1440 par isMobile(screenWidth)
sed -i '' 's/screenWidth < 1440/isMobile(screenWidth)/g' src/screens/LandingPage/LandingPage.tsx

# Remplacer screenWidth >= 1440 par isDesktop(screenWidth)
sed -i '' 's/screenWidth >= 1440/isDesktop(screenWidth)/g' src/screens/LandingPage/LandingPage.tsx

# Compter les occurrences restantes
echo "✅ Remplacement terminé !"
echo ""
echo "📊 Vérification :"
echo -n "  - Occurrences de '1440' restantes : "
grep -c "1440" src/screens/LandingPage/LandingPage.tsx || echo "0"
echo -n "  - Utilisations de isMobile : "
grep -c "isMobile" src/screens/LandingPage/LandingPage.tsx
echo -n "  - Utilisations de isDesktop : "
grep -c "isDesktop" src/screens/LandingPage/LandingPage.tsx