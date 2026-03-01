'use client';

import { portfolioData } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Phone, Download } from 'lucide-react';
import { useLanguage } from '@/app/context/language-context';

export function Contact() {
  const { profile } = portfolioData;
  const { t , lang } = useLanguage();
  const cvFile =
  lang === 'en'
    ? '/BENOTHMAN_Oumaima_en.pdf'
    : '/BENOTHMAN_Oumaima_fr.pdf';
    console.log("Current language:", lang);
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-background via-background to-accent/8">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-none">
            {t.sections.contactTitle}
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground">
            {t.sections.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">

          <a
            href={`mailto:${profile.email}`}
            className="group p-4 sm:p-6 rounded-lg border border-accent/20 bg-card hover:border-accent/60 hover:bg-accent/5 transition-all duration-300 text-center"
          >
            <div className="inline-flex p-2 sm:p-3 rounded-lg bg-accent/15 text-accent mb-2 sm:mb-3">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1 sm:mb-2">
              {t.sections.email}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground break-all">
              {profile.email}
            </p>
          </a>

          <a
            href={`tel:${profile.phone}`}
            className="group p-4 sm:p-6 rounded-lg border border-accent/20 bg-card hover:border-accent/60 hover:bg-accent/5 transition-all duration-300 text-center"
          >
            <div className="inline-flex p-2 sm:p-3 rounded-lg bg-accent/15 text-accent mb-2 sm:mb-3">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1 sm:mb-2">
              {t.sections.phone}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {profile.phone}
            </p>
          </a>

        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">

<Button
  asChild
  size="sm"
  className="px-6 py-2 rounded-full bg-accent text-white hover:bg-accent/90 transition-all duration-300 shadow-md hover:shadow-lg"
>
  <a
    href={cvFile}
    download
    className="flex items-center gap-2"
  >
    <Download className="w-4 h-4" />
    {t.hero.downloadCV}
  </a>
</Button>
    

          <Button asChild size="sm" variant="outline">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              LinkedIn
            </a>
          </Button>

          <Button asChild size="sm" variant="secondary">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              GitHub
            </a>
          </Button>

        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-accent/10 text-center">
        <p className="text-xs sm:text-sm text-muted-foreground">
         &copy; 2025 {profile.name}. {t.sections.footerRights}
        </p>
        </div>

      </div>
    </section>
  );
}