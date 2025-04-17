"use client";
import { useEffect, useState } from "react";
import SectionContainer from "@/components/shared/SectionContainer";
import PageHeader from "@/components/common/PageHeader";
import ProductTabs from "@/components/sections/product/productDetail/ProductTabs";
import ProductInfo from "@/components/sections/product/productDetail/ProductInfo";
import {
  fetchProducts,
  fetchCategories,
  Product,
  Category,
} from "@/lib/api/woocommerce";
import React from "react";

interface ProductDetailProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

const ProductDetail = (props: ProductDetailProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      // Lấy params
      const { category, slug } = await props.params;

      // Fetch danh sách sản phẩm từ API
      const products: Product[] = await fetchProducts();
      const foundProduct = products.find((p) => p.id === parseInt(slug));
      setProduct(foundProduct || null);

      // Fetch danh sách category từ API
      const fetchedCategories: Category[] = await fetchCategories();
      setCategories(fetchedCategories);

      setLoading(false);
    };

    loadData();
  }, [props.params]);

  // Lấy params để sử dụng trong render
  const { category } = React.use(props.params);
  const currentCategory = categories.find((cat) => cat.slug === category);
  const categoryName = currentCategory ? currentCategory.name : category;

  if (loading) {
    return <div className="container mx-auto py-50">Đang tải...</div>;
  }

  if (!product) {
    return <div>Sản phẩm không tồn tại!</div>;
  }

  return (
    <>
      <PageHeader
        title="Sản phẩm"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Sản phẩm", href: "/san-pham" },
          { label: categoryName, href: `/san-pham/${category}` },
          {
            label: product.name,
            href: `/san-pham/${category}/${product.id}`,
            active: true,
          },
        ]}
      />
      <SectionContainer className="bg-icon-pattern bg-[#f7f8fc] -mt-20">
        <div className="container mx-auto px-4 py-20">
          <ProductInfo product={product} />

          {/* Product Tabs Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <ProductTabs product={product} />
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default ProductDetail;
