import axios from "axios";
import https from "https";

// Định nghĩa kiểu dữ liệu cho bài viết
export interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  categories: number[];
  featured_media?: number; // ID của hình ảnh nổi bật
  author: number; // ID của tác giả
}

// Định nghĩa kiểu dữ liệu cho danh mục
export interface PostCategory {
  id: number;
  name: string;
  slug: string;
}

// Định nghĩa kiểu dữ liệu cho hình ảnh
export interface Media {
  id: number;
  source_url: string;
}

// Định nghĩa kiểu dữ liệu cho tác giả
export interface Author {
  id: number;
  name: string;
}

// Cấu hình axios instance
const api = axios.create({
  baseURL: "https://localhost/WordPress/wp-json/wp/v2", // Sử dụng HTTP để tránh lỗi SSL
  headers: {
    Authorization: `Basic ${btoa(
      `${process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_KEY}:${process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET}`
    )}`, // Thay bằng key của bạn
  },
});

// Hàm fetch danh sách bài viết
export const fetchPosts = async (
  perPage: number = 10,
  categoryId?: number
): Promise<Post[]> => {
  try {
    const params: { per_page: number; categories?: number } = {
      per_page: perPage,
    };
    if (categoryId) {
      params.categories = categoryId; // Lọc theo danh mục nếu có categoryId
    }
    const response = await api.get<Post[]>("/posts", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

// Hàm fetch chi tiết bài viết
export const fetchPostById = async (id: number): Promise<Post | null> => {
  try {
    const response = await api.get<Post>(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching post by id:", error);
    return null;
  }
};

// Hàm fetch danh mục bài viết
export const fetchPostCategories = async (): Promise<PostCategory[]> => {
  try {
    const response = await api.get<PostCategory[]>("/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching post categories:", error);
    return [];
  }
};

// Hàm fetch hình ảnh nổi bật
export const fetchMedia = async (mediaId: number): Promise<Media | null> => {
  try {
    const response = await api.get<Media>(`/media/${mediaId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching media:", error);
    return null;
  }
};

// Hàm fetch thông tin tác giả
export const fetchAuthor = async (authorId: number): Promise<Author | null> => {
  try {
    const response = await api.get<Author>(`/users/${authorId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching author:", error);
    return null;
  }
};
