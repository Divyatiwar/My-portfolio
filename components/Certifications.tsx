"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certificationsData = [
  {
    title: "Machine Learning A-Z,By Python",
    issuer: "Certificate of completion with Udemy",
  },
  {
    title: "Power Bi for beginners",
    issuer: "Certificate of completion with simplilearn",
  },
  {
    title: "Web Development Bootcamp",
    issuer:
      "Certificate of completion the complete 2024 Web Development Certificate",
  },
  {
    title: "Naukri Campus Young Turks",
    issuer: "Certificate of Merit Certificate",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-20 bg-gray-900/30 section-padding"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 shadow-lg hover:border-purple-500 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-purple-500 bg-black text-purple-500 shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">{cert.title}</h3>
                  <p className="text-gray-300">{cert.issuer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
