export const portfolioData = {
  profile: {
    name: 'Ben Othman Oumaima',
    title: 'Ingénieur informatique &  développeur full stack',
    email: 'oumaima.benothmene@gmail.com',
    phone: '+216 27 391 739',
    github: 'https://github.com/Oumaimabben',
    linkedin: 'https://linkedin.com/in/Oumama-Ben-Othman',
    summary: 'Jeune diplômée Ingénieure en Logiciel spécialisée en Génie Logiciel et Systèmes d\'Information avec une solide formation en développement full-stack. Expérimentée dans la création d\'applications web évolutives et sécurisées en utilisant le stack JS et les pratiques modernes de DevOps.',
    location: 'Tunisia'
  },

  skills: [
    {
      category: 'Langages de Programmation',
      items: ['JavaScript', 'TypeScript', 'Java', 'PHP', 'Python']
    },
    {
      category: 'Developpement Frontend',
      items: [ 'HTML','CSS', 'React.js', 'Angular', 'Next.js',  'Tailwind CSS', 'Redux']
    },
     {
      category: 'Developpement Backend',
      items: ['Node.js', 'Express.js', 'FastAPI', 'Django']
    },
    {
      category: 'Testing',
      items: ['Jest']
    },
    {
      category: 'Databases',
      items: ['MongoDB', 'MySQL', 'Firebase','PostgreSQL']
    },
    {
      category: 'DevOps',
      items: ['Docker', 'Kubernetes', 'GitLab CI/CD']
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'VS Code', 'Postman']
    },
    {
      category: 'Messaging',
      items: ['Apache Kafka']
    }
  ],

  experience: [
    {
      title: 'IAM System Developer',
      company: 'Pithos Global Technology',
      location: 'Tunisia',
      startDate: 'Feb 2025',
      endDate: 'Sep 2025',
      description: 'Conception et mise en œuvre d\'un système Identity and Access Management (IAM) basé sur une architecture microservices.',
      highlights: [
        'Développement des modules d\'authentification, d\'autorisation et de contrôle d\'accès utilisant les modèles RBAC et ABAC',
        'Création d\'une application web moderne avec React.js et Tailwind CSS',
        'Backend typé en Node.js (TypeScript) et Express.js',
        'Mise en place d\'Apache Kafka comme broker événementiel',
        'Développement et exécution des tests avec Jest',
        'Authentification multi-facteurs (MFA)',
        'Conformité au RGPD avec traçabilité complète',
        'Déploiement avec Docker'
      ]
    },
    {
      title: 'E-Learning Platform Developer',
      company: 'Vast Sky Enterprise',
      location: 'Tunisia',
      startDate: 'Jun 2024',
      endDate: 'Aug 2024',
      description: 'Développement d\'une plateforme e-learning dynamique avec cours interactifs.',
      highlights: [
        'Interface utilisateur responsive avec React.js et Tailwind CSS'
      ]
    },
    {
      title: 'Water Management App Developer',
      company: 'Treetronix',
      location: 'Tunisia',
      startDate: 'Jun 2023',
      endDate: 'Jul 2023',
      description: 'Application web de gestion intelligente de l\'eau.',
      highlights: [
        'API RESTful avec Node.js et Express',
        'Interface utilisateur dynamique avec React',
        'Intégration MongoDB pour gestion des données'
      ]
    },
    {
      title: 'Real Estate Platform Developer',
      company: 'LEONI',
      location: 'Sousse',
      startDate: 'Feb 2022',
      endDate: 'May 2022',
      description: 'Plateforme de gestion immobilière avec Express, React et Node.js.',
      highlights: [
        'Dockerisation de l\'application',
        'Interface responsive et optimisation des performances'
      ]
    }
  ],

  projects: [
   {
  id: '1',
  title: 'E-Learning Platform',
  stack: ['React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  startDate: 'Sep 2024',
  endDate: 'Dec 2024',
  description: 'Interactive MERN-based e-learning platform with quizzes, certifications, achievement badges, and an AI-powered chatbot.',
  highlights: [
    'Implemented role-based access control (students, owners, managers)',
    'Developed responsive UI using React.js, Redux, and Tailwind CSS',
    'Built RESTful APIs and backend architecture with Node.js and Express.js',
    'Integrated MongoDB for scalable data management'
  ],
  featured: true
},
    
   {
  id: '2',
  title: 'TaskFlowHR - HR Management System',
  stack: ['React.js', 'Node.js', 'Express.js', 'TypeORM', 'MySQL', 'WebSockets'],
  startDate: 'Sep 2024',
  endDate: 'Dec 2024',
  description: "Développement d’un système de gestion des ressources humaines complet incluant tableaux de bord, gestion des congés et évaluations de performance, avec persistance des données et notifications en temps réel.",
  highlights: [
    "Développement d’interfaces interactives et dashboards avec React.js",
    "Gestion des données et persistance avec TypeORM et MySQL",
    "Notifications en temps réel via WebSockets",
    "Déploiement du frontend sur Netlify et du backend sur Azure",
    "Gestion des congés et suivi des performances des employés"
  ],
  featured: true
},
{
  id: '3',
  title: 'Coworking-Book-MEAN',
  stack: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT'],
  startDate: 'May 2024',
  endDate: 'juin 2024',
  description: "Conception et développement d’une application web de réservation de salles de réunion basée sur l’architecture MEAN Stack, permettant la gestion des disponibilités et des réservations en temps réel.",
  highlights: [
    'Développement d’une interface dynamique et responsive avec Angular',
    'Implémentation d’une authentification sécurisée et gestion des sessions avec JWT',
    'Conception et développement d’API RESTful avec Node.js et Express.js',
    'Modélisation et gestion des données avec MongoDB et Mongoose',
    'Intégration de notifications par email pour confirmations et modifications de réservation',
    'Gestion des créneaux horaires avec validation et contrôle de disponibilité'
  ],
  featured: true
},
{
  id: '4',
  title: 'Django-Social-Media',
  stack: ['Django', 'Python', 'SQLite', 'HTML', 'CSS', 'Pillow'],
  startDate: 'Jan 2025',
  endDate: 'Feb 2025',
  description: "Conception et développement d’une application web de réseau social basée sur Django, permettant aux utilisateurs de créer un compte, publier du contenu avec images et interagir en temps réel.",
  highlights: [
    'Implémentation d’un système complet d’authentification et de gestion des utilisateurs avec Django',
    'Architecture MTV (Model-Template-View) pour une organisation claire et maintenable du code',
    'Gestion des images et fichiers médias avec ImageField et Pillow',
    'Configuration et gestion de la base de données SQLite avec migrations automatiques',
    'Isolation des dépendances via environnement virtuel (venv)',
    'Développement d’une interface responsive avec Django Templates et CSS'
  ],
  featured: true
},
{
  id: '5',
  title: 'BabyFoot Manager',
  stack: ['Node.js', 'Express', 'WebSocket', 'Vanilla JavaScript', 'PostgreSQL', 'HTML', 'CSS'],
  startDate: 'Dec 2025',
  endDate: 'Dec 2025',
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
  ],
  featured: true
},
{
  id: '6',
  title: 'MERN  Estate Platform',
  stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux Toolkit', 'Tailwind CSS', 'JWT'],
  startDate: 'Mar 2024',
  endDate: 'May 2024',
  description: "Plateforme immobilière full-stack MERN permettant aux utilisateurs de créer, consulter, mettre à jour et supprimer des annonces avec authentification sécurisée et fonctionnalités avancées de recherche.",
  highlights: [
    'Authentification avancée avec JWT, Firebase et Google OAuth pour une connexion sécurisée',
    'CRUD complet sur les annonces immobilières avec MongoDB',
    'Téléversement d’images et gestion des annonces pour améliorer l’expérience utilisateur',
    'Fonctionnalité de recherche avancée pour filtrer et trouver facilement des annonces',
    'Architecture complète MERN : MongoDB, Express.js, React.js, Node.js',
    'Gestion de l’état frontend avec Redux Toolkit',
    'Interface responsive et moderne avec React.js et Tailwind CSS'
  ],
  featured: true
},
{
  id: '7',
  title: 'Full-Stack Developer Portfolio',
  stack: ['Next.js', 'Node.js', 'Tailwind CSS', 'TypeScript'],
  startDate: 'Feb 2026',
  endDate: 'Feb 2026',
  description: 'Modern full-stack portfolio built with Next.js and Node.js to showcase my projects, technical skills, and professional experience with a responsive and high-performance design.',
  highlights: [
    'Developed using Next.js with App Router for optimized rendering and performance',
    'Implemented a modular and scalable architecture with reusable components',
    'Designed a fully responsive and modern UI using Tailwind CSS',
    'Integrated multilingual support (English/French) with dynamic translations',
    'Applied SEO best practices and performance optimization techniques',
    'Structured content dynamically to easily manage projects and skills'
  ],
  featured: false
}

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
      school: 'Institut Supérieur des Systèmes Informatiques',
      location: 'Sousse',
      degree: 'Licence en Génie des Systèmes Informatiques',
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
  ]
};
