"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success message after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false)
    }, 3000)
  }

  return (
    <section id="contact" ref={ref} className="py-20 bg-gray-900/30 section-padding">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-300 mb-8">
              Feel free to reach out to me for any questions, opportunities, or just to say hello!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-purple-500 bg-black text-purple-500 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <a
                    href="mailto:tdivya514@gmail.com"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    tdivya514@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-purple-500 bg-black text-purple-500 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Phone</h4>
                  <a href="tel:+916266193282" className="text-gray-300 hover:text-purple-400 transition-colors">
                    +91-6266193282
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-purple-500 bg-black text-purple-500 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Location</h4>
                  <p className="text-gray-300">Guna, Madhya Pradesh, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-700 focus:border-purple-500"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-700 focus:border-purple-500"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-700 focus:border-purple-500"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-700 focus:border-purple-500 min-h-[150px]"
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-purple-600 hover:bg-purple-700">
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </div>
                )}
              </Button>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-center mt-2"
                >
                  Message sent successfully!
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
