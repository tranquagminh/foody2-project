"use client"
import PageHeader from '@/components/common/PageHeader';
import AboutSection from '@/components/sections/homepage/AboutSection/AboutSection';
import FeaturesSection from '@/components/sections/homepage/FeaturesSection/FeaturesSection';
import VisitSection from '@/components/sections/homepage/VisitSection/VisitSection';

const AboutPage = () => {
  return (
    <>
      <PageHeader 
        title="Giới thiệu" 
        breadcrumbs={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Giới thiệu', href: '/gioi-thieu', active: true }
        ]}
      />
      <AboutSection />
      <VisitSection />
      <FeaturesSection />
    </>
  );
};

export default AboutPage;