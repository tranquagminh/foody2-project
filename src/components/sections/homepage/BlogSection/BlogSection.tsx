"use client";
import { useEffect, useState } from "react";
import SectionTitle from "@/components/common/SectionTitle";
import BlogCard from "./BlogCard";
import SectionContainer from "@/components/shared/SectionContainer";
import {
  fetchPosts,
  fetchMedia,
  fetchAuthor,
  Post,
  Media,
  Author,
} from "@/lib/api/PostsApi";

const BlogSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [media, setMedia] = useState<{ [key: number]: Media }>({});
  const [authors, setAuthors] = useState<{ [key: number]: Author }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      // Fetch danh sách bài viết (giới hạn 3 bài)
      const fetchedPosts = await fetchPosts(3);
      setPosts(fetchedPosts);

      // Fetch hình ảnh nổi bật cho từng bài viết
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

      // Fetch thông tin tác giả cho từng bài viết
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
  }, []);

  if (loading) {
    return (
      <SectionContainer className="!py-10">
        <div className="text-center">Đang tải...</div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer className="!py-10">
      {/* Section Header */}
      <div className="max-w-[500px] mx-auto mb-16">
        <SectionTitle
          title="Blog của chúng tôi"
          description="Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo."
          className="text-center"
        />
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => {
          const featuredImage = post.featured_media
            ? media[post.featured_media]?.source_url.replace(
                "https://",
                "https://"
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
            <div key={post.id} className="h-full">
              <BlogCard
                id={post.id}
                image={featuredImage}
                title={post.title.rendered}
                author={authorName}
                date={date}
                delay={0.1 * (index + 1)} // Tính toán delay động
              />
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default BlogSection;
