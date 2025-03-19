import React from "react";
import PageHeader from "@/components/common/PageHeader";
import CategoryProduct from "@/components/sections/product/category/CategoryProduct";
import SectionContainer from "@/components/shared/SectionContainer";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  return (
    <>
      <PageHeader
        title="Sản phẩm"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Sản phẩm", href: "/san-pham" },
          {
            label: getCategoryName(category),
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

function getCategoryName(category: string): string {
  const categoryMap: Record<string, string> = {
    "rau-cu": "Rau củ",
    "trai-cay": "Trái cây",
    "do-kho": "Đồ khô",
    "thuc-pham-tuoi": "Thực phẩm tươi",
  };

  return categoryMap[category] || category;
}
