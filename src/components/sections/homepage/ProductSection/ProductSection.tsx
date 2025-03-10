"use client"
import { useEffect, useRef, useState } from 'react';
import ProductCard from './ProductCard';
import SectionTitle from '../../../common/SectionTitle';
import { products } from '../../../../constants/homepage';
import SectionContainer from '../../../shared/SectionContainer';

const ITEMS_PER_PAGE = 8; // Số sản phẩm trên mỗi trang

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState('vegetable');
  const [currentPage, setCurrentPage] = useState(1);
  const productGridRef = useRef<HTMLDivElement>(null);

  // Reinit khi tab hoặc page thay đổi
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Dynamic import for WOW
      import('wowjs').then((WOW) => {
        const wow = new WOW.WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: true,
          live: true
        });
        wow.init();
      });
    }
  }, []);

  useEffect(() => {
    if (productGridRef.current) {
      const elements = productGridRef.current.querySelectorAll('.wow');
      elements.forEach(element => {
        (element as HTMLElement).style.visibility = 'hidden';
        element.classList.remove('animated');
        void (element as HTMLElement).offsetWidth; // Trigger reflow
        (element as HTMLElement).style.visibility = 'visible';
        element.classList.add('animated');
      });
    }
  }, [activeTab, currentPage]);

  // Lọc sản phẩm theo tab
  const filteredProducts = products.filter(product => product.category === activeTab);
  
  // Tính toán số trang
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  
  // Lấy sản phẩm cho trang hiện tại
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Tạo mảng số trang để render
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Reset về trang 1 khi đổi tab
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  return (
    <SectionContainer className="py-20 bg-[#f4f4f4]">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-12">
        {/* Header */}
        <div className="lg:max-w-[500px] mb-8 lg:mb-0">
          <SectionTitle 
            title="Our Products"
            description="Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo."
            className="text-start"
          />
        </div>

        {/* Tabs */}
        <div className="wow slideInRight" data-wow-delay="0.1s">
          <div className="flex gap-2">
            <button 
              className={`px-6 py-2 rounded-full border-2 border-[#3cb815] transition-colors
                ${activeTab === 'vegetable' ? 'bg-[#3cb815] text-white' : 'text-[#3cb815] hover:bg-[#3cb815] hover:text-white'}`}
              onClick={() => handleTabChange('vegetable')}
            >
              Vegetable
            </button>
            <button 
              className={`px-6 py-2 rounded-full border-2 border-[#3cb815] transition-colors
                ${activeTab === 'fruits' ? 'bg-[#3cb815] text-white' : 'text-[#3cb815] hover:bg-[#3cb815] hover:text-white'}`}
              onClick={() => handleTabChange('fruits')}
            >
              Fruits
            </button>
            <button 
              className={`px-6 py-2 rounded-full border-2 border-[#3cb815] transition-colors
                ${activeTab === 'fresh' ? 'bg-[#3cb815] text-white' : 'text-[#3cb815] hover:bg-[#3cb815] hover:text-white'}`}
              onClick={() => handleTabChange('fresh')}
            >
              Fresh
            </button>
            {/* ... other tab buttons ... */}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div ref={productGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentProducts.map((product, index) => (
          <div 
          key={product.id}
          className="wow fadeInUp" 
          data-wow-delay={`${0.1 + (index * 0.2)}s`}
          style={{ visibility: 'visible' }} // Force visibility
        >
          <ProductCard delay={0} {...product} />
        </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12">
          {/* Previous button */}
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#3cb815] transition-colors
              ${currentPage === 1 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-[#3cb815] hover:text-white'}`}
          >
            ←
          </button>

          {/* Page numbers */}
          {pageNumbers.map(number => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#3cb815] transition-colors
                ${currentPage === number 
                  ? 'bg-[#3cb815] text-white' 
                  : 'hover:bg-[#3cb815] hover:text-white'}`}
            >
              {number}
            </button>
          ))}

          {/* Next button */}
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#3cb815] transition-colors
              ${currentPage === totalPages 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-[#3cb815] hover:text-white'}`}
          >
            →
          </button>
        </div>
      )}
    </SectionContainer>
  );
};

export default ProductSection;