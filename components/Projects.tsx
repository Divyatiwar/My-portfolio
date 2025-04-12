"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projectsData = [
  {
    title: "DevMeet",
    description: "A developer networking platform",
    image: "/assets/devmeet.jpeg",
    technologies: ["Next.js", "Supabase", "Prisma"],
    details: [
      "Developed a full-stack application using Next.js (frontend) and Supabase with Prisma (backend).",
      "Implemented authentication, real-time database updates, and optimized API calls for better performance.",
    ],
    github: "https://github.com/Divyatiwar/DevMeet",
    demo: "",
  },
  {
    title: "Weather Forecast App",
    description:
      "This provides real-time weather updates and a 5-day forecast for any city.",
    image: "/assets/weather.jpg",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
    details: [
      "Used HTML, CSS, React, Javascript for web pages.",
      "Integrated Weather API for fetching live weather details.",
    ],
    github: "https://github.com/Divyatiwar/Weather_Forcaste_App",
    demo: "https://weather-c6staosnk-divyatiwars-projects.vercel.app/",
  },
  {
    title: "Crop Recommendation System",
    description:
      "An AI-powered system for suggesting optimal crops based on soil and environmental conditions",
    image: "/assets/farm.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Machine Learning"],
    details: [
      "Used HTML, CSS, and JS for frontend of web interface",
      "Integrated logistic regression to train machine learning model to predict the best crop.",
    ],
    github: "https://github.com/Divyatiwar/Crop_Recommendation",
    demo: "",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-gray-900/30 section-padding"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900/50 rounded-lg border border-gray-800 shadow-lg overflow-hidden hover:border-purple-500 transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4 text-sm">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>

                <div className="flex gap-3 mt-4">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-purple-500 text-white hover:bg-purple-500/20"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="mr-2" />
                      GitHub
                    </a>
                  </Button>
                  {project.demo && (
                    <Button
                      asChild
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
