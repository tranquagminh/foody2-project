import PageHeader from '@/components/common/PageHeader'
import ProductSection from '@/components/sections/homepage/ProductSection/ProductSection'
import TestimonialSection from '@/components/sections/homepage/TestimonialSection/TestimonialSection'
import VisitSection from '@/components/sections/homepage/VisitSection/VisitSection'
import React from 'react'

function ProductPage() {
  return (
    <>
        <PageHeader 
        title="Sản phẩm" 
        breadcrumbs={[
            { label: 'Trang chủ', href: '/' },
            { label: 'Sản phẩm', href: '/san-pham', active: true }
        ]}
        />
        <ProductSection />
        <VisitSection  />
        <TestimonialSection />
    </>
  )
}

export default ProductPage