import type { Metadata } from 'next'
import { Karla, Syne } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});
const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
  display: 'swap',
});



export const metadata: Metadata = {
  title: 'Sadiq Bilyamin',
  description: "Sadiq Bilyamin's personal website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${karla.variable}`}>
        <header className='pt-10 mx-auto max-w-xl px-8 md:px-0'>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
