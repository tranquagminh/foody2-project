interface SectionTitleProps {
    title: string;
    description?: string;
    className?: string;
  }
  
  const SectionTitle = ({ title, description, className = "" }: SectionTitleProps) => {
    return (
      <div className={`wow fadeInUp ${className}`} data-wow-delay="0.1s">
        <div className="flex flex-col gap-1 mb-2">
            <div className={`h-[2px] w-[60px] bg-[#3cb815] ${className == 'text-center' ? 'm-auto' : ''}`}></div>
            <div className={`h-[2px] w-[90px] bg-[#f65005] ${className == 'text-center' ? 'm-auto' : ''}`}></div>
        </div> 
        
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
    );
  };
  
  export default SectionTitle;