import Image from 'next/image';

interface NewsItemProps {
  title: string;
  date: string;
  comments: number;
  excerpt: string;
  imageUrl: string;
  link: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ 
  title, date, comments, excerpt, imageUrl, link 
}) => {
  return (
    <div className="flex border-b border-gray-200 py-4">
      <div className="w-1/3 px-4">
        <a href={link} className="relative group block">
          {/* Ảnh gốc */}
          <Image
            src={imageUrl}
            alt={title}
            width={330}
            height={240}
            className="w-full object-cover p-4 border-[3px] border-[#f1eeea]"
          />
          
          {/* Border top */}
          <span className="absolute top-0 left-0 h-[3px] w-full bg-[#115036] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          
          {/* Border right */}
          <span className="absolute top-0 right-0 w-[3px] h-full bg-[#115036] transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></span>
          
          {/* Border bottom */}
          <span className="absolute bottom-0 left-0 h-[3px] w-full bg-[#115036] transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300"></span>
          
          {/* Border left */}
          <span className="absolute top-0 left-0 w-[3px] h-full bg-[#115036] transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300"></span>
        </a>
      </div>
      <div className="w-2/3 px-4">
        <div className="text-gray-500 text-sm mb-5">
          <span className="mr-4">📅 {date}</span>
          <span>💬 {comments}</span>
        </div>
        <a href={link}>
          <h1 className="text-2xl font-bold mb-5">{title}</h1>
        </a>
        <p className="text-gray-700 mb-5">{excerpt}</p>
        <a href={link} className="text-[#5e5a54]">Read more</a>
      </div>
    </div>
  );
};

export default NewsItem;