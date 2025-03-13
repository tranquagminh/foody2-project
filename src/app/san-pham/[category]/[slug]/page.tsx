import { products } from '@/constants/homepage';
import SectionContainer from '@/components/shared/SectionContainer';
import PageHeader from '@/components/common/PageHeader';
import ProductTabs from '@/components/sections/product/productDetail/ProductTabs';
import ProductInfo from '@/components/sections/product/productDetail/ProductInfo';

interface ProductDetailProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

const ProductDetail = async (props: ProductDetailProps) => {
  const { category, slug } = await props.params;

  const product = products.find((p) => p.id === parseInt(slug));
  
  if (!product) {
    return <div>Sản phẩm không tồn tại!</div>;
  }
  
  return (
    <>
      <PageHeader
        title='Sản phẩm'
        breadcrumbs={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Sản phẩm', href: '/san-pham' },
          { label: getCategoryName(category), href: `/san-pham/${category}` },
          { label: product.title, href: `/san-pham/${category}/${slug}`, active: true }
        ]}
      />
      <SectionContainer className='bg-icon-pattern bg-[#f7f8fc] -mt-20'>
        <div className="container mx-auto px-4 py-20">
          <ProductInfo product={product} />
          
          {/* Product Tabs Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <ProductTabs product={product} />
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

// Hàm này giúp hiển thị tên danh mục dễ đọc hơn
function getCategoryName(category: string): string {
  const categoryMap: Record<string, string> = {
    'rau-cu': 'Rau củ',
    'trai-cay': 'Trái cây',
    'do-kho': 'Đồ khô',
    'thuc-pham-tuoi': 'Thực phẩm tươi'
  };
  
  return categoryMap[category] || category;
}

export default ProductDetail;