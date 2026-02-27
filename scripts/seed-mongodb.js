import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/oumaima-portfolio';

const portfolioData = {
  profile: {
    name: 'Ben Othman Oumaima',
    title: 'Full Stack Ingénieur informatique &  développeur full stack',
    email: 'oumaima.benothmene@gmail.com',
    phone: '+216 27 391 739',
    github: 'https://github.com/Oumaimabben',
    linkedin: 'https://linkedin.com/in/Oumama-Ben-Othman',
    summary: 'Jeune diplômée Ingénieure en Logiciel spécialisée en Génie Logiciel et Systèmes d\'Information avec une solide formation en développement full-stack. Expérimentée dans la création d\'applications web évolutives et sécurisées en utilisant le stack JS et les pratiques modernes de DevOps. Passionnée par la création de solutions numériques innovantes.',
    location: 'Tunisia',
    profileImage: '/images/oumaima.jpg'
  },
  
  skills: [
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Java', 'PHP', 'HTML', 'CSS'] },
    { category: 'Frameworks', items: ['React.js', 'Angular', 'Node.js', 'Express.js', 'Tailwind CSS', 'Redux'] },
    { category: 'Testing', items: ['Jest'] },
    { category: 'Databases', items: ['MongoDB', 'MySQL', 'Firebase'] },
    { category: 'DevOps', items: ['Docker', 'Kubernetes', 'GitLab CI/CD'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman'] },
    { category: 'Messaging', items: ['Apache Kafka'] },
    { category: 'Languages', items: ['English (Professional)', 'French (Professional)'] }
  ],
  
  experience: [
    {
      title: 'IAM System Developer',
      company: 'Pithos Global Technology',
      location: 'Tunisia',
      startDate: 'Feb 2025',
      endDate: 'Sep 2025',
      description: 'Conception et mise en œuvre d\'un système Identity and Access Management (IAM) basé sur une architecture microservices, garantissant évolutivité, modularité et intégration fluide dans la plateforme ERP.',
      highlights: [
        'Développement des modules d\'authentification, d\'autorisation et de contrôle d\'accès utilisant les modèles RBAC et ABAC',
        'Création d\'une application web moderne et responsive avec React.js et Tailwind CSS et un backend typé en Node.js (TypeScript) et Express.js',
        'Mise en place d\'Apache Kafka comme broker événementiel pour la communication entre microservices',
        'Développement et exécution des tests unitaires et d\'intégration avec Jest',
        'Mise en œuvre d\'une authentification multi-facteurs (MFA) pour renforcer la sécurité',
        'Assurance de la conformité au RGPD avec traçabilité et audit complet',
        'Déploiement avec Docker'
      ]
    },
    {
      title: 'E-Learning Platform Developer',
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
      title: 'Water Management App Developer',
      company: 'Treetronix',
      location: 'Tunisia',
      startDate: 'Jun 2023',
      endDate: 'Jul 2023',
      description: 'Développement d\'une application web de gestion intelligente de l\'eau pour améliorer la communication entre les utilisateurs et le système.',
      highlights: [
        'Création d\'API RESTful avec Node.js et Express pour un échange de données efficace',
        'Développement d\'une interface utilisateur dynamique avec React pour une expérience intuitive',
        'Intégration de MongoDB pour une gestion sécurisée et évolutive des données'
      ]
    },
    {
      title: 'Real Estate Platform Developer',
      company: 'LEONI',
      location: 'Sousse',
      startDate: 'Feb 2022',
      endDate: 'May 2022',
      description: 'Conception et développement d\'une plateforme de gestion immobilière avec Express, React et Node.js.',
      highlights: [
        'Dockerisation de l\'application pour une meilleure scalabilité et un déploiement efficace',
        'Mise en œuvre d\'une interface responsive et optimisation des performances du backend'
      ]
    }
  ],
  
  projects: [
    {
      title: 'E-Learning Platform',
      stack: ['React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      startDate: 'Sep 2024',
      endDate: 'Present',
      description: 'Développement d\'une plateforme interactive incluant quiz, certificats, badges et un chatbot alimenté par l\'IA.',
      highlights: [
        'Gestion des rôles utilisateurs (étudiants, propriétaires, managers) pour un accès personnalisé',
        'Création du frontend avec React.js, Redux et Tailwind CSS',
        'Développement du backend avec Node.js, Express.js et MongoDB'
      ],
      featured: true
    },
    {
      title: 'Coworking Booking Application',
      stack: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      startDate: 'May 2024',
      endDate: 'Present',
      description: 'Conception et développement d\'une application de réservation de salles de réunion, avec une interface front-end réalisée en Angular.',
      highlights: [
        'Mise en place d\'une authentification et gestion de sessions basées sur JWT',
        'Intégration des notifications par email pour les confirmations et modifications de réservation',
        'Développement d\'API RESTful avec Node.js et Express'
      ],
      featured: false
    },
    {
      title: 'TaskFlowHR - HR Management System',
      stack: ['React.js', 'Node.js', 'Express.js', 'TypeORM', 'MySQL', 'WebSockets'],
      startDate: 'Sep 2024',
      endDate: 'Present',
      description: 'Développement d\'un système de gestion RH incluant tableaux de bord, gestion des congés et évaluations de performance.',
      highlights: [
        'Intégration de TypeORM avec MySQL pour la persistance des données',
        'Mise en place de notifications en temps réel avec WebSockets',
        'Déploiement du frontend sur Netlify et du backend sur Azure'
      ],
      featured: true
    },
    {
  title: "Plateforme Réseau Social avec Django",
  description: "Application web de type réseau social permettant aux utilisateurs de publier du contenu, gérer leur profil et interagir avec d'autres membres.",
  highlights: [
    "Authentification et gestion des utilisateurs avec le système intégré de Django",
    "Architecture MTV (Model - Template - View) pour une organisation claire du code",
    "Gestion des images et fichiers médias avec ImageField et Pillow",
    "Base de données SQLite avec migrations automatiques Django",
    "Isolation des dépendances via environnement virtuel (venv)"
   ],
      featured: true
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
  ]
};

async function seedDatabase() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB!');

    // For now, just log the data that would be seeded
    console.log('Portfolio data ready to be seeded:', JSON.stringify(portfolioData, null, 2));
    
    // Seed logic will be added here with Mongoose models
    console.log('Seed completed successfully!');
    
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
