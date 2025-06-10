"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Jaypee University of Engineering and Technology, Guna",
    year: "2022-Present",
    grade: "CGPA: 8.0 (Current)",
    icon: <GraduationCap size={24} />,
  },
  {
    degree: "Senior Secondary",
    institution: "CBSE Board",
    year: "2022",
    grade: "72%",
    icon: <School size={24} />,
  },
  {
    degree: "Secondary",
    institution: "CBSE Board",
    year: "2020",
    grade: "81%",
    icon: <School size={24} />,
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 bg-gray-900/30 section-padding"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">
          Education
        </h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-purple-500 before:to-transparent">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-500 bg-black text-purple-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                {item.icon}
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-900/50 p-6 rounded-lg border border-gray-800 shadow-lg hover:border-purple-500 transition-all">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-bold text-xl text-white">
                    {item.degree}
                  </h3>
                  <time className="text-sm text-purple-400 font-semibold">
                    {item.year}
                  </time>
                </div>
                <div className="text-gray-300">{item.institution}</div>
                <div className="text-purple-400 font-medium mt-1">
                  {item.grade}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
