"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-black dark:to-gray-900 pt-24">
      <div className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-6xl">Get in Touch</h1>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500" />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl bg-gray-50 dark:bg-white/5 p-8 backdrop-blur-sm"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-gray-700 dark:text-white">Name</label>
                <Input className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-gray-700 dark:text-white">Email</label>
                <Input className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white" type="email" />
              </div>
              <div className="space-y-2">
                <label className="text-gray-700 dark:text-white">Message</label>
                <textarea 
                  className="w-full rounded-md bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-3 text-gray-900 dark:text-white"
                  rows={6}
                ></textarea>
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {[
              { icon: MapPin, text: "123 Luxury Ave, Fashion District" },
              { icon: Mail, text: "contact@luxe.com" },
              { icon: Phone, text: "+1 234 567 890" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 text-gray-700 dark:text-white">
                <div className="rounded-full bg-gray-100 dark:bg-white/5 p-4">
                  <item.icon size={24} />
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
