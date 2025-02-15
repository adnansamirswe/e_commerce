"use client"
import { products } from '@/lib/products'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Filter, SortAsc, Grid3X3 } from 'lucide-react'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('default')

  const categories = ['all', ...new Set(products.map(p => p.category))]

  const filteredProducts = products
    .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      return 0
    })

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-black dark:to-gray-900 pt-24">
      {/* Header */}
      <div className="container py-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        >
          All Products
        </motion.h1>

        {/* Filters and Sorting */}
        <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`capitalize ${
                  selectedCategory === category 
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                    : 'text-gray-700 dark:text-gray-900'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent text-gray-900 dark:text-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 bg-white dark:bg-white"
          >
            <option value="default" className="bg-white text-gray-900">Default</option>
            <option value="price-asc" className="bg-white text-gray-900">Price: Low to High</option>
            <option value="price-desc" className="bg-white text-gray-900">Price: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <Link href={`/products/${product.id}`}>
                <div className="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                  <div className="aspect-square relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-0 group-hover:translate-y-0 transition-transform">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{product.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">${product.price}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-full h-96 bg-purple-500/5 dark:bg-purple-500/10 blur-[120px]" />
        <div className="absolute top-3/4 right-0 w-full h-96 bg-pink-500/5 dark:bg-pink-500/10 blur-[120px]" />
      </div>
    </div>
  )
}
