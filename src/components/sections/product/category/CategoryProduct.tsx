import React from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/constants/homepage";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ProductCard from "../../homepage/ProductSection/ProductCard";

const categoryMapping: Record<string, string> = {
  "rau-cu": "vegetable",
  "trai-cay": "fruits",
  "thuc-pham-tuoi": "fresh",
};

async function CategoryProduct({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const categoryValue = categoryMapping[category];

  const filteredProducts = categoryValue
    ? products.filter((product) => product.category === categoryValue)
    : [];

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
          style={{ visibility: "visible" }} // Force visibility
        >
          <ProductCard delay={0} {...product} />
        </div>
      ))}
    </div>
  );
}

export default CategoryProduct;
