"use client"
import { useEffect, useRef, useState } from 'react';
import NewsItem from './news/NewsItem'; 
import Pagination from '@/components/shared/Pagination';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { blogPosts } from '@/constants/homepage'; 

const ITEMS_PER_PAGE = 5;

function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / ITEMS_PER_PAGE);
  const blogGridRef = useRef<HTMLDivElement>(null); const currentPosts = blogPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('wowjs').then((WOW) => {
        const wow = new WOW.WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: true,
          live: true
        });
        wow.init();
      });
    }
  }, []);

  useEffect(() => {
    if (blogGridRef.current) {
      const elements = blogGridRef.current.querySelectorAll('.wow');
      elements.forEach(element => {
        (element as HTMLElement).style.visibility = 'hidden';
        element.classList.remove('animated');
        void (element as HTMLElement).offsetWidth; // Trigger reflow
        (element as HTMLElement).style.visibility = 'visible';
        element.classList.add('animated');
      });
    }
  }, [currentPage]);

  return (
    <div ref={blogGridRef}>
      <AnimatedSection animation="fadeInUp" delay={0.1}>
        <div className="container mx-auto px-4">
          {currentPosts.map((post, index) => (
            <div key={index} className="wow fadeInUp" data-wow-delay={`${0.1 + (index * 0.2)}s`}>
              <NewsItem
                title={post.title}
                date={post.date}
                comments={post.comments}
                excerpt={post.excerpt}
                imageUrl={post.imageUrl}
                link={post.link}
              />
            </div>
          ))}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </AnimatedSection>
    </div>
  );
}

export default BlogPage;