"use client"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import { useShop } from '@/context/ShopContext'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CartSheet() {
  const { cart, removeFromCart } = useShop()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = () => {
    setIsOpen(false) // Close sheet before navigation
    setTimeout(() => {
      router.push('/checkout')
    }, 300) // Wait for close animation
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-gray-950 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50">
          <div className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-purple-600 text-xs text-white flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white dark:bg-gray-900 w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-gray-900 dark:text-white">Shopping Cart ({cart.length})</SheetTitle>
        </SheetHeader>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col gap-4 py-4"
        >
          {cart.length === 0 ? (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-gray-500 dark:text-gray-400"
            >
              Your cart is empty
            </motion.p>
          ) : (
            cart.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="relative w-20 h-20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    ${item.price} × {item.quantity}
                  </p>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
                >
                  ×
                </Button>
              </motion.div>
            ))
          )}
        </motion.div>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
          <div className="flex justify-between mb-4">
            <span className="text-gray-600 dark:text-gray-400">Total</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              ${total.toFixed(2)}
            </span>
          </div>
          <Button 
            className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
            disabled={cart.length === 0}
            onClick={handleCheckout}
          >
            Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
