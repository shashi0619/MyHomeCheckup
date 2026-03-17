import {
  FaHardHat,
  FaPaintRoller,
  FaBolt,
  FaTint,
  FaBuilding,
  FaShieldAlt,
  FaLeaf,
  FaWind,
  FaBug,
} from "react-icons/fa";
import { MdOutlineDoorFront } from "react-icons/md";
import { JSX } from "react";

type Category = {
  icon: JSX.Element;
  title: string;
  items: string[];
  gradient: string;
  iconBg: string;
  number: string;
};

const categories: Category[] = [
  {
    icon: <FaHardHat className="w-6 h-6" />,
    title: "Civil",
    items: ["Splitting & Cracks", "Slope Detection", "Wall Undulations", "Hollow Tiles"],
    gradient: "from-orange-500 to-amber-400",
    iconBg: "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-300",
    number: "01",
  },
  {
    icon: <FaPaintRoller className="w-6 h-6" />,
    title: "Architectural",
    items: ["Exterior & Interior Painting", "Doors & Windows", "Surface Finishes", "Ceiling Heights"],
    gradient: "from-pink-500 to-rose-400",
    iconBg: "bg-pink-100 text-pink-600 dark:bg-pink-500/20 dark:text-pink-300",
    number: "02",
  },
  {
    icon: <FaBolt className="w-6 h-6" />,
    title: "Electrical",
    items: ["Sockets & Switches", "Electrical Safety", "SLD Verification", "Panel Checks"],
    gradient: "from-yellow-500 to-yellow-300",
    iconBg: "bg-yellow-100 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-300",
    number: "03",
  },
  {
    icon: <FaTint className="w-6 h-6" />,
    title: "Plumbing",
    items: ["Faucets & Closets", "Drains & Valves", "Water Pressure", "Seepage & Leakages"],
    gradient: "from-blue-500 to-cyan-400",
    iconBg: "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300",
    number: "04",
  },
  {
    icon: <FaBuilding className="w-6 h-6" />,
    title: "Structural",
    items: ["Walls & Floors", "Joints & Grouting", "Flooring Quality", "Floor Slope"],
    gradient: "from-slate-500 to-gray-400",
    iconBg: "bg-slate-100 text-slate-600 dark:bg-slate-500/20 dark:text-slate-300",
    number: "05",
  },
  {
    icon: <FaShieldAlt className="w-6 h-6" />,
    title: "Safety",
    items: ["Railings & Balconies", "Security Systems", "RERA Verification", "Fire Safety"],
    gradient: "from-red-500 to-rose-400",
    iconBg: "bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-300",
    number: "06",
  },
  {
    icon: <MdOutlineDoorFront className="w-6 h-6" />,
    title: "Woodwork",
    items: ["Cabinets & Cupboards", "Hardware Quality", "Door & Frame Fits", "Finish Quality"],
    gradient: "from-amber-600 to-yellow-400",
    iconBg: "bg-amber-100 text-amber-700 dark:bg-amber-600/20 dark:text-amber-300",
    number: "07",
  },
  {
    icon: <FaBug className="w-6 h-6" />,
    title: "Pest Control",
    items: ["Termite Detection", "Ant & Roach Signs", "Bee & Wasp Nests", "Infestation Risk"],
    gradient: "from-green-500 to-emerald-400",
    iconBg: "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-300",
    number: "08",
  },
  {
    icon: <FaLeaf className="w-6 h-6" />,
    title: "Environmental*",
    items: ["EMF Radiation Check", "Energy Efficiency", "Indoor Air Quality", "Water Potability"],
    gradient: "from-teal-500 to-cyan-400",
    iconBg: "bg-teal-100 text-teal-600 dark:bg-teal-500/20 dark:text-teal-300",
    number: "09",
  },
  {
    icon: <FaWind className="w-6 h-6" />,
    title: "Air & Water*",
    items: ["Indoor Air Quality", "Water Potability", "Dampness Assessment", "Thermographic Scan"],
    gradient: "from-sky-500 to-indigo-400",
    iconBg: "bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-300",
    number: "10",
  },
];

const WhatWeCheck = () => {
  return (
    <section className="pt-16 pb-16 bg-gray-50 dark:bg-gray-950">
      <div className="w-[90%] md:w-[80%] mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm sm:text-base md:text-lg font-bold text-blue-700 dark:text-pink-400 uppercase tracking-widest">
            What We Check
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl mt-3 font-bold text-gray-900 dark:text-white">
            100+ Checks Across 10 Inspection Categories
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
            Our certified inspectors cover every aspect of your home using
            advanced tools—thermal cameras, moisture meters, EMF testers and a
            100+ point checklist.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {categories.map((cat, index) => (
            <div
              key={cat.title}
              data-aos="fade-up"
              data-aos-delay={`${(index % 5) * 80}`}
              data-aos-anchor-placement="top-center"
              className="relative group rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Gradient top bar */}
              <div className={`h-1 w-full bg-linear-to-r ${cat.gradient}`} />

              <div className="p-5">
                {/* Number + Icon row */}
                <div className="flex items-start justify-between mb-4">
                  {/* Icon */}
                  <div className={`flex items-center justify-center w-11 h-11 rounded-xl ${cat.iconBg}`}>
                    {cat.icon}
                  </div>
                  {/* Number badge */}
                  <span className={`text-3xl font-black bg-linear-to-br ${cat.gradient} bg-clip-text text-transparent opacity-30 dark:opacity-40 leading-none`}>
                    {cat.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">{cat.title}</h3>

                {/* Items */}
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-linear-to-br ${cat.gradient}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover gradient glow overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-linear-to-br ${cat.gradient} transition-opacity duration-300 pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-8">
          * Environmental, Radiation, Air &amp; Water checks are available as add-on services.
        </p>
      </div>
    </section>
  );
};

export default WhatWeCheck;
