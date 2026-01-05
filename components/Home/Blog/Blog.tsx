import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div id="blog" className="pt-16 pb-16">
      {/* Heading section */}
      <div className="text-center max-w-5xl mx-auto px-4">
        {/* Subheading */}
        <h2 className="uppercase text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500">
          Latest Blogs & Home Inspection Insights
        </h2>

        {/* Main Heading */}
        <h1 className="text-xl sm:text-3xl md:text-4xl mt-2 font-bold">
          Why Choose MyHomeCheckup Inspection Services?
        </h1>

        {/* SEO Description */}
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
          Discover expert home inspection insights, real site inspection stories,
          and practical tips to protect your property investment. MyHomeCheckup
          helps identify construction defects, poor workmanship, water seepage,
          and safety issues before you take possession of your home.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="w-[80%] mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <div data-aos="fade-right">
          <BlogCard
            image="/images/img1.jpg"
            title="Thorough Home Inspection: Every Nook and Corner Checked by Experts"
            description="Our professional home inspectors examine flooring, walls, plumbing, electrical systems, and finishing quality to ensure your home is safe, compliant, and defect-free."
          />
        </div>

        <div data-aos="fade-right" data-aos-delay="100">
          <BlogCard
            image="/images/img2.jpg"
            title="Identify Hidden Construction Defects Before Property Handover"
            description="Uncover major and minor defects such as wall cracks, leakages, uneven flooring, and poor fittings before final possession and avoid costly repairs later."
          />
        </div>

        <div data-aos="fade-right" data-aos-delay="200">
          <BlogCard
            image="/images/img3.jpg"
            title="Protect Your Property Investment with Verified Quality Checks"
            description="We verify whether the builder or contractor has delivered what was promised, ensuring quality standards, material specifications, and workmanship accuracy."
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
