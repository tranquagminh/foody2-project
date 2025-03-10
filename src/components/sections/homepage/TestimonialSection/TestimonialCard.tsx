import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

interface TestimonialCardProps {
  image: string;
  name: string;
  profession: string;
  comment: string;
  isActive?: boolean;
}

const TestimonialCard = ({ image, name, profession, comment, isActive }: TestimonialCardProps) => {
    return (
      <div className={`
        p-8 pt-12 rounded-lg relative transition-all duration-300 mt-8 
        ${isActive ? 'bg-[#3cb815] text-white scale-105' : 'bg-white scale-95'}
      `}>
        <FontAwesomeIcon 
          icon={faQuoteLeft} 
          className={`
            text-5xl absolute -top-4 left-8 
            ${isActive ? 'text-[#f65005]' : 'text-[#3cb815]'}
          `}
        />
        <p className="mb-6">{comment}</p>
        <div className="flex items-center">
          <Image
            src={image}
            alt={name}
            width={60}
            height={60}
            className="rounded-full"
          />
          <div className="ml-4">
            <h5 className="font-semibold mb-1">{name}</h5>
            <span className={isActive ? 'text-white/80' : 'text-gray-600'}>
              {profession}
            </span>
          </div>
        </div>
      </div>
    );
  };

export default TestimonialCard;