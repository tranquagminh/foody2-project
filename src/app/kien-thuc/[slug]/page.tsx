"use client";
import PageHeader from "@/components/common/PageHeader";
import NewsArticleSection from "@/components/sections/knowledge/news/NewsPage";
import SectionContainer from "@/components/shared/SectionContainer";
import { useParams } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  href: string;
  active?: boolean;
}

interface ContentConfigType {
  title: string;
  parent: string;
}
interface ContentMappingType {
  [key: string]: ContentConfigType;
}

const CONTENT_MAPPING: ContentMappingType = {
  "tin-tuc": {
    title: "Tin Tức",
    parent: "Kiến thức",
  },
  "meo-nau-an": {
    title: "Mẹo Nấu Ăn",
    parent: "Kiến thức",
  },
  "dinh-duong": {
    title: "Dinh Dưỡng",
    parent: "Kiến thức",
  },
  "kien-thuc": {
    title: "Kiến Thức",
    parent: "Trang chủ",
  },
};

const NewsArticle = () => {
  const params = useParams();
  const slug = (params.slug as string) || "tin-tuc";
  const contentConfig = CONTENT_MAPPING[slug] || CONTENT_MAPPING["tin-tuc"];

  const breadcrumbs: BreadcrumbItem[] = [{ label: "Trang chủ", href: "/" }];

  if (contentConfig.parent !== "Trang chủ") {
    breadcrumbs.push({ label: contentConfig.parent, href: "/kien-thuc" });
  }

  breadcrumbs.push({
    label: contentConfig.title,
    href: `/${contentConfig.parent.toLowerCase().replace(" ", "-")}/${slug}`,
    active: true,
  });

  return (
    <>
      <PageHeader title={contentConfig.title} breadcrumbs={breadcrumbs} />
      <SectionContainer className="!py-0">
        <NewsArticleSection />
      </SectionContainer>
    </>
  );
};

export default NewsArticle;
