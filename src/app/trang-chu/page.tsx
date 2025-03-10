// app/homepage/page.tsx
"use client"
import ProductSection from '@/components/sections/homepage/ProductSection/ProductSection';
import VisitSection from '@/components/sections/homepage/VisitSection/VisitSection';
import TestimonialSection from '@/components/sections/homepage/TestimonialSection/TestimonialSection';
import BlogSection from '@/components/sections/homepage/BlogSection/BlogSection';
import HeroSection from '@/components/sections/homepage/HeroSection/HeroSection';
import AboutSection from '@/components/sections/homepage/AboutSection/AboutSection';
import FeaturesSection from '@/components/sections/homepage/FeaturesSection/FeaturesSection';

const HomePage = () => {
  return (
    <>
    {/* Hero section */}
    <HeroSection  />
     {/* About section */}
    <AboutSection />
    {/* Features section */}
    <FeaturesSection />
    {/* Product section */}
    <ProductSection />
    {/* Visit section */}
    <VisitSection />
    {/* Testimonial section */}
    <TestimonialSection />
    {/* Blog section */}
    <BlogSection />
    </>
  );
};

export default HomePage;