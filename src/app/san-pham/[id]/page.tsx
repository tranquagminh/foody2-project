import Image from 'next/image';
import { products } from '@/constants/homepage';
import SectionContainer from '@/components/shared/SectionContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface ProductDetailProps {
  params: {
    id: string;
  };
} 

const ProductDetail = async ({ params }: ProductDetailProps) => {
  const id = await params.id;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Sản phẩm không tồn tại!</div>;
  }

  // Chuyển đổi giá từ USD sang VND
  const priceInVND = product.price * 25000;

  return (
    <SectionContainer className='bg-icon-pattern bg-[#f7f8fc]'>
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row gap-10 max-w-4xl mx-auto">
          {/* Left column - Image */}
          <div className="w-full md:w-1/2 relative">
            {/* Magnify icon */}
            <div className="absolute top-4 right-6 cursor-pointer">
              <FontAwesomeIcon icon={faSearch} className="text-gray-600 p-2 bg-white rounded-full" />
            </div>
            
            <div className="flex justify-center">
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={500}
                className="object-contain max-h-[500px]"
              />
            </div>
          </div>
          
          {/* Right column - Product details */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-semibold text-gray-800 mb-3">{product.title}</h1>
            <p className="text-xl font-semibold text-green-600 mb-8">{priceInVND.toLocaleString()}đ</p>
            
            {/* Quantity selector and add to cart */}
            <div className="flex items-center mb-10">
              <button className="border border-gray-300 h-9 w-9 flex items-center justify-center">
                <span className="text-lg">−</span>
              </button>
              <input 
                type="text" 
                className="border-t border-b border-gray-300 h-9 w-12 text-center" 
                value="1" 
                readOnly 
              />
              <button className="border border-gray-300 h-9 w-9 flex items-center justify-center">
                <span className="text-lg">+</span>
              </button>
              
              <button className="bg-[#18583a] text-white px-6 py-2 ml-4 transition-all hover:bg-[#124a30] uppercase font-medium text-sm">
                ADD TO CART
              </button>
            </div>
            
            {/* Product information table */}
            <div className="border-t border-gray-200 pt-6">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="py-2 text-gray-600 font-medium w-1/3">SKU</td>
                    <td className="py-2">SB93477201174</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-600 font-medium">CATEGORY</td>
                    <td className="py-2">
                      <Link href="#" className="text-green-600 hover:underline">
                        {product.category === 'rau_củ' 
                          ? 'Bún - Gạo - Đậu hạt' 
                          : product.category === 'trái_cây' 
                            ? 'Trái - Cây' 
                            : 'Thực Phẩm Tươi'}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-600 font-medium">SHARE</td>
                    <td className="py-2">
                      <div className="flex gap-4">
                        <a href="#" className="text-gray-600 hover:text-[#3b5998] self-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 320 512">
                            <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                          </svg>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-[#db4a39] self-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 640 512">
                            <path fill="currentColor" d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z" />
                          </svg>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-[#1DA1F2] self-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProductDetail;