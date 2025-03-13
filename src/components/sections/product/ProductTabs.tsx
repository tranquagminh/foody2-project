"use client";
import Image from 'next/image';
import { useState } from 'react';
// Client component for tabs with useState
interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
  }
  
  const ProductTabs = ({ product }: { product: Product }) => {
    const [activeTab, setActiveTab] = useState('description');
  
    return (
      <div>
        {/* Tab Headers */}
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              className={`py-4 px-6 font-medium text-sm uppercase ${
                activeTab === 'description'
                  ? 'border-l border-t border-r border-gray-200 text-gray-800 bg-white -mb-px'
                  : 'text-gray-600 bg-gray-100'
              }`}
              onClick={() => setActiveTab('description')}
            >
              DESCRIPTION
            </button>
            <button
              className={`py-4 px-6 font-medium text-sm uppercase ${
                activeTab === 'additional'
                  ? 'border-l border-t border-r border-gray-200 text-gray-800 bg-white -mb-px'
                  : 'text-gray-600 bg-gray-100'
              }`}
              onClick={() => setActiveTab('additional')}
            >
              ADDITIONAL INFORMATION
            </button>
            <button
              className={`py-4 px-6 font-medium text-sm uppercase ${
                activeTab === 'reviews'
                  ? 'border-l border-t border-r border-gray-200 text-gray-800 bg-white -mb-px'
                  : 'text-gray-600 bg-gray-100'
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              REVIEWS (0)
            </button>
          </div>
        </div>
  
        {/* Tab Content */}
        <div className="border-l border-r border-b border-gray-200 bg-white p-6">
          {activeTab === 'description' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">DESCRIPTION</h2>
              
              {product.id === 1 && (
                <>
                  <p className="mb-4">
                    <strong>Nấm lim xanh Quảng Nam</strong> là thảo được quý hiếm chỉ mọc lên ở gốc hoặc thân những cây lim đã 
                    chết trong các khu rừng nguyên sinh. Sở hữu nhiều nguyên tố vi lượng cùng hơn 100 loại được 
                    chất tự nhiên, đây là mặt hàng <strong>đặc sản Quảng Nam</strong> có công dụng vượt trội đối với sức khỏe, 
                    được rất nhiều người tìm mua.
                  </p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-2">1. TÌM HIỂU VỀ NẤM LIM XANH QUẢNG NAM</h3>
                  <h4 className="text-base font-semibold mt-4 mb-2">1.1. NẤM LIM XANH LÀ GÌ?</h4>
                  <p className="mb-4">
                    Nấm lim xanh có tên khoa học là Ganoderma lucidum, thuộc họ Nấm Lim (Ganodermataceae). 
                    Loại nấm này thuộc dòng linh chi đặc hữu, chỉ sinh trưởng được trong các cánh rừng nguyên sinh, 
                    ở gốc hoặc thân những cây lim xanh đã chết.
                  </p>
                  
                  <div className="my-6">
                    <Image
                      src="/images/products/product-1.jpg" 
                      alt="Nấm lim xanh Quảng Nam" 
                      width={800}
                      height={500}
                      className="w-full max-w-lg mx-auto rounded-lg"
                    />
                  </div>
                </>
              )}
              
              {product.id !== 1 && (
                <p className="text-gray-600">
                  {product.title} - Thông tin chi tiết về sản phẩm sẽ được cập nhật sớm nhất.
                </p>
              )}
            </div>
          )}
  
          {activeTab === 'additional' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">ADDITIONAL INFORMATION</h2>
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 w-1/3 text-gray-600 font-medium">Weight</th>
                    <td className="py-3">0.5 kg</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 w-1/3 text-gray-600 font-medium">Dimensions</th>
                    <td className="py-3">10 × 5 × 5 cm</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 w-1/3 text-gray-600 font-medium">Origin</th>
                    <td className="py-3">Quảng Nam, Việt Nam</td>
                  </tr>
                  <tr>
                    <th className="text-left py-3 w-1/3 text-gray-600 font-medium">Quality Control</th>
                    <td className="py-3">Đạt chuẩn VietGAP</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
  
          {activeTab === 'reviews' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">REVIEWS</h2>
              <p className="text-gray-600 mb-6">Chưa có đánh giá nào.</p>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium mb-4">Thêm đánh giá</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được đánh dấu *
                </p>
                
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Đánh giá của bạn *</label>
                    <div className="flex text-yellow-400 text-2xl">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span className="text-gray-300">★</span>
                      <span className="text-gray-300">★</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Nhận xét của bạn *</label>
                    <textarea
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded"
                    ></textarea>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Tên *</label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        className="w-full p-3 border border-gray-300 rounded"
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-[#18583a] text-white px-6 py-2 transition-all hover:bg-[#124a30] uppercase font-medium text-sm"
                  >
                    Gửi đánh giá
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
export default ProductTabs;