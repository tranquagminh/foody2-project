import SectionContainer from "../../../shared/SectionContainer";

const VisitSection = () => {
  return (
    <SectionContainer className="bg-[#3cb815] bg-icon-pattern py-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Content */}
        <div className="wow fadeIn" data-wow-delay="0.1s">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ghé Thăm Cơ Sở Của Chúng Tôi
          </h1>
          <p className="text-white">
            Hãy đến và trải nghiệm không gian xanh của chúng tôi, nơi mang đến những sản phẩm tươi sạch chất lượng cao. 
            Mọi quy trình đều được thực hiện cẩn thận để đảm bảo sự an toàn và hài lòng của bạn. 
            Chúng tôi luôn chào đón bạn đến khám phá!
          </p>
        </div>

        {/* Button */}
        <div className="wow fadeIn text-center md:text-right" data-wow-delay="0.5s">
          <a
            href="#"
            className="inline-block bg-[#f65005] hover:bg-[#d94604] text-white px-8 py-4 rounded-full text-lg transition-colors duration-300"
          >
            Ghé Thăm Ngay
          </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default VisitSection;