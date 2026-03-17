import Image from "next/image";
import { FaShieldAlt, FaCheckCircle, FaStar } from "react-icons/fa";

const stats = [
  { value: "500+", label: "Inspections Done" },
  { value: "100+", label: "Point Checklist" },
  { value: "8+", label: "Categories Checked" },
  { value: "4.9★", label: "Google Rating" },
];

const Hero = () => {
  return (
    <div className="relative bg-gray-50 dark:bg-blue-950 w-full min-h-screen flex justify-center flex-col pt-[12vh]">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #60a5fa 0%, transparent 50%), radial-gradient(circle at 80% 20%, #818cf8 0%, transparent 40%)",
        }}
      />

      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10 py-16">
        {/* Text content */}
        <div data-aos="fade-up">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 dark:bg-blue-900/60 dark:border-blue-700 rounded-full px-4 py-1.5 mb-6">
            <FaShieldAlt className="text-blue-700 dark:text-yellow-300 w-4 h-4" />
            <span className="text-sm font-semibold text-blue-700 dark:text-yellow-300">
              Certified &amp; Trained Inspectors
            </span>
          </div>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-xl font-bold text-gray-500 dark:text-gray-300">
            Your Home, Our Expertise
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl mt-4 mb-5 font-bold text-gray-900 dark:text-white leading-[2.6rem] md:leading-[3.8rem]">
            Hyderabad&apos;s{" "}
            <span className="text-blue-700 dark:text-yellow-300">
              #1 Home Inspection
            </span>
            <br />
            by Certified Experts
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base font-medium md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
            Ensure your dream home is built to the highest standards. Our
            certified inspectors deliver comprehensive civil, electrical,
            plumbing, and safety inspections using advanced tools—so you move
            in with confidence and clarity.
          </p>

          {/* Feature bullets */}
          <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-gray-600 dark:text-gray-300">
            <span className="flex items-center gap-1.5">
              <FaCheckCircle className="text-green-500 shrink-0" />
              Free post-inspection consultation
            </span>
            <span className="flex items-center gap-1.5">
              <FaCheckCircle className="text-green-500 shrink-0" />
              Digital report with photos
            </span>
            <span className="flex items-center gap-1.5">
              <FaCheckCircle className="text-green-500 shrink-0" />
              RERA compliant area checks
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://calendly.com/hitworkhub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 font-bold bg-blue-800 hover:bg-blue-900 dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:text-black text-white rounded-full transition-all duration-300 text-base"
            >
              Book an Inspection
            </a>
            <a
              href="#all-services"
              className="inline-flex items-center justify-center px-7 py-3.5 font-bold text-blue-800 dark:text-white border-2 border-blue-300 dark:border-white/40 rounded-full hover:bg-blue-50 dark:hover:bg-white/10 transition-all duration-300 text-base"
            >
              View All Services
            </a>
          </div>

          {/* Review badge */}
          <div className="mt-8 flex items-center gap-2">
            <div className="flex -space-x-2">
              {["/images/c1.png", "/images/c2.png", "/images/c3.png"].map(
                (src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt="customer"
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-gray-50 dark:border-blue-950 object-cover w-8 h-8"
                  />
                )
              )}
            </div>
            <div className="flex items-center gap-1 text-yellow-500 dark:text-yellow-400">
              <FaStar className="w-4 h-4" />
              <FaStar className="w-4 h-4" />
              <FaStar className="w-4 h-4" />
              <FaStar className="w-4 h-4" />
              <FaStar className="w-4 h-4" />
            </div>
            <span className="text-gray-500 dark:text-gray-300 text-sm font-medium">
              4.9 / 5 — Trusted by 500+ homeowners
            </span>
          </div>
        </div>

        {/* Image Content */}
        <div
          data-aos="fade-down"
          data-aos-delay="150"
          className="mx-auto hidden xl:block"
        >
          <Image
            src="/images/Hero2.png"
            alt="Home Inspection in Hyderabad by MyHomeCheckup"
            width={900}
            height={900}
            priority
          />
        </div>
      </div>

      {/* Stats bar */}
      <div className="w-full bg-blue-50 border-t border-blue-100 dark:bg-blue-900/70 dark:border-blue-800 mt-auto">
        <div className="w-[90%] md:w-[80%] mx-auto py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-yellow-300">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
