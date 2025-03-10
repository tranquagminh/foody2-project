import React from 'react'
import Image from 'next/image'
import SectionContainer from '../../../shared/SectionContainer'
import Button from '../../../shared/Button'
import AnimatedSection from '../../../shared/AnimatedSection'

function AboutSection() {
  return (
    <SectionContainer className="py-20">
        <AnimatedSection animation="fadeInUp" delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image column */}
                <div className="relative fadeIn">
                    <div className="relative overflow-hidden p-5 pe-0">
                    <Image
                        src="/images/about/about.jpg"
                        alt="About Us"
                        width={600}
                        height={400}
                        className="w-full rounded-lg z-10"
                    />
                    </div>
                    <div className="before:content-[''] before:absolute before:top-0 before:left-[-20px] before:w-full before:h-full before:bg-[repeating-radial-gradient(#FFFFFF,#EEEEEE_5px,transparent_5px,transparent_10px)] before:bg-[length:20px_20px] before:transform before:skew-y-6 before:-z-10"></div>
                </div>

                {/* Content column */}
                <div className="fadeIn">
                    <h1 className="text-4xl font-bold mb-6">
                    Best Organic Fruits And Vegetables
                    </h1>
                    <p className="text-gray-600 mb-6">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                    </p>
                    
                    {/* Features list */}
                    <div className="space-y-4 mb-8">
                    <p className="flex items-center text-gray-600">
                        <span className="text-[#3cb815] mr-3">✓</span>
                        Tempor erat elitr rebum at clita
                    </p>
                    <p className="flex items-center text-gray-600">
                        <span className="text-[#3cb815] mr-3">✓</span>
                        Aliqu diam amet diam et eos
                    </p>
                    <p className="flex items-center text-gray-600">
                        <span className="text-[#3cb815] mr-3">✓</span>
                        Clita duo justo magna dolore erat amet
                    </p>
                    </div>

                    {/* CTA Button */}
                    <Button href="/about" variant="primary">
                        Read More
                    </Button>
                </div>
            </div>
        </AnimatedSection>
        
    </SectionContainer>
  )
}

export default AboutSection