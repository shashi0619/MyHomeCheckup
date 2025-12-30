import React from "react";
import ServiceCard from "./ServiceCard";
import ServiceCard2 from "./ServiceCard2";
import ServiceCard3 from "./ServiceCard3";
import ServiceCard4 from "./ServiceCard4";
import ServiceCard5 from "./ServiceCard5";
import ServiceCard6 from "./ServiceCard6";

const Services = () => {
  return (
    <div id="all-services"  className="pt-16 pb-16">
      <div className="w-[80%] mx-auto">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500 uppercase">
              What we provide
            </h1>
            <h1 className="text-xl sm:text-3xl md:text-4xl mt-1 font-bold">
              End-to-End Home Inspection Services by Professionals
            </h1>
          </div>
          <div className="lg:ml-auto">
            <a
              href="#_"
              className="w-full py-4 text-base sm:text-lg md:text-xl text-center text-white transition-colors font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-900 ease px-9 md:w-auto "
            >
              All Services
            </a>
          </div>
        </div>
        {/* Services card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mt-16">
          <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <ServiceCard
              image="/images/ss1.png"
              title="Complete Home Inspection"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
          >
            <ServiceCard2
              image="/images/ss2.png"
              title="Structural & Civil Checks"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
          >
            <ServiceCard3
              image="/images/ss3.png"
              title="Plumbing & Water Systems"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <ServiceCard4
              image="/images/ss4.png"
              title="Electrical & Safety Checks"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="400"
          >
            <ServiceCard5
              image="/images/ss7.png"
              title="HVAC & Appliances Check"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="500"
          >
            <ServiceCard6
              image="/images/ss5.png"
              title="Pest & Termite Inspection"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
