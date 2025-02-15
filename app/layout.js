import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'
import { ShopProvider } from '@/context/ShopContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Luxe Store | Premium Shopping Experience',
  description: 'Premium shopping experience for luxury products',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body className={`${inter.className} min-h-screen bg-white text-black`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ShopProvider>
            <Navbar />
            {children}
            <Footer />
          </ShopProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
