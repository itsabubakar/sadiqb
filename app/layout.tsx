import type { Metadata } from 'next'
import { Karla, Syne } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar';


const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
});
const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
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
        <div className='pt-10 mx-auto max-w-xl px-3 md:px-0'>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  )
}
