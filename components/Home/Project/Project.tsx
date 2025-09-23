import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500 uppercase">
              LATEST WORKS
            </h1>
            <h1 className="text-xl sm:text-3xl md:text-4xl mt-1 font-bold">
              Driving Change with Innovative Successful Projects
            </h1>
          </div>
          <div className="lg:ml-auto">
            <a
              href="#_"
              className="w-full py-4 text-base sm:text-lg md:text-xl text-center text-white transition-colors font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-900 ease px-9 md:w-auto "
            >
              All Projects
            </a>
          </div>
        </div>
        {/* project images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
            <Image src="/images/H6.png" alt="image" width={600} height={600} />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
          >
            <Image src="/images/H5.png" alt="image" width={600} height={600} />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
          >
            <Image src="/images/H3.JPG" alt="image" width={600} height={600} />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <Image src="/images/H4.JPG" alt="image" width={600} height={600} />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="400"
          >
            <Image src="/images/H5.png" alt="image" width={600} height={600} />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="500"
          >
            <Image src="/images/H6.png" alt="image" width={600} height={600} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
