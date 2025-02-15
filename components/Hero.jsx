"use client"
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const images = [
    "https://cdn.pixabay.com/photo/2017/10/25/14/41/makeup-2888141_960_720.jpg",
    "https://cdn.pixabay.com/photo/2019/12/23/01/16/eyeliner-4713577_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/11/11/18/53/fashion-2940038_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/01/02/17/38/bouquet-4736413_1280.jpg"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-700 dark:bg-black">
      {/* Background Images */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt="Luxury Products"
            fill
            className="object-cover opacity-30 dark:opacity-50"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex 
                ? 'w-8 bg-white' 
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-screen items-center">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h1 className="mb-6 font-serif text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-7xl">
              Redefining
              <span className="mt-2 block bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Luxury Living
              </span>
            </h1>
            <p className="mb-8 text-lg text-gray-900 dark:text-gray-300">
              Curated collections that transcend ordinary aesthetics
            </p>
            <div className="flex gap-4">
              <Button className="group relative h-12 overflow-hidden rounded-full bg-white px-8 text-black transition-all hover:bg-white/90">
                <span className="relative z-10">Explore Collection</span>
                <div className="absolute inset-0 -z-0 scale-x-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300 group-hover:scale-x-100" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-500/60 dark:text-white/60">Scroll to explore</span>
          <div className="h-12 w-[1px] animate-pulse bg-gradient-to-b from-gray-500/60 dark:from-white/60 to-transparent" />
        </div>
      </motion.div>
    </div>
  )
}
