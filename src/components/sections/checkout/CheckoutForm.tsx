'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number').required('Required'),
  agreeTerms: Yup.boolean().oneOf([true], 'You must accept the terms'),
  agreeCOD: Yup.boolean().oneOf([true], 'You must acknowledge COD payment'),
  // ... other fields
});

export default function CheckoutForm() {
  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    state: '',
    zipCode: '',
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
        <Form className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full name <span className='text-red-700'>*</span></label>
                <Field 
                  name="fullName" 
                  type="text" 
                  className="w-full p-2 border rounded-md" 
                  placeholder="Enter full name" 
                />
                <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email <span className='text-red-700'>*</span></label>
                <Field 
                  name="email" 
                  type="email" 
                  className="w-full p-2 border rounded-md" 
                  placeholder="Enter your email" 
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <Field 
                    name="city" 
                    type="text" 
                    className="w-full p-2 border rounded-md" 
                    placeholder="Enter city" 
                  />
                </div>
              </div>

              <div className="flex items-center">
                <Field 
                  type="checkbox" 
                  name="agreeTerms" 
                  className="h-4 w-4 text-blue-600" 
                />
                <label className="ml-2 text-sm">
                  I have read and agree to the Terms and Conditions
                </label>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
            {/* Payment components... */}
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
          </div>
        </Form>
    </Formik>
  );
}