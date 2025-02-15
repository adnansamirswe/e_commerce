"use client"
import { useShop } from '@/context/ShopContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CreditCard } from 'lucide-react'

export default function CheckoutPage() {
  const { cart } = useShop()
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10
  const total = subtotal + shipping

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-black dark:to-gray-900 pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container py-16 text-center"
        >
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your cart is empty</h1>
          <Link href="/products">
            <Button>Continue Shopping</Button>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-black dark:to-gray-900 pt-24">
      <div className="container py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ x: -20 }}
            animate={{ x: 0 }}
          >
            <Link 
              href="/products"
              className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Continue Shopping
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Checkout Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Shipping Information</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" className="bg-white dark:bg-white/5" />
                    <Input placeholder="Last Name" className="bg-white dark:bg-white/5" />
                  </div>
                  <Input placeholder="Email" type="email" className="bg-white dark:bg-white/5" />
                  <Input placeholder="Address" className="bg-white dark:bg-white/5" />
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="City" className="bg-white dark:bg-white/5" />
                    <Input placeholder="Postal Code" className="bg-white dark:bg-white/5" />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Payment Method</h2>
                <div className="space-y-4">
                  <Input placeholder="Card Number" className="bg-white dark:bg-white/5" />
                  <div className="grid grid-cols-3 gap-4">
                    <Input placeholder="MM/YY" className="bg-white dark:bg-white/5" />
                    <Input placeholder="CVC" className="bg-white dark:bg-white/5" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:pl-8"
            >
              <div className="rounded-2xl bg-gray-50 dark:bg-white/5 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  {cart.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="relative h-20 w-20 overflow-hidden rounded-lg">
                        <Image 
                          src={item.image} 
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-900 dark:text-white font-medium">{item.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400">Quantity: {item.quantity}</p>
                        <p className="text-gray-900 dark:text-white">${item.price * item.quantity}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-2 text-gray-900 dark:text-white">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 dark:border-white/10 pt-2 font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Button 
                  className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90"
                  size="lg"
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Place Order
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
