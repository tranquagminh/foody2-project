import SectionTitle from '../../../common/SectionTitle';
import BlogCard from './BlogCard';
import { blogs } from '../../../../constants/homepage';
import SectionContainer from '../../../shared/SectionContainer';

const BlogSection = () => {
  return (
    <SectionContainer className="!py-10">
      {/* Section Header */}
      <div className="max-w-[500px] mx-auto mb-16">
          <SectionTitle 
            title="Latest Blog"
            description="Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo."
            className="text-center"
          />
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              title={blog.title}
              author={blog.author}
              date={blog.date}
              delay={blog.delay}
            />
          ))}
        </div>
    </SectionContainer>
  );
};

export default BlogSection;