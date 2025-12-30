import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div id="blog" className="pt-16 pb-16">
      {/* Heading section */}
      <div className="text-center">
        {/* subheading */}
        <h1 className="uppercase text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500">
          Latest Blog
        </h1>
        {/* Heading */}
        <h1 className="text-xl sm:text-3xl md:text-4xl mt-1 font-bold">
          Why Choose MyHomeCheckup
          Inspection Services?<br /> Expert insights, real inspection stories, and tips to help you protect your home investment.
        </h1>
        
      </div>
      <div className="w-[80%] mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <div data-aos="fade-right">
          <BlogCard
            image="/images/img1.jpg"
            title="Every nook and corner of your home by a MyHomeCheckup expert"
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="100">
          <BlogCard
            image="/images/img2.jpg"
            title="Significant defects before you take possession of your property"
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="200">
          <BlogCard
            image="/images/img3.jpg"
            title="Your investment by verifying what has been promised by the builder/contractor"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
