'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Bắt buộc'),
  lastName: Yup.string().required('Bắt buộc'),
  companyName: Yup.string(),
  country: Yup.string().required('Bắt buộc'),
  streetAddress: Yup.string().required('Bắt buộc'),
  postcode: Yup.string(),
  city: Yup.string().required('Bắt buộc'),
  phone: Yup.string().matches(/^[0-9]{10}$/, 'Số điện thoại không hợp lệ').required('Bắt buộc'),
  email: Yup.string().email('Email không hợp lệ').required('Bắt buộc'),
  agreeTerms: Yup.boolean().oneOf([true], 'Bạn phải đồng ý với điều khoản'),
  agreeCOD: Yup.boolean().oneOf([true], 'Bạn phải xác nhận thanh toán COD'),
});

export default function CheckoutForm() {
  const initialValues = {
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'Vietnam',
    streetAddress: '',
    streetAddress2: '',
    postcode: '',
    city: '',
    phone: '',
    email: '',
    deliveryMethod: 'delivery',
    agreeTerms: false,
    agreeCOD: false,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
        <Form className="space-y-6 bg-white">
          <div className=" p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 italic">Billing details</h3>
            
            <div className="space-y-4">
              {/* First name and Last name - side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    First name <span className='text-red-700'>*</span>
                  </label>
                  <Field 
                    name="firstName" 
                    type="text" 
                    className="w-full p-2 border border-[#dddfe4] rounded-md" 
                  />
                  <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Last name <span className='text-red-700'>*</span>
                  </label>
                  <Field 
                    name="lastName" 
                    type="text" 
                    className="w-full p-2 border border-[#dddfe4] rounded-md" 
                  />
                  <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
                </div>
              </div>

              {/* Company name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Company name (optional)
                </label>
                <Field 
                  name="companyName" 
                  type="text" 
                  className="w-full p-2 border border-[#dddfe4] rounded-md" 
                />
              </div>

              {/* Country / Region */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Country / Region <span className='text-red-700'>*</span>
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
                <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Street address */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Street address <span className='text-red-700'>*</span>
                </label>
                <Field 
                  name="streetAddress" 
                  type="text" 
                  className="w-full p-2 border border-[#dddfe4] rounded-md mb-2" 
                  placeholder="House number and street name" 
                />
                <Field 
                  name="streetAddress2" 
                  type="text" 
                  className="w-full p-2 border border-[#dddfe4] rounded-md" 
                  placeholder="Apartment, suite, unit, etc. (optional)" 
                />
                <ErrorMessage name="streetAddress" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Postcode / ZIP */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Postcode / ZIP (optional)
                </label>
                <Field 
                  name="postcode" 
                  type="text" 
                  className="w-full p-2 border border-[#dddfe4] rounded-md" 
                />
              </div>

              {/* Town / City */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Town / City <span className='text-red-700'>*</span>
                </label>
                <Field 
                  name="city" 
                  type="text" 
                  className="w-full p-2 border border-[#dddfe4] rounded-md" 
                />
                <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone <span className='text-red-700'>*</span>
                </label>
                <Field 
                  name="phone" 
                  type="tel" 
                  className="w-full p-2 border border-[#dddfe4] rounded-md" 
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Email address */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email address <span className='text-red-700'>*</span>
                </label>
                <Field 
                  name="email" 
                  type="email" 
                  className="w-full p-2 border border-[#dddfe4] rounded-md" 
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center">
                <Field 
                  type="checkbox" 
                  name="agreeTerms" 
                  className="h-4 w-4 border-[#dddfe4] text-blue-600" 
                />
                <label className="ml-2 text-sm">
                  I have read and agree to the Terms and Conditions
                </label>
              </div>
              <ErrorMessage name="agreeTerms" component="div" className="text-red-500 text-sm" />
            </div>
          </div>

          {/* Payment Section */}
          {/* <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
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
                    <div className="font-medium">Cash on Delivery (COD)</div>
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
    </Formik>
  );
}