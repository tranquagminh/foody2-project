"use client";
import React from "react";
import { useCart } from "@/context/CartContext";

const OrderSummary = ({ onSubmit }: { onSubmit: () => void }) => {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = subtotal;

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-serif italic mb-6">Your order</h2>

      <div className="border-b pb-4">
        <div className="flex justify-between font-medium mb-2">
          <div>Product</div>
          <div>Subtotal</div>
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between py-3 border-t">
            <div>
              {item.title} × {item.quantity}
            </div>
            <div>{formatPrice(item.price * item.quantity)}</div>
          </div>
        ))}

        <div className="flex justify-between py-3 border-t">
          <div className="font-medium">Total</div>
          <div className="font-bold">{formatPrice(total)}</div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-2">
          Trả tiền mặt khi nhận hàng (COD)
        </h3>

        <div className="bg-gray-100 p-4 rounded mt-2">
          <p className="text-gray-700">
            Quý khách thanh toán cho nhân viên giao hàng hoặc chuyển khoản đến
            số tài khoản của công ty khi nhận hàng.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <button
          className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition hover:cursor-pointer"
          type="button"
          onClick={onSubmit}
        >
          Đặt hàng
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
