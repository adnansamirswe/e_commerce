"use client"
import { ShoppingCart, Menu, Search, ChevronDown } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from './theme-toggle'
import Link from 'next/link'
import CartSheet from './CartSheet'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const categories = [
    'Fragrances',
    'Footwear',
    'Jewelry',
    'Accessories'
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed left-0 right-0 top-0 z-50 bg-white/5 dark:bg-black/5 backdrop-blur-md border-b border-white/10"
      >
        <div className="container">
          <div className="flex h-20 items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center gap-4 sm:gap-8">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-gray-950 dark:text-white md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-white dark:bg-gray-900">
                  <div className="flex flex-col gap-6 mt-8">
                    {['Home', 'Products', 'About', 'Contact'].map((item) => (
                      <Link
                        key={item}
                        href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                        className="text-lg font-medium text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400"
                      >
                        {item}
                      </Link>
                    ))}
                    <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Categories</p>
                      {categories.map((category) => (
                        <Link
                          key={category}
                          href={`/products?category=${category.toLowerCase()}`}
                          className="block py-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              <Link href="/" className="text-2xl font-bold text-gray-950 dark:text-white">
                LUXE
              </Link>
            </div>

            {/* Center Section - Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className={`text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${
                  pathname === '/' ? 'text-purple-300 dark:text-purple-400' : 'text-gray-950 dark:text-gray-300'
                }`}
              >
                Home
              </Link>
              <div 
                className="relative group h-20 flex items-center"
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                <Link
                  href="/products"
                  className={`text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1 ${
                    pathname === '/products' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-950 dark:text-gray-300'
                  }`}
                >
                  Products <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </Link>

                <div 
                  className={`absolute top-[calc(100%-20px)] left-0 w-56 overflow-hidden transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="pt-4"> {/* Added padding to extend hoverable area */}
                    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-xl shadow-xl py-3 border border-gray-200/20 dark:border-white/10">
                      <div className="relative">
                        {/* Decorative top line */}
                        <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
                        
                        {categories.map((category, idx) => (
                          <Link
                            key={category}
                            href={`/products?category=${category.toLowerCase()}`}
                            className="relative block px-6 py-2.5 text-sm text-gray-950 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group/item"
                          >
                            <span className="relative z-10 flex items-center justify-between">
                              {category}
                              <span className="opacity-0 group-hover/item:opacity-100 transition-opacity text-purple-500">
                                →
                              </span>
                            </span>
                            <div className="absolute inset-0 bg-purple-100 dark:bg-purple-900/20 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </Link>
                        ))}

                        {/* Decorative bottom line */}
                        <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href="/about"
                className={`text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${
                  pathname === '/about' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-950 dark:text-gray-300'
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${
                  pathname === '/contact' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-950 dark:text-gray-300'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-950 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50"
              >
                <Search className="h-5 w-5" />
              </Button>
              <ThemeToggle />
              <CartSheet />
            </div>
          </div>
        </div>
      </motion.header>
    </>
  )
}
