"use client";
import { useEffect, useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import CategoryProduct from "@/components/sections/product/category/CategoryProduct";
import SectionContainer from "@/components/shared/SectionContainer";
import { Category, fetchCategories } from "@/lib/api/woocommerce";
import React from "react";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
    };

    loadCategories();
  }, []);

  const { category } = React.use(params);
  const currentCategory = categories.find((cat) => cat.slug === category);
  const categoryName = currentCategory ? currentCategory.name : category;

  return (
    <>
      <PageHeader
        title="Sản phẩm"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Sản phẩm", href: "/san-pham" },
          {
            label: categoryName,
            href: `/san-pham/${category}`,
            active: true,
          },
        ]}
      />
      <SectionContainer className="bg-icon-pattern bg-[#f7f8fc] -mt-20">
        <div className="container mx-auto p-4">
          <CategoryProduct params={params} />
        </div>
      </SectionContainer>
    </>
  );
}
