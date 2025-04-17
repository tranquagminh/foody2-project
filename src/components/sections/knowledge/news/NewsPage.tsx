"use client";
import { useEffect, useRef, useState } from "react";
import NewsItem from "./NewsItem";
import Pagination from "@/components/shared/Pagination";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { useParams } from "next/navigation";
import {
  fetchPosts,
  fetchPostCategories,
  fetchMedia,
  fetchAuthor,
  Post,
  PostCategory,
  Media,
  Author,
} from "@/lib/api/PostsApi";
import PageHeader from "@/components/common/PageHeader";
import SectionContainer from "@/components/shared/SectionContainer";

const ITEMS_PER_PAGE = 5;

const NewsPage = () => {
  const params = useParams();
  const slug = (params.slug as string) || "tin-tuc";

  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<PostCategory[]>([]);
  const [media, setMedia] = useState<{ [key: number]: Media }>({});
  const [authors, setAuthors] = useState<{ [key: number]: Author }>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const newsGridRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);
  const currentPosts = posts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      // Fetch danh mục bài viết
      const fetchedCategories = await fetchPostCategories();
      setCategories(fetchedCategories);

      // Tìm ID của danh mục dựa trên slug
      const category = fetchedCategories.find((cat) => cat.slug === slug);
      const categoryId = category?.id;

      // Fetch bài viết theo danh mục
      const fetchedPosts = await fetchPosts(50, categoryId); // Lấy tối đa 50 bài viết
      setPosts(fetchedPosts);

      // Fetch hình ảnh nổi bật
      const mediaPromises = fetchedPosts
        .filter((post) => post.featured_media)
        .map(async (post) => {
          const mediaData = await fetchMedia(post.featured_media!);
          return { id: post.featured_media!, media: mediaData };
        });
      const mediaResults = await Promise.all(mediaPromises);
      const mediaMap = mediaResults.reduce((acc, { id, media }) => {
        if (media) acc[id] = media;
        return acc;
      }, {} as { [key: number]: Media });
      setMedia(mediaMap);

      // Fetch thông tin tác giả
      const authorPromises = fetchedPosts.map(async (post) => {
        const authorData = await fetchAuthor(post.author);
        return { id: post.author, author: authorData };
      });
      const authorResults = await Promise.all(authorPromises);
      const authorMap = authorResults.reduce((acc, { id, author }) => {
        if (author) acc[id] = author;
        return acc;
      }, {} as { [key: number]: Author });
      setAuthors(authorMap);

      setLoading(false);
    };

    loadData();
  }, [slug]);

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
    if (newsGridRef.current) {
      const elements = newsGridRef.current.querySelectorAll(".wow");
      elements.forEach((element) => {
        (element as HTMLElement).style.visibility = "hidden";
        element.classList.remove("animated");
        void (element as HTMLElement).offsetWidth; // Trigger reflow
        (element as HTMLElement).style.visibility = "visible";
        element.classList.add("animated");
      });
    }
  }, [currentPage]);

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Đang tải...</div>;
  }

  const category = categories.find((cat) => cat.slug === slug);

  return (
    <SectionContainer className="!py-0">
      <div ref={newsGridRef}>
        <AnimatedSection animation="fadeInUp" delay={0.1}>
          <div className="container mx-auto px-4">
            {currentPosts.map((post, index) => {
              const featuredImage = post.featured_media
                ? media[post.featured_media]?.source_url.replace(
                    "https://",
                    "http://"
                  ) || "/default-image.jpg"
                : "/default-image.jpg";
              const authorName =
                authors[post.author]?.name || "Tác giả không xác định";
              const date = new Date(post.date).toLocaleDateString("vi-VN", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              });

              return (
                <div
                  key={post.id}
                  className="wow fadeInUp"
                  data-wow-delay={`${0.1 + index * 0.2}s`}
                >
                  <NewsItem
                    title={post.title.rendered}
                    date={date}
                    comments={0} // WordPress API không trả về số bình luận trực tiếp
                    excerpt={post.excerpt.rendered.replace(/<[^>]+>/g, "")}
                    imageUrl={featuredImage}
                    link={`/blog/${post.id}`}
                  />
                </div>
              );
            })}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </AnimatedSection>
      </div>
    </SectionContainer>
  );
};

export default NewsPage;
