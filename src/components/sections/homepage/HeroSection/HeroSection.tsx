import Image from 'next/image';
import {HERO_SLIDES} from '../../../../constants/homepage';
import { useSlider } from '../../../hooks/useSlider';
import Button from '../../../shared/Button';
import AnimatedSection from '../../../shared/AnimatedSection';

function HeroSection() {
    const {currentSlide, nextSlide, prevSlide} = useSlider(HERO_SLIDES.length);
      
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-opacity-30">
              <div className="container mx-auto px-4 h-full">
                <div className="flex items-center h-full">
                  <div className="w-full md:w-2/3 text-white">
                    <AnimatedSection animation="fadeInUp" delay={0.1}>
                      <h1 className="text-4xl md:text-6xl text-black font-bold mb-8 animate-slideInDown">
                        {slide.title}
                      </h1>
                    </AnimatedSection>
                    
                    <AnimatedSection animation="fadeInUp" delay={0.1}>
                      <div className="flex gap-4">
                        <Button href="/products" variant="primary">
                            Products
                        </Button>
                        <Button href="/services" variant="second">
                            Services
                        </Button>
                      </div>
                    </AnimatedSection>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  )
}

export default HeroSection