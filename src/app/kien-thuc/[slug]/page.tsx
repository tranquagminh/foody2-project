"use client";
import { useEffect, useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import NewsArticleSection from "@/components/sections/knowledge/news/NewsPage";
import SectionContainer from "@/components/shared/SectionContainer";
import { useParams } from "next/navigation";
import { fetchPostCategories, PostCategory } from "@/lib/api/PostsApi";

interface BreadcrumbItem {
  label: string;
  href: string;
  active?: boolean;
}

const NewsArticle = () => {
  const params = useParams();
  const slug = (params.slug as string) || "tin-tuc";
  const [categories, setCategories] = useState<PostCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const fetchedCategories = await fetchPostCategories();
      setCategories(fetchedCategories);
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return <div className="container mx-auto py-50">Đang tải...</div>;
  }

  // Tìm danh mục dựa trên slug
  const category = categories.find((cat) => cat.slug === slug);
  const pageTitle = category?.name || "Kiến Thức"; // Fallback nếu không tìm thấy danh mục

  // Xây dựng breadcrumbs
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Trang chủ", href: "/" }];

  // Nếu không phải danh mục "kien-thuc", thêm breadcrumb "Kiến thức"
  if (slug !== "kien-thuc") {
    breadcrumbs.push({ label: "Kiến thức", href: "/kien-thuc" });
  }

  breadcrumbs.push({
    label: pageTitle,
    href: `/kien-thuc/${slug}`,
    active: true,
  });

  return (
    <>
      <PageHeader title={pageTitle} breadcrumbs={breadcrumbs} />
      <SectionContainer className="!py-0">
        <NewsArticleSection />
      </SectionContainer>
    </>
  );
};

export default NewsArticle;
