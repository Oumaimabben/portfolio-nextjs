'use client';

import { portfolioData } from '@/lib/portfolio-data';
import { Mail, Github, Linkedin, Download, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from "@/app/context/language-context";

export function Hero() {
  const { profile } = portfolioData;
  const { t, lang } = useLanguage();

  const cvFile =
    lang === 'en'
      ? '/BENOTHMAN_Oumaima_en.pdf'
      : '/BENOTHMAN_Oumaima_fr.pdf';

  return (
    <section className="relative min-h-svh flex items-center overflow-hidden bg-[#fff5f7] px-4 sm:px-6 py-16 sm:py-24 font-sans">

      {/* Grid background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(244,114,182,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(244,114,182,0.08) 1px, transparent 1px)',
          backgroundSize: '55px 55px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* Orbs — réduits sur mobile */}
      <div className="absolute -top-36 -left-28 w-[300px] h-[300px] sm:w-[560px] sm:h-[560px] rounded-full blur-[90px] z-0 animate-[drift1_18s_ease-in-out_infinite_alternate] bg-[radial-gradient(circle,rgba(251,207,232,0.7)_0%,transparent_70%)]" />
      <div className="absolute -bottom-24 right-[5%] w-[260px] h-[260px] sm:w-[480px] sm:h-[480px] rounded-full blur-[90px] z-0 animate-[drift2_22s_ease-in-out_infinite_alternate] bg-[radial-gradient(circle,rgba(253,186,116,0.25)_0%,transparent_70%)]" />
      <div className="absolute top-[30%] right-[25%] w-[180px] h-[180px] sm:w-[350px] sm:h-[350px] rounded-full blur-[90px] z-0 animate-[drift1_28s_ease-in-out_infinite_alternate-reverse] bg-[radial-gradient(circle,rgba(216,180,254,0.35)_0%,transparent_70%)]" />

      {/* Main grid */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 sm:gap-16 items-center">

        {/* ── Avatar (en premier sur mobile) ── */}
        <div className="relative flex items-center justify-center h-[280px] sm:h-[360px] lg:h-[480px] animate-[fadeIn_1s_0.3s_ease_both] lg:order-last">

          {/* Rings */}
          <div className="absolute w-[220px] h-[220px] sm:w-[340px] sm:h-[340px] rounded-full border border-pink-300/20 animate-[spin_40s_linear_infinite]" />
          <div className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full border border-purple-300/15 animate-[spin_60s_linear_infinite_reverse]" />
          <div className="absolute w-[160px] h-[160px] sm:w-[260px] sm:h-[260px] rounded-full border border-rose-300/15 border-dashed animate-[spin_25s_linear_infinite]" />

          {/* Corner accents — masqués sur très petit écran */}
          <div className="hidden sm:block absolute top-12 left-12 w-5 h-5 border-t-2 border-l-2 border-pink-400/45" />
          <div className="hidden sm:block absolute bottom-12 right-12 w-5 h-5 border-b-2 border-r-2 border-purple-400/40" />

          {/* Avatar frame */}
          <div className="relative w-[160px] h-[200px] sm:w-[200px] sm:h-[250px] lg:w-[260px] lg:h-[320px] rounded-[20px] overflow-hidden border border-pink-200/20 shadow-[0_20px_60px_rgba(244,114,182,0.15),0_4px_20px_rgba(244,63,94,0.08)] z-10">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-300/35 via-purple-200/20 to-rose-300/25 rounded-[20px] blur-xl -z-10" />
            <img
              src="/profile.png"
              alt={profile.name}
              className="w-full h-full object-cover object-top block"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fff5f7]/30" />
          </div>

          {/* Stat card 1 — repositionnée sur mobile */}
          <div className="absolute bottom-4 sm:bottom-[70px] left-1 sm:left-2.5 flex flex-col gap-0.5 bg-white border border-pink-100/70 rounded-xl px-2.5 sm:px-3 py-2 sm:py-2.5 shadow-[0_4px_20px_rgba(244,114,182,0.1)] z-20 animate-[float_4s_ease-in-out_infinite]">
            <span className="font-[Syne,sans-serif] font-extrabold text-xl sm:text-2xl text-[#4a0d2e] leading-none">3+</span>
            <span className="text-[#c4a0b2] text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.05em]">Years exp.</span>
          </div>

          {/* Stat card 2 */}
          <div className="absolute top-12 sm:top-20 right-1 sm:right-1.5 flex items-center gap-1.5 sm:gap-2 bg-white border border-pink-100/70 rounded-xl px-2.5 sm:px-3 py-2 sm:py-2.5 shadow-[0_4px_20px_rgba(244,114,182,0.1)] z-20 animate-[float_5s_1s_ease-in-out_infinite]">
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
            <span className="text-[#c4a0b2] text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.05em]">Available</span>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="flex flex-col gap-4 sm:gap-6 text-center sm:text-left items-center sm:items-start">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-300/35 bg-pink-100/50 w-fit animate-[fadeUp_0.6s_ease_both]">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_8px_rgba(244,114,182,0.7)] animate-pulse" />
            <span className="text-pink-500 text-[0.72rem] font-medium tracking-[0.09em] uppercase">{t.hero.role}</span>
          </div>

          {/* Name */}
          <h1 className="font-[Syne,sans-serif] font-extrabold leading-[0.95] tracking-[-0.03em] text-[#4a0d2e] flex flex-col gap-[0.05em] overflow-hidden text-[clamp(2.5rem,8vw,5.5rem)] sm:text-[clamp(3rem,6vw,5.5rem)]">
            {profile.name.split(' ').map((word: string, i: number) => (
              <span
                key={i}
                className="block animate-[slideUp_0.7s_cubic-bezier(0.16,1,0.3,1)_both]"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {i === profile.name.split(' ').length - 1 ? (
                  <span className="bg-gradient-to-br from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                    {word}
                  </span>
                ) : word}
              </span>
            ))}
          </h1>

          {/* Title */}
          <div className="flex items-center gap-3 animate-[fadeUp_0.6s_0.3s_ease_both]">
            <div className="w-8 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full shrink-0 hidden sm:block" />
            <p className="text-[#9d6381] font-light italic text-sm sm:text-base">{profile.title}</p>
          </div>

          {/* Summary */}
          <p className="text-[#9d6381] font-light leading-relaxed max-w-[520px] text-sm sm:text-base animate-[fadeUp_0.6s_0.4s_ease_both]">
            {t.hero.summary}
          </p>

          {/* Contact */}
          <div className="flex flex-col xs:flex-row items-center gap-2 sm:gap-3 animate-[fadeUp_0.6s_0.5s_ease_both]">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 text-[#c4a0b2] text-[0.75rem] sm:text-[0.8rem] hover:text-pink-500 transition-colors"
            >
              <Mail size={13} />
              {profile.email}
            </a>
            <span className="text-pink-200 hidden xs:block">·</span>
            <span className="text-[#c4a0b2] text-[0.75rem] sm:text-[0.8rem]">{profile.phone}</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center sm:justify-start animate-[fadeUp_0.6s_0.6s_ease_both]">
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white text-xs sm:text-sm font-medium shadow-[0_4px_18px_rgba(244,63,94,0.28)] hover:shadow-[0_8px_28px_rgba(244,63,94,0.38)] hover:-translate-y-0.5 transition-all duration-200"
            >
              {t.hero.viewWork}
              <ArrowUpRight size={15} />
            </a>

            <a
              href={cvFile}
              download
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-white text-[#6b3a52] border border-pink-200/60 text-xs sm:text-sm font-normal shadow-[0_1px_6px_rgba(244,114,182,0.08)] hover:border-pink-300 hover:text-pink-700 hover:shadow-[0_4px_14px_rgba(244,114,182,0.14)] transition-all duration-200"
            >
              <Download size={13} />
              {t.hero.downloadCV}
            </a>

            <div className="flex gap-2">
              <a
                href={profile.github || '#'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white border border-pink-100 text-[#c4a0b2] shadow-[0_1px_4px_rgba(244,114,182,0.06)] hover:text-pink-500 hover:bg-pink-50 hover:border-pink-300/50 hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(244,114,182,0.15)] transition-all duration-200"
              >
                <Github size={16} />
              </a>
              <a
                href={profile.linkedin || '#'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white border border-pink-100 text-[#c4a0b2] shadow-[0_1px_4px_rgba(244,114,182,0.06)] hover:text-pink-500 hover:bg-pink-50 hover:border-pink-300/50 hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(244,114,182,0.15)] transition-all duration-200"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;1,9..40,300&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(100%); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes drift1 {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(60px, 40px) scale(1.1); }
        }
        @keyframes drift2 {
          from { transform: translate(0, 0) scale(1.05); }
          to   { transform: translate(-50px, -30px) scale(0.95); }
        }
      `}</style>
    </section>
  );
}