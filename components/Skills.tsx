"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillsData = {
  Programming: [
    "Python",
    "C/C++",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
  ],
  Tools: ["Git/Github", "Packet tracer", "Framer"],
  "Operating Systems": ["Windows", "Linux"],
  "Course Work": [
    "Data Structures Algorithm",

    "Object Oriented Programming",
    "DBMS",
    "Operating System",
    "Computer Network",
  ],
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-20 section-padding">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(
            ([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 shadow-lg hover:border-purple-500 transition-all"
              >
                <h3 className="text-xl font-bold text-purple-400 mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 hover:border-purple-500 hover:bg-gray-700 transition-all"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
}
