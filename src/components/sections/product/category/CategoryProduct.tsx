import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/constants/homepage'; 
import AnimatedSection from '@/components/shared/AnimatedSection';

const categoryMapping: Record<string, string> = {
    'rau-cu': 'vegetable',
    'trai-cay': 'fruits',
    'thuc-pham-tuoi': 'fresh'
  };

async function CategoryProduct({ params }: { params: Promise<{ category: string }> }) {
    const {category} = await params;
    const categoryValue = categoryMapping[category];
  
  const filteredProducts = categoryValue 
    ? products.filter(product => product.category === categoryValue)
    : [];
  
  if (filteredProducts.length === 0) {
    return <div className="container mx-auto py-8">Không có sản phẩm trong danh mục này</div>;
  }
  return (
    <div className="space-y-9 max-w-6xl mx-auto">
        {filteredProducts.map((product) => (
        <AnimatedSection key={product.id} animation="fadeInUp" delay={0.1}>
        <div className=" rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
            {/* Phần hình ảnh bên trái */}
            <div className="w-full lg:w-1/4 relative h-auto">
            <Link href={`/san-pham/${category}/${product.id}`} className='w-full'>
                <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="object-cover w-full"
                priority
                />
            </Link>
            </div>
            {/* Phần thông tin bên phải */}
            <div className="w-full p-6 flex flex-col justify-between bg-white">
            <div>
                <Link href={`/san-pham/${category}/${product.id}`} className="block mb-2">
                <h2 className="text-2xl font-bold text-gray-800 hover:text-green-600 transition-colors">
                    {product.title}
                </h2>
                </Link>
                
                <div className="mb-4">
                <span className="text-2xl font-bold text-green-700">{product.price.toLocaleString()}đ</span>
                {product.oldPrice && (
                    <span className="ml-2 text-gray-500 line-through">
                    {product.oldPrice.toLocaleString()}đ
                    </span>
                )}
                </div>
                
                <p className="text-gray-600 mb-4">
                Với sản phẩm chất lượng cao, đảm bảo độ tươi ngon và an toàn cho người tiêu dùng.
                </p>
            </div>
            
            <div className="flex items-center gap-2">
                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded uppercase font-medium">
                Add to cart
                </button>
                <button className="border border-gray-300 p-2 rounded hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </button>
            </div>
            </div>
        </div>
        </AnimatedSection>
        ))}
    </div>
  )
}

export default CategoryProduct