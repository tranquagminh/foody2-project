import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  delay: number;
  category: string;
}

const categoryMapping: Record<string, string> = {
  'vegetable': 'rau-cu',
  'fruits': 'trai-cay',
  'fresh': 'thuc-pham-tuoi'
};

const ProductCard = ({id, image, title, price, oldPrice, delay, category }: ProductCardProps) => {
  const categoryValue = categoryMapping[category];
  return (
    <div className="wow fadeInUp" data-wow-delay={`${delay}s`}>
      <div className="bg-white">
        <div className="relative bg-gray-100 overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            className="w-full transition-transform duration-300 hover:scale-105"
          />
          <div className="bg-[#F65005] rounded text-white absolute left-0 top-0 m-4 py-1 px-3">Mới</div>
        </div>
        <div className="text-center p-4">
          <Link href={`/san-pham/${id}`} className="block text-xl font-semibold mb-2 hover:text-[#3cb815] transition-colors">
            {title}
          </Link>
          <span className="text-2xl font-bold text-green-700">{price.toLocaleString()}đ</span>
          {oldPrice && (
            <span className="ml-2 text-gray-500 line-through">
              {oldPrice.toLocaleString()}đ
            </span>
          )}
        </div>
        <div className="flex border-t border-[#dee2e6]">
          <Link href={`/san-pham/${categoryValue}/${id}`} className="w-1/2 text-center border-r border-[#dee2e6] py-2 hover:text-[#3cb815] transition-colors">
            <FontAwesomeIcon icon={faEye} className="text-[#3cb815] mr-2" />
            Chi tiết
          </Link>
          <Link href="#" className="w-1/2 text-center py-2 hover:text-[#3cb815] transition-colors">
            <FontAwesomeIcon icon={faShoppingBag} className="text-[#3cb815] mr-2" />
            Thêm vào giỏ hàng
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;