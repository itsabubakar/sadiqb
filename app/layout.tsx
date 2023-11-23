import type { Metadata } from 'next'
import { Karla, Syne } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Analytics } from '@vercel/analytics/react';


const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
});
const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',

});



export const metadata: Metadata = {
  title: 'Sadiq Bilyamin - Full Stack Developer, Kaduna',
  description: "Sadiq Bilyamin's portfolio website",
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`mx-auto max-w-2xl  ${syne.variable} ${karla.variable}`}>
        <header className='pt-10 mx-auto max-w-xl px-8 md:px-0'>
          <Navbar />
        </header>
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
