import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { Experience } from '@/components/experience';
import { Skills } from '@/components/skills';
import { Education } from '@/components/education';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <main className="w-full">
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <div id="skills">
        <Skills />
      </div>
      <Education />
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
