"use client"
import { useEffect, useRef, useState } from 'react';
import NewsItem from './NewsItem';
import { newsData, breedingPosts, WormData } from '@/constants/homepage';
import Pagination from '@/components/shared/Pagination';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { useParams } from 'next/navigation';

const ITEMS_PER_PAGE = 5;

interface Post {
  title: string;
  date: string;
  comments: number;
  excerpt: string;
  imageUrl: string;
  link: string;
}

interface ContentConfig {
  data: Post[];
  title: string;
}

interface DataMappingType {
  [key: string]: ContentConfig;
}

const DATA_MAPPING: DataMappingType = 
  {
    'tin-tuc': {
      data: newsData,
      title: 'Tin tức',
    },
    'meo-nau-an': {
      data: breedingPosts,
      title: 'Mẹo nấu ăn',
    },
    'dinh-duong': {
      data: WormData,
      title: 'Dinh dưỡng',
    }
  };

const NewsPage = () => {
  const params = useParams();
  const slug = params.slug as string || 'tin-tuc';

  const [currentPage, setCurrentPage] = useState(1);

  const contentConfig = DATA_MAPPING[slug] || DATA_MAPPING['tin-tuc'];
  const posts = contentConfig.data;

  const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);
  const newsGridRef = useRef<HTMLDivElement>(null);

  const currentNews = posts.slice(
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
    if (newsGridRef.current) {
      const elements = newsGridRef.current.querySelectorAll('.wow');
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
    <div ref={newsGridRef}>
      <AnimatedSection animation="fadeInUp" delay={0.1}>
        <div className="container mx-auto px-4">
          {currentNews.map((news, index) => (
            <div key={index} className="wow fadeInUp" data-wow-delay={`${0.1 + (index * 0.2)}s`}>
              <NewsItem
                title={news.title}
                date={news.date}
                comments={news.comments}
                excerpt={news.excerpt}
                imageUrl={news.imageUrl}
                link={news.link}
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
};

export default NewsPage;