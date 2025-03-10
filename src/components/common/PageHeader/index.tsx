import Link from 'next/link';
import AnimatedSection from '../../shared/AnimatedSection';

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: Breadcrumb[];
}

const PageHeader = ({ title, breadcrumbs }: PageHeaderProps) => {
  return (
    <div className="relative bg-page-header bg-[#F7F8FC] mb-20 pt-45 pb-24 overflow-hidden">
      <div className="px-12 mx-auto">
        <AnimatedSection 
          animation="fadeIn" 
          delay={0.1}
          className="text-left"
        >
          <h1 className="text-6xl font-bold mb-6">{title}</h1>
          
          <nav className="flex justify-start">
            <ol className="flex items-center space-x-2">
              {breadcrumbs.map((item, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                  {item.active ? (
                    <span className="text-[#3cb815]">{item.label}</span>
                  ) : (
                    <Link 
                      href={item.href}
                      className="text-gray-600 hover:text-[#3cb815] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default PageHeader;