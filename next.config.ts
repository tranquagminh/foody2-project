/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // hoặc "https" nếu ứng dụng dùng HTTPS
        hostname: "localhost", // Tên miền cho phép
        port: "8443", // Nếu có cổng cụ thể, ví dụ "3000" hoặc "8080"
        pathname: "/wp-content/uploads/**", // Đường dẫn mẫu cho ảnh
      },
    ],
  },
};

module.exports = nextConfig;
