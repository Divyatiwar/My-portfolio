"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    position: "Data Analytics Intern",
    company: "Yoshops",
    period: "May 2025- Current",
    type: "Remote",
    description: [
      "Working on real time data to clean,data minning,analysis and",
      "understanding through creating dashboards by using powerbi tool.",
    ],
  },
  {
    position: "Python Programming Intern",
    company: "CodeSoft",
    period: "June 2024 - July 2024",
    type: "Virtual",
    description: [
      "Executed three small projects related to Python, GUI",
      "Developed the skills of Python Programming",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-20 section-padding">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">
          Experience
        </h2>

        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 shadow-lg hover:border-purple-500 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-500 bg-black text-purple-500 shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white">
                      {item.position}
                    </h3>
                    <p className="text-purple-400">{item.company}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-gray-300">{item.period}</div>
                  <div className="text-gray-400 text-sm">{item.type}</div>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
