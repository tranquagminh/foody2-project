import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Image from "next/image";
import { useCart } from "@/context/CartContext"; // Import useCart

interface CartItemProps {
  item: {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
    category: string;
    categoryName: string;
  };
}

const CartItem = ({ item }: CartItemProps) => {
  const { addToCart, setCartItems } = useCart(); // Lấy addToCart và setCartItems từ CartContext

  // Hàm tăng số lượng
  const increaseQuantity = () => {
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      category: item.category,
      categoryName: item.category,
    });
  };

  // Hàm giảm số lượng
  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  // Hàm xóa sản phẩm
  const removeItem = () => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  // Định dạng giá tiền theo kiểu Việt Nam
  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  return (
    <div className="flex items-center gap-6 p-4 bg-white rounded-lg border border-[#e2e8f0] hover:border-[#3cb815] transition-colors">
      {/* Product Image */}
      <div className="w-24 h-24">
        <Image
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain"
          width={500}
          height={500}
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs text-[#3cb815] uppercase">
              {item.categoryName}
            </span>
            <h3 className="font-semibold">
              {item.title}{" "}
              <span className="text-sm text-gray-500">x{item.quantity}</span>
            </h3>
            <span className="text-xs text-[#111111] uppercase">
              {formatPrice(item.price)}
            </span>
          </div>
        </div>

        {/* Quantity Controls & Price */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center border border-[#e2e8f0] rounded-full">
              <button
                onClick={decreaseQuantity}
                className="px-3 py-1 rounded-full bg-[#e2e8f0] hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-1">{item.quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-3 py-1 rounded-full bg-[#e2e8f0] hover:bg-gray-100"
              >
                +
              </button>
            </div>
            <DeleteOutlineIcon
              onClick={removeItem}
              className="text-gray-400 cursor-pointer hover:text-red-500"
            />
          </div>

          <div className="text-right">
            <div className="font-semibold">
              {formatPrice(item.price * item.quantity)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
