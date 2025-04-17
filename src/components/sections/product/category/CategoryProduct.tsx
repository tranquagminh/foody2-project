"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../../homepage/ProductSection/ProductCard";
import { fetchProducts, Product } from "@/lib/api/woocommerce";

function CategoryProduct({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      setLoading(false);
    };

    loadProducts();
  }, [params]);

  const { category } = React.use(params); // Lấy category từ params
  const filteredProducts = products.filter((product) =>
    product.categories.some((cat) => cat.slug === category)
  );

  if (loading) {
    return <div className="container mx-auto py-8">Đang tải...</div>;
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="container mx-auto py-8">
        Không có sản phẩm trong danh mục này
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product, index) => (
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
            category={category}
          />
        </div>
      ))}
    </div>
  );
}

export default CategoryProduct;
