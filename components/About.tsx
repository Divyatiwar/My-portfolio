"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 section-padding">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 shadow-lg"
          >
            <p className="text-gray-300 mb-4">
              I am a Computer Science Engineering student at Jaypee University
              of Engineering and Technology, Guna, with a passion for web
              development and programming.
            </p>
            <p className="text-gray-300 mb-4">
              With experience in both web development and Python programming
              through internships at LetsGrowMore and CodeSoft, I have developed
              a strong foundation in creating responsive and functional
              applications.
            </p>
            <p className="text-gray-300">
              I am constantly learning and exploring new technologies to enhance
              my skills and create innovative solutions to real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 shadow-lg hover:border-purple-500 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-purple-400">
                Contact
              </h3>
              <p className="text-gray-300 text-sm">tdivya514@gmail.com</p>
              <p className="text-gray-300 text-sm">+91-6266193282</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 shadow-lg hover:border-purple-500 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-purple-400">
                Location
              </h3>
              <p className="text-gray-300 text-sm">Guna, Madhya Pradesh</p>
              <p className="text-gray-300 text-sm">India</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 shadow-lg hover:border-purple-500 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-purple-400">Degree</h3>
              <p className="text-gray-300 text-sm">
                B.Tech in Computer Science
              </p>
              <p className="text-gray-300 text-sm">CGPA: 8.2 (current)</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 shadow-lg hover:border-purple-500 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-purple-400">
                Interests
              </h3>
              <p className="text-gray-300 text-sm">Web Development</p>
              <p className="text-gray-300 text-sm">Python Programming</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
