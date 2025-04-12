"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Certifications from "@/components/Certifications"
import Responsibilities from "@/components/Responsibilities"
import Contact from "@/components/Contact"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
            className="w-16 h-16 border-t-4 border-white rounded-full"
          />
        </motion.div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Responsibilities />
      <Contact />
      <Footer />
    </main>
  )
}
