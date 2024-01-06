import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Show Time',
  description: 'Show Time created by apanwar2@stevens.edu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

      {/* Header  */}
      <Header/>

      {/* Navbar */}

      {/* SearchBox */}
      {children}
      </body>
    </html>
  )
}
