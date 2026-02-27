'use client';

import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/app/context/language-context';
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaPhp,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiDjango,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiKubernetes,
  SiGitlab,
  SiApachespark,
  SiApachekafka,
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

export function Skills() {
  const { t } = useLanguage();
  const skills = t.skills;

  // 🔥 Mapping skill -> Icon
  const skillIcons: Record<string, React.ReactNode> = {
    JavaScript: <SiJavascript />,
    TypeScript: <SiTypescript />,
    Java: <FaJava />,
    PHP: <FaPhp />,
    Python: <FaPython />,
    'React.js': <FaReact />,
    Angular: <FaAngular />,
    'Next.js': <SiNextdotjs />,
    'Node.js': <FaNodeJs />,
    'Express.js': <SiExpress />,
    Django: <SiDjango />,
    FastAPI: <SiFastapi />,
    'Tailwind CSS': <SiTailwindcss />,
    Redux: <SiRedux />,
    MongoDB: <SiMongodb />,
    MySQL: <SiMysql />,
    PostgreSQL: <SiPostgresql />,
    Firebase: <SiFirebase />,
    Docker: <FaDocker />,
    Kubernetes: <SiKubernetes />,
    'GitLab CI/CD': <SiGitlab />,
    Git: <FaGitAlt />,
    GitHub: <FaGithub />,
    'VS Code': <TbBrandVscode />,
    'Apache Kafka': <SiApachekafka />,
  };

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-accent/5 to-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative">

        <div className="mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-none">
            {t.sections.skills}
          </h2>
          <div className="mt-4 h-px w-16 bg-accent"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((skillGroup, idx) => (
            <div
              key={skillGroup.category}
              className="group relative bg-card border border-accent/10 rounded-2xl p-5 sm:p-6 hover:border-accent/35 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <span className="absolute top-4 right-5 text-4xl font-black text-accent/6 leading-none select-none pointer-events-none">
                0{idx + 1}
              </span>

              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-accent/10">
                <div className="w-1.5 h-5 rounded-full bg-accent group-hover:h-6 transition-all duration-300"></div>
                <h3 className="font-bold text-sm sm:text-base text-foreground tracking-wide uppercase">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="flex items-center gap-1 bg-accent/8 text-accent/90 dark:text-accent border border-accent/20 text-xs hover:bg-accent/20 hover:border-accent/40 cursor-default transition-all duration-200"
                  >
                    {skillIcons[skill]}
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}