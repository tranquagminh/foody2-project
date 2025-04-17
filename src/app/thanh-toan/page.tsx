"use client";
import { Formik, FormikContextType, useFormikContext } from "formik";
import * as Yup from "yup";
import CheckoutForm from "@/components/sections/checkout/CheckoutForm";
import OrderSummary from "@/components/sections/checkout/OrderSummary";
import SectionContainer from "@/components/shared/SectionContainer";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { createOrder } from "@/lib/api/woocommerce";
import { useEffect } from "react";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Bắt buộc"),
  lastName: Yup.string().required("Bắt buộc"),
  companyName: Yup.string(),
  country: Yup.string().required("Bắt buộc"),
  streetAddress: Yup.string().required("Bắt buộc"),
  postcode: Yup.string(),
  city: Yup.string().required("Bắt buộc"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Số điện thoại không hợp lệ")
    .required("Bắt buộc"),
  email: Yup.string().email("Email không hợp lệ").required("Bắt buộc"),
  agreeTerms: Yup.boolean().oneOf([true], "Bạn phải đồng ý với điều khoản"),
  // agreeCOD: Yup.boolean().oneOf([true], "Bạn phải xác nhận thanh toán COD"),
});

const CheckoutContent = () => {
  const { submitForm }: FormikContextType<any> = useFormikContext();

  return (
    <div className="container mx-auto px-4 py-15">
      <h1 className="text-3xl font-bold mb-8">Thanh toán</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <CheckoutForm />
        </div>

        {/* Order Summary */}
        <div className="md:col-span-1">
          <OrderSummary onSubmit={submitForm} />
        </div>
      </div>
    </div>
  );
};

export default function CheckoutPage() {
  const { cartItems, setCartItems } = useCart();
  const router = useRouter();

  // Kiểm tra nếu giỏ hàng rỗng, điều hướng về trang giỏ hàng
  useEffect(() => {
    if (cartItems.length === 0) {
      router.push("/"); // Điều hướng trong useEffect
    }
  }, [cartItems, router]); // Phụ thuộc vào cartItems và router

  // Nếu giỏ hàng rỗng, không render gì cả
  if (cartItems.length === 0) {
    return null;
  }

  const initialValues = {
    firstName: "",
    lastName: "",
    companyName: "",
    country: "Vietnam",
    streetAddress: "",
    streetAddress2: "",
    postcode: "",
    city: "",
    phone: "",
    email: "",
    deliveryMethod: "delivery",
    agreeTerms: false,
    agreeCOD: false,
  };

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("handleSubmit được gọi!"); // Debug
    console.log("Dữ liệu form:", values); // Debug

    const orderData = {
      customer: {
        firstName: values.firstName,
        lastName: values.lastName,
        companyName: values.companyName,
        country: values.country,
        streetAddress: values.streetAddress,
        streetAddress2: values.streetAddress2,
        postcode: values.postcode,
        city: values.city,
        phone: values.phone,
        email: values.email,
      },
      items: cartItems,
      total: cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
      paymentMethod: "COD",
    };
    try {
      // Gọi API để tạo đơn hàng trong WooCommerce
      const result = await createOrder(orderData);
      console.log("Order created in WooCommerce:", result);

      // Xóa giỏ hàng sau khi đặt hàng thành công
      setCartItems([]);

      // Điều hướng đến trang xác nhận đơn hàng
      router.push("/");
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Có lỗi xảy ra khi đặt hàng. Vui lòng thử lại!");
    }
  };

  return (
    <SectionContainer className="bg-icon-pattern bg-[#f7f8fc]">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <CheckoutContent />
      </Formik>
    </SectionContainer>
  );
}
