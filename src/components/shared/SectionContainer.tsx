interface SectionContainerProps {
    children: React.ReactNode;
    className?: string;
}
  
const SectionContainer = ({ children, className = "" }: SectionContainerProps) => {
    return (
      <section className={`py-20 ${className}`}>
        <div className="container mx-auto px-4">
          {children}
        </div>
      </section>
    );
  };

export default SectionContainer;