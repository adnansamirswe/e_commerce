import Image from "next/image";
import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <ProductGrid />
    </main>
  )
}
