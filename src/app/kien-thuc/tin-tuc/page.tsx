
import PageHeader from "@/components/common/PageHeader";
import NewsArticleSection from "@/components/sections/knowledge/news/NewsPage";
import SectionContainer from "@/components/shared/SectionContainer";

const NewsArticle = () => {
    return (
        <>
        <PageHeader 
            title='Tin Tức'
            breadcrumbs={[
                { label: 'Trang chủ', href: '/' },
                { label: 'Kiến thức', href: '/kien-thuc' },
                { label: 'Tin tức', href: '/kien-thuc/tin-tuc', active: true }
            ]}
        />
        <SectionContainer className="!py-0">
            <NewsArticleSection />
        </SectionContainer>
        
        </>
    );
  };
  
  export default NewsArticle;