"use client"
import { useState } from 'react';
import NewsItem from './NewsItem';
import { newsData } from '@/constants/homepage';
import Pagination from '@/components/shared/Pagination';
import AnimatedSection from '@/components/shared/AnimatedSection';

const ITEMS_PER_PAGE = 5;

const NewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);
  const currentNews = newsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE);

  return (
    <AnimatedSection animation="fadeInUp" delay={0.1}>
      <div className="container mx-auto px-4">
        {currentNews.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            date={news.date}
            comments={news.comments}
            excerpt={news.excerpt}
            imageUrl={news.imageUrl}
            link={news.link}
          />
        ))}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </AnimatedSection>
  );
};

export default NewsPage;