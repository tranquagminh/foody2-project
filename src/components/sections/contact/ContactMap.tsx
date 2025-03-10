import AnimatedSection from '@/components/shared/AnimatedSection';

const ContactMap = () => {
  return (
    <AnimatedSection 
      animation="fadeIn" 
      delay={0.1}
      className="w-full -mb-6" // margin âm để khớp với layout
    >
      <div className="relative w-full h-[450px]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125412.06588726053!2d106.6201889921633!3d10.803124145697524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zSOG7kyBDaMOtIE1pbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1709704844270!5m2!1svi!2s"
          className="w-full h-full border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </AnimatedSection>
  );
};

export default ContactMap;