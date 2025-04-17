"use client";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";
import { useState } from "react";
import { Attribute, Product } from "@/lib/api/woocommerce"; // Import interface Product từ API

interface ProductTabsProps {
  product: Product; // Sử dụng interface Product từ API
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <AnimatedSection animation="fadeInUp" delay={0.1}>
      {/* Tab Headers */}
      <div className="border-b border-gray-200">
        <div className="flex">
          <button
            className={`py-4 px-6 font-medium text-sm uppercase ${
              activeTab === "description"
                ? "border-l border-t border-r border-gray-200 text-gray-800 bg-white -mb-px"
                : "text-gray-600 bg-gray-100"
            }`}
            onClick={() => setActiveTab("description")}
          >
            MÔ TẢ
          </button>
          <button
            className={`py-4 px-6 font-medium text-sm uppercase ${
              activeTab === "additional"
                ? "border-l border-t border-r border-gray-200 text-gray-800 bg-white -mb-px"
                : "text-gray-600 bg-gray-100"
            }`}
            onClick={() => setActiveTab("additional")}
          >
            THÔNG TIN THÊM
          </button>
          <button
            className={`py-4 px-6 font-medium text-sm uppercase ${
              activeTab === "reviews"
                ? "border-l border-t border-r border-gray-200 text-gray-800 bg-white -mb-px"
                : "text-gray-600 bg-gray-100"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            ĐÁNH GIÁ (0)
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="border-l border-r border-b border-gray-200 bg-white p-6">
        {activeTab === "description" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">MÔ TẢ</h2>
            <div>
              {/* Hiển thị mô tả từ API */}
              {product.description ? (
                <div
                  className="prose"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              ) : (
                <p className="text-gray-600">
                  {product.name} - Thông tin chi tiết về sản phẩm sẽ được cập
                  nhật sớm nhất.
                </p>
              )}
            </div>
          </div>
        )}

        {activeTab === "additional" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">THÔNG TIN THÊM</h2>
            {product.attributes && product.attributes.length > 0 ? (
              <table className="w-full border-collapse">
                <tbody>
                  {product.attributes.map((attribute: any, index: number) => (
                    <tr key={index} className="border-b border-gray-200">
                      <th className="text-left py-3 w-1/3 text-gray-600 font-medium">
                        {attribute.name}
                      </th>
                      <td className="py-3">{attribute.options.join(", ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-600">
                Không có thông tin bổ sung cho sản phẩm này.
              </p>
            )}
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">ĐÁNH GIÁ</h2>
            <p className="text-gray-600 mb-6">Chưa có đánh giá nào.</p>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium mb-4">Thêm đánh giá</h3>
              <p className="text-sm text-gray-600 mb-4">
                Email của bạn sẽ không được hiển thị công khai. Các trường bắt
                buộc được đánh dấu *
              </p>

              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Đánh giá của bạn *
                  </label>
                  <div className="flex text-yellow-400 text-2xl">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                    <span className="text-gray-300">★</span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Nhận xét của bạn *
                  </label>
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
    </AnimatedSection>
  );
};

export default ProductTabs;
