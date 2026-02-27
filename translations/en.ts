const en = {
  nav: {
    home: "Home",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact"
  },
  hero: {
    role: "computer engineer & full stack developer",
    viewWork: "View My Work",
    downloadCV: "Download CV",
    summary: "Recent Software Engineering graduate specialized in Software Engineering and Information Systems with strong full-stack development expertise. Experienced in building scalable and secure web applications using the JS stack and modern DevOps practices."
  },
  sections: {
    education: "Education",
    experience: "Professional Experience",
    skills: "Skills & Expertise",
    featuredProjects: "Featured Projects",
    projectsSubtitle: "Innovative solutions I've built with modern technologies",
    otherProjectsTitle: "Other Projects",
    contactTitle: "Get In Touch",
    contactSubtitle: "Feel free to reach out for collaborations or inquiries",
    email: "Email",
    phone: "Phone",
    downloadCV: "Download CV",
    footerRights: "All rights reserved."
  },
  skills: [
  { category: 'Programming languages', items: ['JavaScript', 'TypeScript', 'Java', 'PHP', 'Python'] },
  { category: 'Developpement Frontend', items:  [ 'HTML','CSS', 'React.js', 'Angular', 'Next.js',  'Tailwind CSS', 'Redux'] },
  { category: 'Developpement Backend', items:  ['Node.js', 'Express.js', 'FastAPI', 'Django'] },  { category: 'Testing', items: ['Jest'] },
  { category: 'Databases', items: ['MongoDB', 'MySQL', 'Firebase','PostgreSQL'] },
  { category: 'DevOps', items: ['Docker', 'Kubernetes', 'GitLab CI/CD'] },
  { category: 'Version control', items: ['Git', 'GitHub'] },
  { category: 'Streaming', items: ['Apache Kafka'] },
  { category: 'Operating systems', items: ['Windows', ' SELinux'] },
  { category: 'Languages', items: ['English (Professional)', 'French (Professional)'] }

],
education: [
  {
    school: 'TEK-UP University',
    location: 'Tunis',
    degree: 'Engineering Degree in Software Engineering and Information Systems',
    startDate: 'Sep 2022',
    endDate: 'Oct 2025'
  },
  {
    school: 'Higher Institute of Computer Science (ISIma)',
    location: 'Mahdia',
    degree: 'Bachelor’s Degree in Computer Systems Engineering (Networks and Systems)',
    startDate: 'Sep 2019',
    endDate: 'Jun 2023'
  },
  {
    school: 'Zawiet Megaiz High School',
    location: 'Tunisia',
    degree: 'Baccalaureate in Experimental Sciences',
    startDate: 'Jun 2019',
    endDate: 'Jun 2019'
  }
],
  projects: {
    "1": {
      title: "E-Learning Platform",
      description: "Interactive MERN-based e-learning platform with quizzes, certifications, achievement badges, and an AI-powered chatbot.",
      highlights: [
        "Implemented role-based access control (students, owners, managers)",
        "Developed responsive UI using React.js, Redux, and Tailwind CSS",
        "Built RESTful APIs and backend architecture with Node.js and Express.js",
        "Integrated MongoDB for scalable data management"
      ]
    },

    "2":  {
  title: "TaskFlowHR - HR Management System",
  description: "Development of a comprehensive human resources management system including dashboards, leave management, and performance evaluations, with data persistence and real-time notifications.",
  highlights: [
    "Interactive interfaces and dashboards development with React.js",
    "Data management and persistence with TypeORM and MySQL",
    "Real-time notifications via WebSockets",
    "Frontend deployment on Netlify and backend deployment on Azure",
    "Leave management and employee performance tracking"
  ]
},
"3": {
  title: "Coworking Booking Application",
  description: "Meeting room booking application with real-time availability management.",
  highlights: [
    "Authentication and session management using JWT",
    "Email notifications for booking confirmations and updates",
    "RESTful API development with Node.js and Express",
    "Database management with MongoDB"
  ]
},
"4": {
  title: "Social Media Platform with Django",
  description: "A social media web application that allows users to publish content, manage their profiles, and interact with other users.",
  highlights: [
    "User authentication and session management using Django’s built-in authentication system",
    "MTV (Model - Template - View) architecture for clean and organized code structure",
    "Image and media handling using ImageField and Pillow",
    "SQLite database integration with Django automatic migrations",
    "Dependency isolation using Python virtual environment (venv)"
  ]
},
"5": {
  title: "BabyFoot Manager",
  description: "Collaborative real-time foosball game management application with integrated chat, instant synchronization, and persistent messages.",
  highlights: [
    "Create, update, end, and delete games with real-time synchronization across all clients",
    "Live score management and differentiation of completed games",
    "Integrated chat with messages persisted in PostgreSQL",
    "Backend built with Node.js, Express, and WebSocket without ORM (direct SQL queries)",
    "Interactive frontend developed with Vanilla JavaScript, HTML, and CSS",
    "Modular architecture with WebSocket handlers for games and chat",
    "Easy configuration via .env file with PostgreSQL compatibility",
    "Responsive interface and smooth user experience without page reload"
  ]
},
"6": {
  title: "MERN  Estate Platform",
  description: "Modern full-stack MERN real estate platform allowing users to create, read, update, and delete property listings, with secure authentication and advanced search features.",
  highlights: [
    "Advanced authentication using JWT, Firebase, and Google OAuth for secure login",
    "Full CRUD operations on property listings with MongoDB",
    "Image upload and listing management to enhance user experience",
    "Advanced search functionality to easily filter and find listings",
    "Complete MERN architecture: MongoDB, Express.js, React, Node.js",
    "Frontend state management with Redux Toolkit",
    "Responsive and modern UI built with React and Tailwind CSS"
  ]
},
"7": {
  title: "Full-Stack Next.js Portfolio",
  description: "Modern full-stack portfolio built with Next.js and Node.js to showcase my projects, technical skills, and professional experience with a high-performance architecture and responsive design.",
  highlights: [
    "Built with Next.js (App Router) for optimized performance and server-side rendering",
    "Node.js backend integration for dynamic data management and future API extensions",
    "Modular architecture with reusable components for better scalability and maintainability",
    "Multilingual support (English / French) with dynamic translation system",
    "Modern and responsive UI designed with Tailwind CSS",
    "Smooth animations and enhanced user experience",
    "SEO optimization and performance best practices"
  ]
}
  },

experience: [
  {
    title: 'Graduation Project : IAM System Developer',
    company: 'Pithos Global Technology',
    location: 'Tunisia',
    startDate: 'Feb 2025',
    endDate: 'Sep 2025',
    description: 'Designed and implemented an Identity and Access Management (IAM) system based on a microservices architecture.',
    highlights: [
      'Developed authentication, authorization, and access control modules using RBAC and ABAC models',
      'Built a modern web interface using React.js and Tailwind CSS',
      'Designed a strongly typed backend architecture with Node.js (TypeScript) and Express.js',
      'Integrated Apache Kafka as an event-driven message broker',
      'Developed and executed unit tests using Jest',
      'Implemented Multi-Factor Authentication (MFA)',
      'Ensured GDPR compliance with full audit logging and traceability',
      'Containerized and deployed services using Docker'
    ]
  },
  {
    title: 'E-Learning Platform Developer',
    company: 'Vast Sky Enterprise',
    location: 'Tunisia',
    startDate: 'Jun 2024',
    endDate: 'Aug 2024',
    description: 'Developed a full-stack e-learning platform delivering interactive courses and dynamic educational resources',
    highlights: [
      'Design and implementation of a responsive, intuitive, and high-performance user interface using React.js and Tailwind CSS, aligned with the existing design system.',
      ' Backend development with Node.js and Express.js to build secure RESTful APIs and handle business logic and authentication',
      'Integration of MongoDB for efficient data modeling and secure management of users, courses, content, and progress tracking.'
    ]
  },
  {
    title: 'Water Management App Developer',
    company: 'Treetronix',
    location: 'Tunisia',
    startDate: 'Jun 2023',
    endDate: 'Jul 2023',
    description: 'Developed a smart water management web application.',
    highlights: [
    'Development of an intelligent water management web application to enhance communication between users and the system.',
    'Design and implementation of RESTful APIs using Node.js and Express to ensure efficient data exchange.',
    'Development of a dynamic user interface with React to deliver an intuitive user experience.',
    'Integration of MongoDB for secure, scalable, and efficient data management.'
    ]
  },
 {
  title: 'Graduation Project',
  company: 'LEONI',
  location: 'Sousse, Tunisia',
  startDate: 'Feb 2022',
  endDate: 'May 2022',
  description: 'Development and design of  management web application, including its containerization.',
  highlights: [
    'Created a full-stack  management platform using Express, React, and Node.js.',
    'Designed a responsive and user-friendly interface to ensure seamless user experience.',
    'Optimized backend performance and implemented efficient data management with SQL.',
    'Containerized the application using Docker to improve deployment, scalability, and maintainability.'
  ]
}
]


};

export default en;