const fr = {
  nav: {
    home: "Accueil",
    projects: "Projets",
    skills: "Compétences",
    contact: "Contact"
  },
  hero: {
    role: "Ingénieur informatique &  développeur full stack",
    viewWork: "Voir mes projets",
    downloadCV: "Télécharger CV",
    summary: "Jeune diplômée Ingénieure en Logiciel spécialisée en Génie Logiciel et Systèmes d'Information avec une solide formation en développement full-stack. Expérimentée dans la création d'applications web évolutives et sécurisées en utilisant le stack JS et les pratiques modernes de DevOps."
  },
  sections: {
    education: "Formation",
    experience: "Expérience Professionnelle",
    skills: "Compétences & Expertise",
    featuredProjects: "Projets Principaux",
    projectsSubtitle: "Solutions innovantes que j'ai développées avec des technologies modernes",
    otherProjectsTitle: "Autres Projets",
    contactTitle: "Me Contacter",
    contactSubtitle: "N'hésitez pas à me contacter pour une collaboration",
    email: "Email",
    phone: "Téléphone",
    downloadCV: "Télécharger CV",
    footerRights: "Tous droits réservés."
  },
  skills: [
  { category: 'Langages de programmation', items: ['JavaScript', 'TypeScript', 'Java', 'PHP', 'Python'] },
  { category: 'Développement Frontend', items:  [ 'HTML','CSS', 'React.js', 'Angular', 'Next.js',  'Tailwind CSS', 'Redux'] },
  { category: 'Développement Backend', items:  ['Node.js', 'Express.js', 'FastAPI', 'Django'] },
  { category: 'Tests', items: ['Jest'] },
  { category: 'Bases de données', items: ['MongoDB', 'MySQL', 'Firebase','PostgreSQL'] },
  { category: 'DevOps', items: ['Docker', 'Kubernetes', 'GitLab CI/CD'] },
  { category: 'Gestion de versions', items: ['Git', 'GitHub',] },
  { category: 'Messagerie', items: ['Apache Kafka'] },
  { category: 'Systèmes d’exploitation', items: ['Windows', ' SELinux'] },
  { category: 'Langues', items: ['Anglais (Professionnel)', 'Français (Professionnel)'] }
],

education: [
  {
    school: 'Université TEK-UP',
    location: 'Tunis',
    degree: 'Diplôme d\'ingénieur en Génie Logiciel et Systèmes d\'Information',
    startDate: 'Sep 2022',
    endDate: 'Oct 2025'
  },
  {
    school: 'Institut Supérieur des Systèmes Informatiques (ISIma)',
    location: 'Mahdia',
    degree: 'Licence en Génie des Systèmes Informatiques (Réseaux et Systèmes)',
    startDate: 'Sep 2019',
    endDate: 'Jun 2023'
  },
  {
    school: 'Lycée Zawiet Megaiz',
    location: 'Tunisia',
    degree: 'Baccalauréat en Sciences Expérimentales',
    startDate: 'Jun 2019',
    endDate: 'Jun 2019'
  }
],
  projects: {
    "1": {
      title: "Plateforme E-Learning",
      description: "Plateforme e-learning interactive basée sur MERN avec quiz, certifications, badges de réussite et chatbot IA.",
      highlights: [
        "Contrôle d'accès basé sur les rôles (étudiants, propriétaires, managers)",
        "Interface responsive avec React.js, Redux et Tailwind CSS",
        "APIs RESTful et architecture backend avec Node.js et Express.js",
        "Intégration MongoDB pour la gestion des données évolutive"
      ]
    },
    "2": {
      title: "TaskFlowHR - Système de Gestion RH",
      description: "Développement d'un système de gestion des ressources humaines complet incluant tableaux de bord, gestion des congés et évaluations de performance, avec persistance des données et notifications en temps réel.",
      highlights: [
        "Développement d'interfaces interactives et dashboards avec React.js",
        "Gestion des données et persistance avec TypeORM et MySQL",
        "Notifications en temps réel via WebSockets",
        "Déploiement du frontend sur Netlify et du backend sur Azure",
        "Gestion des congés et suivi des performances des employés"
      ]
    },
    "3": {
      title: "Application de Réservation d'Espaces de Coworking",
      description: "Application de réservation de salles de réunion avec gestion des disponibilités en temps réel.",
      highlights: [
        "Authentification et gestion des sessions avec JWT",
        "Notifications par email pour les confirmations et modifications",
        "Développement d'API RESTful avec Node.js et Express",
        "Gestion des données avec MongoDB"
      ]
    },
    "4": {
  title: "Plateforme Réseau Social avec Django",
  description: "Application web de type réseau social permettant aux utilisateurs de publier du contenu, gérer leur profil et interagir avec d'autres membres.",
  highlights: [
    "Authentification et gestion des utilisateurs avec le système intégré de Django",
    "Architecture MTV (Model - Template - View) pour une organisation claire du code",
    "Gestion des images et fichiers médias avec ImageField et Pillow",
    "Base de données SQLite avec migrations automatiques Django",
    "Isolation des dépendances via environnement virtuel (venv)"
  ]
},

   "5":{
  title: "Gestionnaire de BabyFoot",
  description: "Application collaborative de gestion de parties de baby-foot en temps réel avec chat intégré, synchronisation instantanée et persistance des messages.",
  highlights: [
    'Création, modification, fin et suppression de parties avec synchronisation en temps réel pour tous les clients',
    'Gestion des scores en direct et différenciation des parties terminées',
    'Chat intégré avec messages persistants dans PostgreSQL',
    'Backend avec Node.js, Express et WebSocket sans ORM (requêtes SQL directes)',
    'Frontend interactif développé avec Vanilla JavaScript, HTML et CSS',
    'Architecture modulaire avec handlers WebSocket pour jeux et chat',
    'Configuration facile via fichier .env et compatibilité PostgreSQL',
    'Interface responsive et expérience utilisateur fluide sans rechargement de page'
  ]
},
"6": {
  title: "Plateforme immobilière MERN",
  description: "Plateforme immobilière moderne full-stack MERN permettant aux utilisateurs de créer, consulter, mettre à jour et supprimer des annonces, avec authentification sécurisée et fonctionnalités avancées de recherche.",
  highlights: [
    "Authentification avancée avec JWT, Firebase et Google OAuth pour une connexion sécurisée",
    "Opérations CRUD complètes sur les annonces immobilières avec MongoDB",
    "Téléversement d’images et gestion des annonces pour améliorer l’expérience utilisateur",
    "Fonctionnalité de recherche avancée pour filtrer et trouver facilement des annonces",
    "Architecture complète MERN : MongoDB, Express.js, React, Node.js",
    "Gestion de l’état frontend avec Redux Toolkit",
    "Interface responsive et moderne avec React et Tailwind CSS"
  ]
},
"7": {
  title: "Portfolio Full-Stack Next.js",
  description: "Portfolio moderne full-stack développé avec Next.js et Node.js pour présenter mes projets, compétences techniques et expériences professionnelles avec une architecture performante et un design responsive.",
  highlights: [
    "Développement avec Next.js (App Router) pour un rendu optimisé et performant",
    "Backend Node.js pour la gestion dynamique des données et des futures extensions API",
    "Architecture modulaire et composants réutilisables pour une maintenance simplifiée",
    "Gestion multilingue (Français / Anglais) avec système de traduction dynamique",
    "Interface moderne et responsive avec Tailwind CSS",
    "Animations fluides et expérience utilisateur optimisée",
    "Optimisation SEO et bonnes pratiques de performance"
  ]
}
  },
 // fr.ts — experience (version corrigée)
experience: [
  {
    title: 'Stage de fin d’études : Développeur de système IAM',
    company: 'Pithos Global Technology',
    location: 'Tunisia',
    startDate: 'Feb 2025',
    endDate: 'Sep 2025',
    description: 'Conception et implémentation d\'un système de gestion des identités et des accès (IAM) basé sur une architecture microservices.',
    highlights: [
      'Implémentation des modules d\'authentification, d\'autorisation et de contrôle d\'accès avec les modèles RBAC et ABAC',
      'Développement d\'une interface web moderne avec React.js et Tailwind CSS',
      'Architecture backend typée avec Node.js (TypeScript) et Express.js',
      'Intégration d\'Apache Kafka comme broker événementiel',
      'Développement et exécution des tests unitaires avec Jest',
      'Authentification multi-facteurs (MFA)',
      'Conformité RGPD avec traçabilité complète des accès',
      'Conteneurisation et déploiement avec Docker'
    ]
  },
  {
    title: 'Développeur de plateforme d\'apprentissage en ligne',
    company: 'Vast Sky Enterprise',
    location: 'Tunisia',
    startDate: 'Jun 2024',
    endDate: 'Aug 2024',
    description: 'Développement d’une plateforme e-learning full-stack proposant des cours interactifs et des ressources pédagogiques dynamiques.',
    highlights: [
       'Conception et implémentation du frontend avec React.js et Tailwind CSS, en respectant le design existant et en garantissant une interface responsive, intuitive et performante',
        'Mise en place du backend avec Node.js et Express.js pour la gestion des API REST, de l’authentification et de la logique métier.',
        'Intégration de MongoDB pour la modélisation et la gestion sécurisée des données (utilisateurs, cours, progression, contenus).'
      ]
    
  },
  {
    title: 'Développeur  d\'applications de gestion de  l\'eau',
    company: 'Treetronix',
    location: 'Tunisia',
    startDate: 'Jun 2023',
    endDate: 'Jul 2023',
    description: 'Application web de gestion intelligente de l\'eau.',
    highlights: [
      'Développement d’une application web de gestion intelligente de l’eau pour améliorer la communication entre les utilisateurs et le système.',
      'Création d’API RESTful avec Node.js et Express pour un échange de données efficace.',
      'Développement d’une interface utilisateur dynamique avec React pour une expérience intuitive.',
      'Intégration de MongoDB pour une gestion sécurisée et évolutive des données.'
    ]
  },
  {
  title: 'Projet de fin d’études',
  company: 'LEONI',
  location: 'Sousse, Tunisie',
  startDate: 'Fév 2022',
  endDate: 'Mai 2022',
  description: 'Conception et développement d’une application web de gestion , incluant sa conteneurisation.',
  highlights: [
    'Création d’une plateforme full-stack de gestion  utilisant Express, React et Node.js.',
    'Conception d’une interface utilisateur responsive et intuitive garantissant une expérience fluide.',
    'Optimisation du backend et mise en place d’une gestion efficace des données avec SQL.',
    'Conteneurisation de l’application avec Docker afin d’améliorer le déploiement, la scalabilité et la maintenabilité.'
  ]
}
]
};

export default fr;