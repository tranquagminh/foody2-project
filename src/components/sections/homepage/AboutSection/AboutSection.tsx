import React from "react";
import Image from "next/image";
import SectionContainer from "../../../shared/SectionContainer";
import Button from "../../../shared/Button";
import AnimatedSection from "../../../shared/AnimatedSection";

function AboutSection() {
  return (
    <SectionContainer className="py-20">
      <AnimatedSection animation="fadeInUp" delay={0.1}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Cột hình ảnh */}
          <div className="relative fadeIn">
            <div className="relative overflow-hidden p-5 pe-0">
              <Image
                src="/images/about/about.jpg"
                alt="Về Chúng Tôi"
                width={600}
                height={400}
                className="w-full rounded-lg z-10"
              />
            </div>
            <div className="before:content-[''] before:absolute before:top-0 before:left-[-20px] before:w-full before:h-full before:bg-[repeating-radial-gradient(#FFFFFF,#EEEEEE_5px,transparent_5px,transparent_10px)] before:bg-[length:20px_20px] before:transform before:skew-y-6 before:-z-10"></div>
          </div>

          {/* Cột nội dung */}
          <div className="fadeIn">
            <h1 className="text-4xl font-bold mb-6">
              Trái Cây Và Rau Củ Hữu Cơ Tốt Nhất
            </h1>
            <p className="text-gray-600 mb-6">
              Đây là đoạn mô tả ví dụ. Diam dolor diam ipsum sit. Aliqu diam
              amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem
              sit clita duo justo magna dolore erat amet.
            </p>

            {/* Danh sách tính năng */}
            <div className="space-y-4 mb-8">
              <p className="flex items-center text-gray-600">
                <span className="text-[#3cb815] mr-3">✓</span>
                Đây là tính năng ví dụ 1
              </p>
              <p className="flex items-center text-gray-600">
                <span className="text-[#3cb815] mr-3">✓</span>
                Đây là tính năng ví dụ 2
              </p>
              <p className="flex items-center text-gray-600">
                <span className="text-[#3cb815] mr-3">✓</span>
                Đây là tính năng ví dụ 3
              </p>
            </div>

            {/* Nút CTA */}
            <Button href="/about" variant="primary">
              Xem Thêm
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
}

export default AboutSection;
