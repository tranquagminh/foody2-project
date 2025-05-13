import axios from "axios";

export interface Attribute {
  id: number;
  name: string;
  options: string[];
  position: number;
  visible: boolean;
  variation: boolean;
}

// Định nghĩa kiểu dữ liệu cho sản phẩm từ API
export interface Product {
  id: number;
  name: string;
  price: string;
  regular_price: string;
  sale_price: string;
  images: { src: string }[];
  categories: { id: number; name: string; slug: string }[];
  stock_status: string;
  description: string;
  attributes: Attribute[];
}

// Định nghĩa kiểu dữ liệu cho category từ API
export interface Category {
  id: number;
  name: string;
  slug: string;
}

// Cấu hình axios instance
const api = axios.create({
  baseURL: "https://localhost:8443/wp-json/wc/v3",
  headers: {
    Authorization: `Basic ${btoa(
      `${process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_KEY}:${process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET}`
    )}`, // Thay bằng key của bạn
  },
});

// Hàm fetch danh sách sản phẩm
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get<Product[]>("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Hàm fetch danh sách category
export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await api.get<Category[]>("/products/categories", {
      params: {
        per_page: 100, // Lấy tối đa 100 category (có thể điều chỉnh)
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

interface Customer {
  firstName: string;
  lastName: string;
  companyName: string;
  country: string;
  streetAddress: string;
  streetAddress2: string;
  postcode: string;
  city: string;
  phone: string;
  email: string;
}

interface CartItem {
  id: number;
  product_id?: number; // Thêm product_id nếu bạn đồng bộ với WooCommerce
  title: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
}

interface OrderData {
  customer: Customer;
  items: CartItem[];
  total: number;
  paymentMethod: string;
}

export const createOrder = async (orderData: OrderData) => {
  try {
    const response = await api.post(
      `https://localhost:8443/wp-json/wc/v3/orders`,
      {
        payment_method: "cod",
        payment_method_title: "Thanh toán khi nhận hàng (COD)",
        set_paid: false,
        billing: {
          first_name: orderData.customer.firstName,
          last_name: orderData.customer.lastName,
          address_1: orderData.customer.streetAddress,
          address_2: orderData.customer.streetAddress2,
          city: orderData.customer.city,
          postcode: orderData.customer.postcode,
          country: orderData.customer.country,
          email: orderData.customer.email,
          phone: orderData.customer.phone,
        },
        shipping: {
          first_name: orderData.customer.firstName,
          last_name: orderData.customer.lastName,
          address_1: orderData.customer.streetAddress,
          address_2: orderData.customer.streetAddress2,
          city: orderData.customer.city,
          postcode: orderData.customer.postcode,
          country: orderData.customer.country,
        },
        line_items: orderData.items.map((item) => ({
          name: item.title,
          quantity: item.quantity,
          price: item.price,
          product_id: item.id,
        })),
        total: orderData.total.toString(),
      }
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(
        `Failed to create order in WooCommerce: ${error.response.data.message}`
      );
    }
    throw new Error(`Error creating order: ${error.message}`);
  }
};

// export const createOrder = async (orderData: OrderData) => {
//   try {
//     const response = await fetch(
//       `https://localhost/WordPress/wp-json/wc/v3/orders`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Basic ${btoa(
//             `${process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_KEY}:${process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET}`
//           )}`,
//         },
//         body: JSON.stringify({
//           payment_method: "cod",
//           payment_method_title: "Thanh toán khi nhận hàng (COD)",
//           set_paid: false,
//           billing: {
//             first_name: orderData.customer.firstName,
//             last_name: orderData.customer.lastName,
//             address_1: orderData.customer.streetAddress,
//             address_2: orderData.customer.streetAddress2,
//             city: orderData.customer.city,
//             postcode: orderData.customer.postcode,
//             country: orderData.customer.country,
//             email: orderData.customer.email,
//             phone: orderData.customer.phone,
//           },
//           shipping: {
//             first_name: orderData.customer.firstName,
//             last_name: orderData.customer.lastName,
//             address_1: orderData.customer.streetAddress,
//             address_2: orderData.customer.streetAddress2,
//             city: orderData.customer.city,
//             postcode: orderData.customer.postcode,
//             country: orderData.customer.country,
//           },
//           line_items: orderData.items.map((item) => ({
//             name: item.title,
//             quantity: item.quantity,
//             price: item.price,
//             product_id: item.id,
//           })),
//           total: orderData.total.toString(),
//         }),
//       }
//     );
//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(
//         `Failed to create order in WooCommerce: ${errorData.message}`
//       );
//     }

//     const result = await response.json();
//     return result;
//   } catch (error: any) {
//     throw new Error(`Error creating order: ${error.message}`);
//   }
// };
