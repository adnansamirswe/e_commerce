"use client"
import { products } from '@/lib/products'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function ProductGrid() {
  const [buttonText, setButtonText] = useState("Load More Products")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleLoadMore = () => {
    setIsTransitioning(true)
    setButtonText("No More Products Available")
    
    setTimeout(() => {
      setButtonText("Load More Products")
      setIsTransitioning(false)
    }, 2000)
  }

  return (
    <section className="relative min-h-screen w-full bg-white dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-black py-32">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[100px]" />
        <div className="absolute -right-1/4 top-3/4 h-[600px] w-[600px] rounded-full bg-pink-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 font-serif text-4xl font-bold text-gray-900 dark:text-white md:text-7xl">
            Featured Collection
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500" />
        </motion.div>
        
        <div className="mx-auto grid max-w-[2400px] gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <Link href={`/products/${product.id}`} className="block h-full">
                <div className="group relative h-full overflow-hidden">
                  {/* Product Card Background */}
                  <div className="absolute inset-0 bg-gray-100 dark:bg-gradient-to-br dark:from-purple-900/20 dark:to-black rounded-2xl transform transition-transform duration-500 group-hover:scale-105" />
                  
                  {/* Product Image */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                  </div>

                  {/* Product Info */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.2 }}
                    >
                      <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{product.name}</h3>
                      <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-semibold text-gray-900 dark:text-white">${product.price}</span>
                        <span className="rounded-full bg-gray-200/80 dark:bg-white/10 px-4 py-2 text-sm text-gray-900 dark:text-white backdrop-blur-sm transition-colors group-hover:bg-gray-300/80 dark:group-hover:bg-white/20">
                          View Details →
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-600/20 to-pink-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Updated Load More Section */}
        <div className="mt-16 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLoadMore}
            disabled={isTransitioning}
            className="rounded-full bg-gray-900 dark:bg-white/10 px-8 py-3 text-white dark:text-white backdrop-blur-sm transition-all duration-500 hover:bg-gray-800 dark:hover:bg-white/20 disabled:opacity-75"
          >
            <motion.span
              key={buttonText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="inline-block"
            >
              {buttonText}
            </motion.span>
          </motion.button>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        <div className="absolute left-0 top-3/4 h-px w-full bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />
      </div>
    </section>
  )
}
