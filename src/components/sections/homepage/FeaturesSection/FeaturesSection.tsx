import React from 'react'
import Image from 'next/image'
import SectionContainer from '../../../shared/SectionContainer'
import Button from '../../../shared/Button'
import AnimatedSection from '../../../shared/AnimatedSection'
import { features } from '@/constants/homepage'

function FeaturesSection() {
  return (
    <SectionContainer className="bg-[#F7F8FC] bg-icon-pattern bg-center bg-repeat bg-contain mt-20 py-24">
        <AnimatedSection animation="fadeInUp" delay={0.1}>
            {/* Tiêu đề phần */} 
            <div className="text-center mx-auto mb-16 wow fadeInUp max-w-[500px]">
                <h1 className="text-4xl font-bold mb-4">Tính Năng Của Chúng Tôi</h1>
                <p className="text-gray-600">
                    Đây là mô tả ngắn về các tính năng của chúng tôi. Chúng tôi cam kết mang đến sản phẩm chất lượng cao và an toàn.
                </p>
            </div>
        </AnimatedSection>
        

            {/* Lưới các tính năng */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature,index) => (
            <AnimatedSection 
            key={feature.id} 
            animation="fadeInUp" 
            delay={0.1 * (index + 1)}
          >
            <div key={feature.id} className="wow fadeInUp" data-wow-delay={feature.delay}>
                <div className="bg-white text-center h-full p-8 xl:p-10 rounded-lg">
                <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={80}
                    height={80}
                    className="mx-auto mb-6"
                />
                <h4 className="text-xl font-semibold mb-4">{feature.title}</h4>
                <p className="text-gray-600 mb-6">
                    {feature.description}
                </p>
                <Button href="#" variant="outline">
                    Xem Thêm
                </Button>
                </div>
            </div>
          </AnimatedSection>
            
            ))}
        </div>
    </SectionContainer>
  )
}

export default FeaturesSection