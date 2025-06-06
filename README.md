# 🌟 Portfolio de Mohamed Yecir Badirou

[![React](https://img.shields.io/badge/React-18.x-blue?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-FF0066?logo=framer)](https://www.framer.com/motion/)
[![EmailJS](https://img.shields.io/badge/EmailJS-Contact-orange)](https://www.emailjs.com/)

> Portfolio interactif et moderne d'un développeur fullstack passionné, étudiant à l'ISEN Lille.

## 🚀 Aperçu

Portfolio personnel présentant mes compétences, projets et parcours professionnel. Entièrement responsive avec des animations fluides et un système de traduction français/anglais.

### ✨ Fonctionnalités

- 🌍 **Bilingue** : Interface complète en français et anglais
- 📱 **Responsive** : Optimisé pour tous les appareils
- 🎨 **Animations fluides** : Powered by Framer Motion
- 📧 **Contact fonctionnel** : Formulaire intégré avec EmailJS
- 🌙 **Mode sombre** : Interface moderne et élégante
- ⚡ **Performance** : Optimisé pour une expérience utilisateur fluide

## 🛠️ Technologies utilisées

### Frontend
- **React 18** - Framework JavaScript moderne
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations et transitions
- **React Icons** - Bibliothèque d'icônes

### Services
- **EmailJS** - Service d'envoi d'emails
- **GitHub Pages / Vercel** - Hébergement

### Outils de développement
- **Create React App** - Configuration et build
- **PostCSS** - Traitement CSS
- **ESLint** - Linting du code

## 📁 Structure du projet

```
portfolio/
├── public/
│   ├── cv/
│   │   └── CV_BADIROU_Mohamed_Yecir_Alternance.pdf
│   ├── Studialink.png
│   ├── virtual_desk.png
│   └── ...
├── src/
│   ├── components/
│   │   ├── About.jsx          # Page À propos
│   │   ├── Contact.jsx        # Page Contact avec formulaire
│   │   ├── Layout.jsx         # Layout principal
│   │   ├── Navbar.jsx         # Navigation mobile
│   │   ├── Parcours.jsx       # Parcours académique/professionnel
│   │   ├── Projects.jsx       # Galerie de projets
│   │   ├── Sidebar.jsx        # Sidebar desktop
│   │   └── Skills.jsx         # Compétences techniques
│   ├── utils/
│   │   └── translations.js    # Système de traduction
│   ├── App.js
│   ├── index.js
│   └── index.css
└── ...
```

## 🔧 Installation et utilisation

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation

1. **Cloner le repository**
```bash
git clone https://github.com/BYecir02/MYB.git
cd portfolio
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration EmailJS** (optionnel)
```javascript
// Dans src/components/Contact.jsx, remplacez par vos clés EmailJS :
await emailjs.send(
  'VOTRE_SERVICE_ID',
  'VOTRE_TEMPLATE_ID',
  formData,
  'VOTRE_PUBLIC_KEY'
);
```

4. **Lancer le serveur de développement**
```bash
npm start
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📦 Build de production

```bash
npm run build
```

Génère une version optimisée dans le dossier `build/`.

## 🌐 Déploiement

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

### Vercel
1. Connectez votre repository GitHub à Vercel
2. Déployement automatique à chaque push

## 📋 Sections du portfolio

### 🧑‍💻 À propos
- Présentation personnelle
- Qualités professionnelles
- Valeurs et objectifs
- Téléchargement CV

### 🎓 Parcours
- Formation académique (ISEN Lille, CPMS)
- Expériences professionnelles
- Timeline interactive

### 💻 Compétences
- Frontend (React, HTML/CSS, JavaScript)
- Backend (Python, Node.js, Bases de données)
- Outils de design (Figma, Canva)
- Gestion de projet (Trello, Notion)

### 🚀 Projets
- **StudiaLink** : Plateforme collaborative étudiante
- **Portfolio Interactif** : Ce portfolio
- **Simulateur Windows** : Application web interactive

### 📞 Contact
- Formulaire de contact fonctionnel
- Informations de contact
- Liens réseaux sociaux

## 🌍 Internationalisation

Le portfolio supporte deux langues :
- 🇫🇷 **Français** (par défaut)
- 🇬🇧 **English**

Changement de langue via le bouton en haut à droite.

## 📱 Responsive Design

- **Desktop** : Layout avec sidebar
- **Tablet** : Layout adaptatif
- **Mobile** : Navigation bottom avec optimisations tactiles

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request


## 👨‍💻 Auteur

**Mohamed Yecir Badirou**
- 📧 Email : [Badirouyecir@gmail.com](mailto:Badirouyecir@gmail.com)
- 💼 LinkedIn : [Mohamed Yecir Badirou](https://www.linkedin.com/in/mohamed-yecir-badirou-4b46a2299/)
- 🐱 GitHub : [@BYecir02](https://github.com/BYecir02)
- 📍 Localisation : Villeneuve d'Ascq, France

## 🙏 Remerciements

- **React Team** pour le framework
- **Tailwind Labs** pour Tailwind CSS
- **Framer** pour Framer Motion
- **EmailJS** pour le service d'emails
- **React Icons** pour les icônes

---

⭐ **N'hésitez pas à mettre une étoile si ce projet vous plaît !**

🔗 **Lien vers le portfolio en ligne** : [https://myb-byecir02s-projects.vercel.app/]

---

*Développé avec ❤️ par Mohamed Yecir Badirou*
