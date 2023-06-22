import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter, Nunito, Nunito_Sans, Orbitron, Roboto, Roboto_Mono } from 'next/font/google'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/Context/ThemeContext'
import AuthProvider from '@/components/AuthProvider'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DevKodes',
  description: 'This is the description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
