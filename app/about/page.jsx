"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-black dark:to-gray-900 pt-24"> {/* Changed pt-32 to pt-24 */}
      <div className="container py-16"> {/* Changed py-32 to py-16 */}
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-6xl">Our Story</h1>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500" />
        </motion.div>

        {/* Content Sections */}
        <div className="grid gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid items-center gap-8 md:grid-cols-2"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="https://cdn.pixabay.com/photo/2017/03/29/04/47/high-heels-2184095_1280.jpg"
                alt="Luxury Store"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Luxury Redefined</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Since our establishment in 2010, LUXE has been at the forefront of luxury retail, 
                offering an unparalleled selection of premium products from world-renowned brands.
              </p>
            </div>
          </motion.div>

          {/* Values Section */}
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: 'Quality', desc: 'Only the finest materials and craftsmanship' },
              { title: 'Elegance', desc: 'Timeless design meets modern sophistication' },
              { title: 'Service', desc: 'Personalized attention to every detail' }
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm"
              >
                <h3 className="mb-2 text-xl font-bold text-white">{value.title}</h3>
                <p className="text-gray-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
