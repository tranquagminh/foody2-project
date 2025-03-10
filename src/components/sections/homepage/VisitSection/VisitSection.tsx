import SectionContainer from "../../../shared/SectionContainer";

const VisitSection = () => {
    return (
      <SectionContainer className="bg-[#3cb815] bg-icon-pattern py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="wow fadeIn" data-wow-delay="0.1s">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Visit Our Firm
              </h1>
              <p className="text-white">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
                Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. 
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
              </p>
            </div>
  
            {/* Button */}
            <div className="wow fadeIn text-center md:text-right" data-wow-delay="0.5s">
              <a 
                href="#" 
                className="inline-block bg-[#f65005] hover:bg-[#d94604] text-white px-8 py-4 rounded-full text-lg transition-colors duration-300"
              >
                Visit Now
              </a>
            </div>
          </div>
      </SectionContainer>
    );
  };
  
  export default VisitSection;