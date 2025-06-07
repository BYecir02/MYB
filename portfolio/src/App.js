import { useEffect } from 'react';
import './App.css';
import Layout from './components/Layout'

function App() {
  useEffect(() => {
    // Données structurées JSON-LD pour Google
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Mohamed Yecir Badirou",
      "jobTitle": "Développeur Fullstack",
      "description": "Étudiant ingénieur ISEN Lille recherchant une alternance en développement web",
      "url": "https://myb-seven.vercel.app",
      "image": "https://myb-seven.vercel.app/image.jpg",
      "sameAs": [
        "https://linkedin.com/in/mohamed-yecir-badirou", // Remplacez par votre vraie URL LinkedIn
        "https://github.com/votre-username" // Remplacez par votre vraie URL GitHub
      ],
      "alumniOf": {
        "@type": "Organization",
        "name": "ISEN Lille",
        "url": "https://www.isen-lille.fr"
      },
      "knowsAbout": [
        "React", 
        "Node.js", 
        "Python", 
        "JavaScript", 
        "Développement Web", 
        "Développement Fullstack",
        "MySQL",
        "Tailwind CSS"
      ],
      "email": "mohamed.badirou@isen-lille.fr", // Votre vraie adresse email
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lille",
        "addressCountry": "FR"
      },
      "seeks": {
        "@type": "JobPosting",
        "title": "Alternance Développeur Fullstack",
        "description": "Recherche d'une alternance en développement web et mobile"
      }
    });
    
    // Ajouter le script au head
    document.head.appendChild(script);

    // Mettre à jour le titre de la page dynamiquement
    document.title = "Mohamed Yecir Badirou - Portfolio Développeur Fullstack | ISEN Lille";

    // Nettoyer le script au démontage du composant
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []); // Se lance une seule fois au montage

  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;