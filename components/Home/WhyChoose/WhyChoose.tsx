import Image from "next/image";
import { BiSupport } from "react-icons/bi";
import { FaFileAlt, FaThermometerHalf, FaCheckDouble } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

const features = [
  {
    icon: <GrCertificate className="w-7 h-7 text-blue-600" />,
    title: "Certified & Trained Inspectors",
    desc: "Every inspector is professionally trained and certified, ensuring unbiased and accurate assessments.",
  },
  {
    icon: <FaThermometerHalf className="w-7 h-7 text-blue-600" />,
    title: "Advanced Tools & Technology",
    desc: "We use thermographic cameras, moisture meters, slope detectors, and EMF testers for precision.",
  },
  {
    icon: <FaFileAlt className="w-7 h-7 text-blue-600" />,
    title: "Detailed Digital Reports",
    desc: "Photo-backed digital reports with defect severity ratings—easy to share with builders and contractors.",
  },
  {
    icon: <BiSupport className="w-7 h-7 text-blue-600" />,
    title: "Free Post-Inspection Consultation",
    desc: "Our experts guide you on next steps after every inspection until your issues are fully resolved.",
  },
  {
    icon: <FaCheckDouble className="w-7 h-7 text-blue-600" />,
    title: "RERA-Compliant Area Verification",
    desc: "We verify carpet area as mandated by RERA, protecting your investment from builder discrepancies.",
  },
];

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <p className="text-sm sm:text-base md:text-xl font-bold text-blue-700 dark:text-pink-500 uppercase">
            Why Choose MyHomeCheckup?
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl mt-3 font-bold leading-[1.8rem] md:leading-12">
            Inspect Smart. Live Safe.<br />Invest Confidently.
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            We go beyond a visual walkthrough. With advanced tools and a 100+
            point checklist, we leave nothing to chance—so you move in knowing
            exactly what you own.
          </p>

          <div className="mt-4 w-full h-px bg-gray-200 dark:bg-gray-700" />

          <div className="mt-6 space-y-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-5">
                <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-full ring-2 ring-gray-200 dark:ring-gray-700">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold">{f.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Content */}
        <div data-aos="zoom-out" data-aos-anchor-placement="top-center">
          <Image
            src="/images/why2.jpg"
            alt="Why choose MyHomeCheckup home inspection Hyderabad"
            width={800}
            height={800}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
