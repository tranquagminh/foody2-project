import { useEffect, useState } from "react";

export const useSlider = (slidesLength: number, interval = 5000) => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev === slidesLength - 1 ? 0 : prev + 1));
      }, interval);
  
      return () => clearInterval(timer);
    }, [slidesLength, interval]);
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === slidesLength - 1 ? 0 : prev + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? slidesLength - 1 : prev - 1));
    };
  
    return { currentSlide, nextSlide, prevSlide };
};