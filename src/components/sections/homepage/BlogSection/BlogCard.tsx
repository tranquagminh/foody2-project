import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";

interface BlogCardProps {
  image: string;
  title: string;
  author: string;
  date: string;
  delay: number;
  id: number; // Thêm id để tạo link đến trang chi tiết
}

const BlogCard = ({ image, title, author, date, delay, id }: BlogCardProps) => {
  return (
    <div
      className="wow fadeInUp h-full flex flex-col"
      data-wow-delay={`${delay}s`}
    >
      <div className="overflow-hidden relative w-full h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="w-full object-cover object-center hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="bg-[#f7f8fc] p-6 flex flex-col flex-grow">
        <Link
          href={`/blog/${id}`}
          className="block text-xl font-semibold mb-4 hover:text-[#3cb815] transition-colors line-clamp-2 font-lora"
        >
          {title}
        </Link>
        <div className="flex items-center text-gray-500 border-t pt-4 mt-auto">
          <span className="flex items-center mr-6">
            <FontAwesomeIcon icon={faUser} className="text-[#3cb815] mr-2" />
            {author}
          </span>
          <span className="flex items-center">
            <FontAwesomeIcon
              icon={faCalendar}
              className="text-[#3cb815] mr-2"
            />
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
