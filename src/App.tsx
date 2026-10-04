import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CapabilitiesBar } from './components/CapabilitiesBar';
import { ServicesSection } from './components/ServicesSection';
import { ContentStudioSection } from './components/ContentStudioSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyRedhostSection } from './components/WhyRedhostSection';
import { AboutSection } from './components/AboutSection';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceBlueprintModal, CaseStudyModal } from './components/Modals';
import { ServiceItem, CaseStudy } from './types';

export default function App() {
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);
  const [selectedCaseStudyModal, setSelectedCaseStudyModal] = useState<CaseStudy | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const [contactPreFill, setContactPreFill] = useState<{
    service?: string;
    budget?: string;
    details?: string;
  }>({
    service: 'website',
    budget: '10-25k',
    details: ''
  });

  const handleApplyEstimate = (data: {
    service: string;
    budget: string;
    timeline: string;
    summary: string;
  }) => {
    setContactPreFill({
      service: data.service,
      budget: data.budget,
      details: data.summary
    });
  };

  const handleSelectServiceForInquiry = (serviceId: string) => {
    setContactPreFill((prev) => ({
      ...prev,
      service: serviceId
    }));
  };

  return (
    <div className="min-h-screen bg-[#f9f9ff] text-[#171c26] flex flex-col font-sans selection:bg-[#cbbeff] selection:text-[#1d0061]">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full pt-20">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Capabilities Bar */}
        <CapabilitiesBar
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
          }}
        />

        {/* Section 3: Services */}
        <ServicesSection
          onSelectService={(service) => setSelectedServiceModal(service)}
          selectedCategoryFilter={selectedCategory}
        />


        {/* Section 6: Creative Content Studio */}
        <ContentStudioSection />

        {/* Section 7: Methodology & Process */}
        <ProcessSection />

        

        {/* Section 9: About REDHOST */}
        <AboutSection />

        {/* Section 10: Call To Action */}
        <CtaBanner />

        {/* Section 11: Contact Intake */}
        <ContactSection
          initialService={contactPreFill.service}
          initialBudget={contactPreFill.budget}
          initialDetails={contactPreFill.details}
        />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Service Blueprint Modal */}
      <ServiceBlueprintModal
        service={selectedServiceModal}
        onClose={() => setSelectedServiceModal(null)}
        onSelectForInquiry={handleSelectServiceForInquiry}
      />

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        study={selectedCaseStudyModal}
        onClose={() => setSelectedCaseStudyModal(null)}
        onSelectForInquiry={() => {
          setContactPreFill((prev) => ({
            ...prev,
            details: `Inquiring about a project similar to ${selectedCaseStudyModal?.title} (${selectedCaseStudyModal?.category}).`
          }));
        }}
      />
    </div>
  );
}
