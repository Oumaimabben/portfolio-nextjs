# Oumaima's Full Stack Portfolio

A modern, responsive portfolio website showcasing Oumaima Ben Othman's full-stack development expertise, projects, and professional experience.

## Tech Stack

- **Frontend**: Next.js 16 + React 19 + TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Data Management**: Client-side data from `/lib/portfolio-data.ts`
- **Deployment**: Vercel

## Project Structure

```
/app
  /api/portfolio - API routes for portfolio data
  layout.tsx - Root layout with metadata
  globals.css - Global styles with dark mode support
  page.tsx - Main portfolio page

/components
  nav.tsx - Navigation bar with mobile menu
  hero.tsx - Hero section with intro
  projects.tsx - Featured projects showcase
  experience.tsx - Professional experience timeline
  skills.tsx - Skills and expertise grid
  education.tsx - Education section
  contact.tsx - Contact information and social links

/lib
  portfolio-data.ts - Portfolio data (all of Oumaima's info)

/scripts
  seed-mongodb.js - MongoDB seeding script (for future integration)
```

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dark mode support with modern color scheme
- ✅ Smooth scrolling navigation
- ✅ Project showcase with tech stacks
- ✅ Professional experience timeline
- ✅ Skills categorized by expertise
- ✅ Contact information and social links
- ✅ Optimized performance with Next.js

## Content Included

- **Profile**: Name, title, email, phone, social links, summary
- **Skills**: 8 categories covering languages, frameworks, databases, DevOps, etc.
- **Experience**: 4 professional positions with detailed highlights
- **Projects**: 3 featured projects + 1 additional project showcased
- **Education**: 3 educational credentials
- **Contact**: Email, phone, LinkedIn, GitHub

## Getting Started

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3000
```

### Customization

To update portfolio data, edit `/lib/portfolio-data.ts`:

```typescript
export const portfolioData = {
  profile: { ... },
  skills: [ ... ],
  experience: [ ... ],
  projects: [ ... ],
  education: [ ... ]
}
```

## Design System

- **Colors**: Light mode (light grays) + Dark mode (dark backgrounds with cyan accents)
- **Primary Accent**: Cyan (#06B6D4)
- **Typography**: Clean, readable sans-serif fonts
- **Spacing**: Tailwind's standard spacing scale with responsive adjustments
- **Components**: shadcn/ui + custom Tailwind styling

## Future Enhancements

- MongoDB integration for dynamic data management
- Contact form with email notifications
- Blog section for technical articles
- Dark/light mode toggle
- Performance optimizations
- SEO improvements

## Deployment

The portfolio is ready for deployment on Vercel:

```bash
# Deploy to Vercel
vercel deploy
```

## License

© 2025 Oumaima Ben Othman. All rights reserved.
