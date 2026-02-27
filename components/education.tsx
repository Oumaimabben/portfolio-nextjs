'use client';

import { useLanguage } from '@/app/context/language-context';
import { MapPin } from 'lucide-react';

export function Education() {
  const { t } = useLanguage();
  const education = t.education;

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-background to-accent/5 relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto relative">
        
        {/* Header */}
        <div className="mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-none">
            {t.sections.education}
          </h2>
          <div className="mt-4 h-px w-16 bg-accent"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          
          {/* Vertical line */}
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent"></div>

          <div className="space-y-0">
            {education.map((edu, index) => (
              <div
                key={`${edu.school}-${index}`}
                className="relative pl-10 sm:pl-14 pb-10 last:pb-0 group animate-slide-up"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 flex items-center justify-center">
                  <div className="w-4 h-4 sm:w-[18px] sm:h-[18px] rounded-full bg-background border-2 border-accent group-hover:bg-accent group-hover:scale-125 transition-all duration-300 z-10"></div>
                  <div className="absolute w-7 h-7 rounded-full bg-accent/10 group-hover:bg-accent/20 group-hover:scale-150 transition-all duration-500"></div>
                </div>

                {/* Card */}
                <div className="relative bg-card border border-accent/10 rounded-2xl p-5 sm:p-6 group-hover:border-accent/35 group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-300">

                  {/* Decorative index */}
                  <span className="absolute top-4 right-5 text-4xl font-black text-accent/6 leading-none select-none pointer-events-none">
                    0{index + 1}
                  </span>

                  {/* Degree */}
                  <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight pr-10">
                    {edu.degree}
                  </h3>

                  {/* School */}
                  <p className="text-accent font-semibold text-sm mt-1">
                    {edu.school}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    
                    {/* Location */}
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3 text-accent/50" />
                      {edu.location}
                    </div>

                    {/* Dates */}
                    <div className="flex items-center gap-1.5 bg-accent/8 border border-accent/20 text-accent text-xs font-medium px-3 py-1 rounded-full">
                      {edu.startDate} — {edu.endDate}
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}