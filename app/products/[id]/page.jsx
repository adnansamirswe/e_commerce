"use client"
import { products } from '@/lib/products'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowLeft, Heart, Share2, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useShop } from '@/context/ShopContext'

export default function ProductPage({ params }) {
  const { addToCart, toggleWishlist, isInWishlist } = useShop()
  const product = products.find(p => p.id === parseInt(params.id))
  
  if (!product) return <div>Product not found</div>

  const isLiked = isInWishlist(product.id)

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-black dark:to-gray-900">
      {/* Navigation */}
      <div className="container pt-28">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          Back to collection
        </Link>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square relative overflow-hidden rounded-2xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -z-10 inset-0 blur-3xl scale-110 opacity-30 bg-gradient-to-r from-purple-600 to-pink-600" />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{product.name}</h1>
              <p className="text-2xl text-purple-400">${product.price}</p>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Actions */}
            <div className="flex gap-4 items-center">
              <Button 
                size="lg" 
                onClick={() => addToCart(product)}
                className="flex-1 h-14 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90"
              >
                Add to Cart
                <ShoppingCart className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => toggleWishlist(product)}
                className={`h-14 w-14 p-0 ${isLiked ? 'text-red-500 border-red-500' : ''}`}
              >
                <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
              </Button>
              <Button size="lg" variant="outline" className="h-14 w-14 p-0">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Additional Details */}
            <div className="mt-8 grid gap-6">
              <div className="border-t border-gray-800 pt-6">
                <h3 className="text-lg font-semibold text-white mb-4">Product Details</h3>
                <ul className="grid gap-3 text-gray-400">
                  <li className="flex justify-between">
                    <span>Category</span>
                    <span className="text-white capitalize">{product.category}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Availability</span>
                    <span className="text-green-400">In Stock</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="container py-20">
        <h2 className="text-2xl font-bold text-white mb-8">Similar Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map(similarProduct => (
              <Link 
                key={similarProduct.id}
                href={`/products/${similarProduct.id}`}
                className="group block"
              >
                <div className="aspect-square relative overflow-hidden rounded-xl">
                  <Image
                    src={similarProduct.image}
                    alt={similarProduct.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold">{similarProduct.name}</h3>
                    <p className="text-gray-300">${similarProduct.price}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
