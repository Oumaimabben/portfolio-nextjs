'use client';

import { useLanguage } from '@/app/context/language-context';
import { portfolioData } from '@/lib/portfolio-data';
import { Calendar, MapPin } from 'lucide-react';
import type { ExperienceItem } from '../types/experience';
export function Experience() {
const { t } = useLanguage();
const { experience } = t;

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-accent/5 to-background relative overflow-hidden">
     
      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-none">
            {t.sections.experience}
          </h2>
          <div className="mt-4 h-px w-16 bg-accent"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent"></div>

          <div className="space-y-0">
               {(experience as ExperienceItem[]).map((job: ExperienceItem, index: number) => (              <div
                key={index}
                className="relative pl-10 sm:pl-14 pb-12 last:pb-0 group animate-slide-up"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 flex items-center justify-center">
                  <div className="w-4 h-4 sm:w-[18px] sm:h-[18px] rounded-full bg-background border-2 border-accent group-hover:bg-accent group-hover:scale-125 transition-all duration-300 z-10"></div>
                  <div className="absolute w-7 h-7 rounded-full bg-accent/10 group-hover:bg-accent/20 group-hover:scale-150 transition-all duration-500"></div>
                </div>

                {/* Card */}
                <div className="relative bg-card border border-accent/10 rounded-2xl p-5 sm:p-6 group-hover:border-accent/35 group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-300">

                  {/* Index number — decorative */}
                  <span className="absolute top-4 right-5 text-4xl font-black text-accent/6 leading-none select-none pointer-events-none">
                    0{index + 1}
                  </span>

                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                        {job.title}
                      </h3>
                      <p className="text-accent font-semibold text-sm mt-0.5">{job.company}</p>
                    </div>

                    {/* Date badge */}
                    <div className="flex items-center gap-1.5 bg-accent/8 border border-accent/20 text-accent text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap self-start">
                      <Calendar className="w-3 h-3" />
                      {job.startDate} — {job.endDate}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                    <MapPin className="w-3 h-3 text-accent/50" />
                    {job.location}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 pb-4 border-b border-accent/10">
                    {job.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {job.highlights.map((highlight: string, i: number) => (
                      <li key={i} className="flex gap-3 text-xs sm:text-sm text-muted-foreground group/item">
                        <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-accent/50 group-hover/item:bg-accent flex-shrink-0 transition-colors duration-200"></span>
                        <span className="group-hover/item:text-foreground transition-colors duration-200">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}