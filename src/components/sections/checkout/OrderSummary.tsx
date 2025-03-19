"use client";
import React from "react";

const OrderSummary = () => {
  // const [couponCode, setCouponCode] = useState('');

  // Sample order data
  const orderItems = [
    { id: 1, name: "Dưa Leo Xanh", quantity: 6, price: 475000 },
  ];

  // Calculate totals
  const subtotal = orderItems.reduce((total, item) => total + item.price, 0);
  const total = subtotal; // Can be modified if there are discounts

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-serif italic mb-6">Your order</h2>

      <div className="border-b pb-4">
        <div className="flex justify-between font-medium mb-2">
          <div>Product</div>
          <div>Subtotal</div>
        </div>

        {orderItems.map((item) => (
          <div key={item.id} className="flex justify-between py-3 border-t">
            <div>
              {item.name} × {item.quantity}
            </div>
            <div>{item.price.toLocaleString()}đ</div>
          </div>
        ))}

        <div className="flex justify-between py-3 border-t">
          <div className="font-medium">Total</div>
          <div className="font-bold">{total.toLocaleString()}đ</div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-2">Trả tiền mặt khi nhận hàng</h3>

        <div className="bg-gray-100 p-4 rounded mt-2">
          <p className="text-gray-700">Trả tiền mặt khi giao hàng</p>
        </div>
      </div>

      <div className="mt-6">
        <button
          className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition"
          type="submit"
        >
          Đặt hàng
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
