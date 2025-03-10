import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';

interface BlogCardProps {
  image: string;
  title: string;
  author: string;
  date: string;
  delay: number;
}

const BlogCard = ({ image, title, author, date, delay }: BlogCardProps) => {
  return (
    <div className="wow fadeInUp" data-wow-delay={`${delay}s`}>
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="bg-[#f7f8fc] p-6">
        <Link 
          href="#" 
          className="block text-xl font-semibold mb-4 hover:text-[#3cb815] transition-colors line-clamp-2 font-lora"
        >
          {title}
        </Link>
        <div className="flex items-center text-gray-500 border-t pt-4">
          <span className="flex items-center mr-6">
            <FontAwesomeIcon icon={faUser} className="text-[#3cb815] mr-2" />
            {author}
          </span>
          <span className="flex items-center">
            <FontAwesomeIcon icon={faCalendar} className="text-[#3cb815] mr-2" />
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;