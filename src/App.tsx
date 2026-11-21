import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AppHub } from './components/AppHub';
import { ArchitectureShowcase } from './components/ArchitectureShowcase';
import { CaseStudies } from './components/CaseStudies';
import { TechMatrix } from './components/TechMatrix';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#08090d] text-slate-100 flex flex-col overflow-x-hidden">
      {/* Fixed Ambient Light Orbs from Google Stitch Design System */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.07)_0%,transparent_45%),radial-gradient(circle_at_85%_65%,rgba(16,185,129,0.05)_0%,transparent_45%)]"></div>

      {/* Header / Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="relative z-10 w-full pt-16 flex-grow flex flex-col">
        {/* Section 1: Hero & Realtime Telemetry Stats */}
        <Hero />

        {/* Section 2: Central App Ecosystem (Live Subdomains) */}
        <AppHub />

        {/* Section 3: Architecture Topology & Decoupled Blueprint */}
        <ArchitectureShowcase />

        {/* Section 4: Engineering Case Studies */}
        <CaseStudies />

        {/* Section 5: Technical Matrix / Core Competencies */}
        <TechMatrix />

        {/* Section 6: Executive Contact & Direct Protocol */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
