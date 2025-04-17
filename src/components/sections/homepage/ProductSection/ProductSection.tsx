"use client";
import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import SectionTitle from "../../../common/SectionTitle";
import SectionContainer from "../../../shared/SectionContainer";
import Pagination from "@/components/shared/Pagination";
import {
  fetchProducts,
  fetchCategories,
  Product,
  Category,
} from "@/lib/api/woocommerce";

const ITEMS_PER_PAGE = 8; // Số sản phẩm trên mỗi trang

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState<string>(""); // activeTab sẽ là slug của category
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const productGridRef = useRef<HTMLDivElement>(null);
  const [categoryName, setCategoryName] = useState<string>("");

  // Fetch dữ liệu sản phẩm và category khi component mount
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      // Fetch categories
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);

      const filteredCategories = fetchedCategories.filter(
        (category) => category.slug !== "uncategorized"
      );
      setCategories(filteredCategories);

      // Fetch products
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);

      // Đặt activeTab mặc định là slug của category đầu tiên (nếu có)
      if (filteredCategories.length > 0) {
        setActiveTab(filteredCategories[0].slug);
        setCategoryName(filteredCategories[0].name);
      }

      setLoading(false);
    };

    loadData();
  }, []);

  // Reinit WOW.js khi tab hoặc page thay đổi
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("wowjs").then((WOW) => {
        const wow = new WOW.WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: true,
          live: true,
        });
        wow.init();
      });
    }
  }, []);

  useEffect(() => {
    if (productGridRef.current) {
      const elements = productGridRef.current.querySelectorAll(".wow");
      elements.forEach((element) => {
        (element as HTMLElement).style.visibility = "hidden";
        element.classList.remove("animated");
        void (element as HTMLElement).offsetWidth; // Trigger reflow
        (element as HTMLElement).style.visibility = "visible";
        element.classList.add("animated");
      });
    }
  }, [activeTab, currentPage]);

  // Lọc sản phẩm theo tab (dựa trên category slug)
  const filteredProducts = products.filter((product) => {
    const categorySlugs = product.categories.map((cat) => cat.slug);
    return categorySlugs.includes(activeTab);
  });

  // Tính toán số trang
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  // Lấy sản phẩm cho trang hiện tại
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset về trang 1 khi đổi tab
  const handleTabChange = (slug: string, categoryName: string) => {
    setActiveTab(slug);
    setCategoryName(categoryName);
    setCurrentPage(1);
  };

  return (
    <SectionContainer className="py-20 bg-[#f4f4f4]">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-12">
        {/* Header */}
        <div className="lg:max-w-[500px] mb-8 lg:mb-0">
          <SectionTitle
            title="Sản phẩm của chúng tôi"
            description="Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo."
            className="text-start"
          />
        </div>

        {/* Tabs động từ danh sách category */}
        <div className="wow slideInRight" data-wow-delay="0.1s">
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-2 rounded-full border-2 border-[#3cb815] transition-colors
                  ${
                    activeTab === category.slug
                      ? "bg-[#3cb815] text-white"
                      : "text-[#3cb815] hover:bg-[#3cb815] hover:text-white"
                  }`}
                onClick={() => handleTabChange(category.slug, category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hiển thị trạng thái loading nếu đang fetch dữ liệu */}
      {loading ? (
        <div className="text-center">Đang tải sản phẩm...</div>
      ) : (
        <>
          {/* Products Grid */}
          <div
            ref={productGridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {currentProducts.map((product, index) => (
              <div
                key={product.id}
                className="wow fadeInUp"
                data-wow-delay={`${0.1 + index * 0.2}s`}
                style={{ visibility: "visible" }}
              >
                <ProductCard
                  delay={0}
                  id={product.id}
                  image={product.images[0]?.src || "/default-image.jpg"}
                  title={product.name}
                  price={parseFloat(product.sale_price || product.price)}
                  oldPrice={parseFloat(product.regular_price)}
                  category={activeTab} // Truyền slug của category để tạo URL
                  categoryName={categoryName}
                />
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      )}
    </SectionContainer>
  );
};

export default ProductSection;
