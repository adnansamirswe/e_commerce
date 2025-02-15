"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative bg-gray-100 dark:bg-black text-gray-900 dark:text-white">
      {/* Newsletter Section */}
      <div className="border-t border-gray-200 dark:border-white/10">
        <div className="container py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold mb-2"
              >
                Subscribe to our newsletter
              </motion.h3>
              <p className="text-gray-400">Stay updated with new products and exclusive offers.</p>
            </div>
            <div className="flex items-center gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="h-12 bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
              <Button className="h-12 px-8 bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-white/90 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">LUXE</h2>
            <p className="text-gray-400 mb-6">Curated luxury for the discerning customer.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Products', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-3">
              {['Fragrances', 'Footwear', 'Jewelry', 'Accessories'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} /> 123 Luxury Ave, Fashion District
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} /> contact@luxe.com
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} /> +1 234 567 890
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col items-center gap-4 text-sm text-gray-400 md:flex-row md:justify-between">
            <p>© 2024 LUXE. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-purple-950/20 to-transparent" />
      </div>
    </footer>
  )
}
