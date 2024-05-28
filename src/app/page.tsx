import AboutSection from '@/components/AboutSection';
import Landing from '@/components/Landing';
import CareerSection from '@/components/CareerSection';
import SkillSection from '@/components/SkillSection';
import Education from '@/components/Education';
import ProjectSection from '@/components/ProjectSection';

export default function Home() {
  return (
    <main>
        <Landing/>
        <AboutSection/>
        <CareerSection/>
        <SkillSection/>
        <ProjectSection/>
        <Education/>
    </main>
  );
}
