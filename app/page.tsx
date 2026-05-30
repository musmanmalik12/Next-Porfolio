"use client"

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import SkillsArchitecture from "@/components/SkillsArchitecture";
import RecentProjects from "@/components/RecentProjects";
import ProfessionalLinks from "@/components/ProfessionalLinks";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNav";

const Home = () => {
  return (
    <main className="relative bg-slate-50 dark:bg-slate-950 flex justify-center items-center flex-col mx-auto overflow-clip transition-colors duration-300">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <SkillsArchitecture />
        <RecentProjects />
        <ProfessionalLinks />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;