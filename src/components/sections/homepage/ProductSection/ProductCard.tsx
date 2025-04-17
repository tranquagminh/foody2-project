import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/context/CartContext"; // Import useCart

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  delay: number;
  category: string;
  categoryName: string;
}

const ProductCard = ({
  id,
  image,
  title,
  price,
  oldPrice,
  delay,
  category,
  categoryName,
}: ProductCardProps) => {
  const { addToCart } = useCart(); // Sử dụng useCart để lấy hàm addToCart
  const featuredImg = image.replace("https", "http");

  const handleAddToCart = () => {
    // Gọi addToCart với thông tin sản phẩm
    addToCart({
      id,
      title,
      price,
      image: featuredImg,
      category,
      categoryName,
    });
  };

  return (
    <div className="wow fadeInUp" data-wow-delay={`${delay}s`}>
      <div className="bg-white">
        <Link
          href={`/san-pham/${category}/${id}`}
          className="relative bg-gray-100 overflow-hidden block aspect-square"
        >
          <Image
            src={featuredImg}
            alt={title}
            width={300}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="bg-[#F65005] rounded text-white absolute left-0 top-0 m-4 py-1 px-3">
            Mới
          </div>
        </Link>
        <div className="text-center p-4">
          <Link
            href={`/san-pham/${category}/${id}`}
            className="block text-xl font-semibold mb-2 hover:text-[#3cb815] transition-colors"
          >
            {title}
          </Link>
          <span className="text-2xl font-bold text-green-700">
            {price.toLocaleString()}đ
          </span>
          {oldPrice && (
            <span className="ml-2 text-gray-500 line-through">
              {oldPrice.toLocaleString()}đ
            </span>
          )}
        </div>
        <div className="flex border-t border-[#dee2e6]">
          <Link
            href={`/san-pham/${category}/${id}`}
            className="w-1/2 text-center border-r border-[#dee2e6] py-2 hover:text-[#3cb815] transition-colors"
          >
            <FontAwesomeIcon icon={faEye} className="text-[#3cb815] mr-2" />
            Chi tiết
          </Link>
          <button
            onClick={handleAddToCart} // Thêm sự kiện onClick
            className="w-1/2 text-center py-2 hover:text-[#3cb815] transition-colors hover:cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faShoppingBag}
              className="text-[#3cb815] mr-2"
            />
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
