import PageHeader from '@/components/common/PageHeader'
import BlogPage from '@/components/sections/knowledge/BlogPage'
import SectionContainer from '@/components/shared/SectionContainer'
import React from 'react'

function KnowledgePage() {
  return (
    <>
      <PageHeader 
          title='Kiến thức'
          breadcrumbs={[
              { label: 'Trang chủ', href: '/' },
              { label: 'Kiến thức', href: '/kien-thuc',active: true }
          ]}
      />
      <SectionContainer className="!py-0">
          <BlogPage />
      </SectionContainer>    
    </>
  )
}

export default KnowledgePage