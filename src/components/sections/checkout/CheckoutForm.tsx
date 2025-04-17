"use client";
import { Form, Field, ErrorMessage } from "formik";

export default function CheckoutForm() {
  return (
    <Form className="space-y-6 bg-white">
      <div className="p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 italic">
          Thông tin người mua
        </h3>

        <div className="space-y-4">
          {/* First name and Last name - side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Tên <span className="text-red-700">*</span>
              </label>
              <Field
                name="firstName"
                type="text"
                className="w-full p-2 border border-[#dddfe4] rounded-md"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Họ <span className="text-red-700">*</span>
              </label>
              <Field
                name="lastName"
                type="text"
                className="w-full p-2 border border-[#dddfe4] rounded-md"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>

          {/* Country / Region */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Quốc gia / Vùng <span className="text-red-700">*</span>
            </label>
            <Field
              as="select"
              name="country"
              className="w-full p-2 border border-[#dddfe4] rounded-md"
            >
              <option value="Vietnam">Vietnam</option>
              <option value="Thailand">Thailand</option>
              <option value="Singapore">Singapore</option>
              <option value="Malaysia">Malaysia</option>
            </Field>
            <ErrorMessage
              name="country"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Street address */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Địa chỉ <span className="text-red-700">*</span>
            </label>
            <Field
              name="streetAddress"
              type="text"
              className="w-full p-2 border border-[#dddfe4] rounded-md mb-2"
              placeholder="Số nhà và tên đường"
            />
            <Field
              name="streetAddress2"
              type="text"
              className="w-full p-2 border border-[#dddfe4] rounded-md"
              placeholder="Căn hộ, dãy nhà, đơn vị, v.v. (không bắt buộc)"
            />
            <ErrorMessage
              name="streetAddress"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Town / City */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Tỉnh / Thành phố <span className="text-red-700">*</span>
            </label>
            <Field
              name="city"
              type="text"
              className="w-full p-2 border border-[#dddfe4] rounded-md"
            />
            <ErrorMessage
              name="city"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Số điện thoại <span className="text-red-700">*</span>
            </label>
            <Field
              name="phone"
              type="tel"
              className="w-full p-2 border border-[#dddfe4] rounded-md"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Email address */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Địa chỉ email <span className="text-red-700">*</span>
            </label>
            <Field
              name="email"
              type="email"
              className="w-full p-2 border border-[#dddfe4] rounded-md"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <Field
              type="checkbox"
              name="agreeTerms"
              className="h-4 w-4 border-[#dddfe4] text-blue-600"
            />
            <label className="ml-2 text-sm">
              Tôi đã đọc và đồng ý với Điều kiện và chính sách của công ty
            </label>
          </div>
          <ErrorMessage
            name="agreeTerms"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
      </div>

      {/* Payment Section */}
      {/* <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Phương thức thanh toán</h3>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg bg-gray-50">
            <div className="flex items-center">
              <Field
                type="checkbox"
                name="agreeCOD"
                className="h-5 w-5 text-blue-600 mr-3"
                id="codCheckbox"
              />
              <label htmlFor="codCheckbox" className="flex-1">
                <div className="font-medium">
                  Thanh toán khi nhận hàng (COD)
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Thanh toán tiền mặt khi nhận hàng. Phí COD: 0đ
                </p>
              </label>
            </div>
            <ErrorMessage
              name="agreeCOD"
              component="div"
              className="text-red-500 text-sm mt-2"
            />
          </div>
        </div>
      </div> */}
    </Form>
  );
}
