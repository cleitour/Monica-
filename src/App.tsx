/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialChannels } from './components/SocialChannels';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { BookSection } from './components/BookSection';
import { InterviewSection } from './components/InterviewSection';
import { LocationSection } from './components/LocationSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookModal } from './components/BookModal';
import { ScheduleModal } from './components/ScheduleModal';
import { ServiceArea } from './data/content';

export default function App() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [bookModalOpen, setBookModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceArea | null>(null);

  const handleOpenSchedule = (service?: ServiceArea) => {
    if (service) {
      setSelectedService(service);
    } else {
      setSelectedService(null);
    }
    setScheduleModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-neutral-800 flex flex-col selection:bg-amber-200 selection:text-neutral-900">
      {/* Fixed / Floating Top Navbar */}
      <Navbar onOpenSchedule={() => handleOpenSchedule()} />

      {/* Main Content Sections (Vertical Scroll Carousel Experience) */}
      <main className="flex-1">
        {/* Hero / Primeira Tela */}
        <Hero onOpenSchedule={() => handleOpenSchedule()} />

        {/* Redes Sociais Oficiais com Acabamento 3D */}
        <SocialChannels />

        {/* Sobre a Profissional: Mônica Azevedo */}
        <AboutSection />

        {/* Áreas de Atuação */}
        <ServicesSection onSelectService={(service) => handleOpenSchedule(service)} />

        {/* Livro da Profissional: Autora */}
        <BookSection onOpenBookModal={() => setBookModalOpen(true)} />

        {/* Entrevista no YouTube */}
        <InterviewSection />

        {/* Localização / Onde estamos */}
        <LocationSection />

        {/* Chamadas Finais: WhatsApp & Instagram */}
        <CtaSection />
      </main>

      {/* Rodapé Oficial */}
      <Footer />

      {/* Elemento Flutuante de WhatsApp */}
      <FloatingWhatsApp />

      {/* Modais Interativos */}
      <BookModal
        isOpen={bookModalOpen}
        onClose={() => setBookModalOpen(false)}
      />

      <ScheduleModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
