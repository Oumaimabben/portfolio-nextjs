'use client';

import { useState } from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/app/context/language-context';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Projects() {
  const { projects } = portfolioData;
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-background to-accent/5 relative overflow-hidden">
     

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-none">
            {t.sections.featuredProjects}
          </h2>
          <div className="mt-4 h-px w-16 bg-accent"></div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {projects.map((project, index) => {
                const translated = t.projects[project.id];
                return (
                  <div key={project.id} className="min-w-full">
                    <div className="group relative bg-card border border-accent/10 rounded-2xl p-6 sm:p-8 hover:border-accent/35 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">

                      {/* Decorative index */}
                      <span className="absolute top-5 right-6 text-5xl font-black text-accent/6 leading-none select-none pointer-events-none">
                        0{index + 1}
                      </span>

                      {/* Top row */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-tight">
                            {translated.title}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1">{t.sections.projectsSubtitle && ''}{project.startDate} — {project.endDate}</p>
                        </div>

                        {/* Date badge */}
                        <div className="flex items-center gap-1.5 bg-accent/8 border border-accent/20 text-accent text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap self-start">
                          {project.stack.length} technologies
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5 pb-5 border-b border-accent/10">
                        {translated.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.stack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-accent/8 text-accent/90 dark:text-accent border border-accent/20 text-xs hover:bg-accent/20 transition-all duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {translated.highlights.map((highlight, i) => (
                          <li key={i} className="flex gap-3 text-xs sm:text-sm text-muted-foreground group/item">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 group-hover/item:bg-accent flex-shrink-0 transition-colors duration-200"></span>
                            <span className="group-hover/item:text-foreground transition-colors duration-200">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrow Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 w-10 h-10 rounded-full bg-card border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all duration-200 shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 w-10 h-10 rounded-full bg-card border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all duration-200 shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === current
                  ? 'bg-accent w-6'
                  : 'bg-accent/30 hover:bg-accent/60 w-2.5'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}