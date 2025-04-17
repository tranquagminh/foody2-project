"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

const CheckoutSummary = () => {
  const { cartItems } = useCart();
  const path = usePathname();

  // Tính tổng giá trị đơn hàng
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Giả lập các giá trị khác
  // const totalDiscount = 240000;
  // const estimatedTax = 56.0;
  // const deliveryFee = total >= 150 ? 0 : 10;
  const orderTotal = total;

  // Định dạng giá tiền theo kiểu Việt Nam
  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-[#e2e8f0]">
      <h2 className="font-semibold mb-6">Chi tiết đơn hàng</h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Tổng tiền :</span>
          <span className="font-semibold">{formatPrice(total)}</span>
        </div>

        {/* <div className="flex justify-between">
          <span>Giảm giá :</span>
          <span className="font-semibold">{formatPrice(totalDiscount)}</span>
        </div> */}

        {/* <div className="flex justify-between">
          <span>Estimated GST/CST :</span>
          <span className="font-semibold">{formatPrice(estimatedTax)}</span>
        </div> */}

        {/* <div className="flex gap-2">
          <input
            type="text"
            placeholder="Coupon Discount :"
            className="flex-1 px-4 py-2 border rounded focus:outline-none border-[#e2e8f0] focus:border-[#3cb815]"
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: "6px",
              backgroundColor: "#3cb815",
              ":hover": {
                backgroundColor: "#2da012",
              },
            }}
          >
            Apply
          </Button>
        </div> */}

        {/* <div className="flex justify-between items-center">
          <span>Delivery :</span>
          <span className="text-sm text-gray-500">
            {deliveryFee === 0
              ? "Free"
              : `${formatPrice(deliveryFee)} (*Free shipping over ${formatPrice(
                  150
                )})`}
          </span>
        </div> */}

        <div className="flex justify-between pt-4 border-t border-[#e2e8f0]">
          <span className="font-semibold">Tổng đơn hàng :</span>
          <span className="font-semibold">{formatPrice(orderTotal)}</span>
        </div>

        {!path.includes("/thanh-toan") && (
          <Button
            fullWidth
            variant="contained"
            sx={{
              borderRadius: "6px",
              backgroundColor: "#3cb815",
              ":hover": {
                backgroundColor: "#2da012",
              },
            }}
          >
            <Link href="/thanh-toan">Thanh toán</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default CheckoutSummary;
