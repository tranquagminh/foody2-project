// components/shared/LazyImage.tsx
"use client"
import Image from 'next/image';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const LazyImage = ({ src, alt, width, height, className = "" }: LazyImageProps) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div ref={elementRef} className={className}>
      {isVisible && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default LazyImage;