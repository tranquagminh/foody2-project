"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PageHeader from "@/components/common/PageHeader";
import SectionContainer from "@/components/shared/SectionContainer";
import { decodeHTMLEntities } from "@/lib/utils/stringSpecial";
import {
  fetchPostById,
  fetchMedia,
  fetchAuthor,
  Post,
  Media,
  Author,
} from "@/lib/api/PostsApi";
import Image from "next/image";

interface BreadcrumbItem {
  label: string;
  href: string;
  active?: boolean;
}

const PostDetail = () => {
  const params = useParams();
  const id = params.id as string; // Lấy ID từ URL

  const [post, setPost] = useState<Post | null>(null);
  const [media, setMedia] = useState<Media | null>(null);
  const [author, setAuthor] = useState<Author | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPostData = async () => {
      setLoading(true);
      try {
        // Lấy bài viết theo ID
        const fetchedPost = await fetchPostById(parseInt(id));
        setPost(fetchedPost);

        // Lấy hình ảnh nổi bật (nếu có)
        if (fetchedPost && fetchedPost.featured_media) {
          const fetchedMedia = await fetchMedia(fetchedPost.featured_media);
          setMedia(fetchedMedia);
        }

        // Lấy thông tin tác giả
        if (fetchedPost) {
          const fetchedAuthor = await fetchAuthor(fetchedPost.author);
          setAuthor(fetchedAuthor);
        }
      } catch (error) {
        console.error("Error fetching post data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadPostData();
    }
  }, [id]);

  if (loading) {
    return <div className="container mx-auto py-50">Đang tải...</div>;
  }

  if (!post) {
    return (
      <div className="container mx-auto py-50">Bài viết không tồn tại.</div>
    );
  }

  // Xây dựng breadcrumbs
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Trang chủ", href: "/" },
    { label: "Bài viết", href: "/kien-thuc" },
    { label: decodeHTMLEntities(post.title.rendered), href: `/blog/${post.id}`, active: true },
  ];

  const featuredImage =
    media?.source_url.replace("https://", "https://") || "/default-image.jpg";
  const authorName = author?.name || "Tác giả không xác định";
  const date = new Date(post.date).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <>
      <PageHeader title="" breadcrumbs={breadcrumbs} />
      <SectionContainer className="!py-0">
        <div className="container mx-auto px-4 py-8">
          {/* Hình ảnh nổi bật */}
          {featuredImage && (
            <div className="mb-8">
              <img
                src={featuredImage}
                alt={post.title.rendered}
                className="w-full h-96 object-cover rounded-lg"
                height={500}
                width={500}
              />
            </div>
          )}

          <h1 className="text-6xl font-bold leading-20 mb-6">
            {decodeHTMLEntities(post.title.rendered)}
          </h1>

          {/* Thông tin bài viết */}
          <div className="mb-6">
            <p className="text-gray-600">
              Đăng bởi <span className="font-semibold">{authorName}</span> vào
              ngày {date}
            </p>
          </div>

          {/* Nội dung bài viết */}
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: decodeHTMLEntities(post.content.rendered) }}
          />
        </div>
      </SectionContainer>
    </>
  );
};

export default PostDetail;
