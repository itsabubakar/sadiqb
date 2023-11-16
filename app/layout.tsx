import type { Metadata } from 'next'
import { Karla, Syne } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


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
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="../public/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon/favicon-16x16.png" />
        <link rel="manifest" href="../public/favicon//site.webmanifest" />
      </head>
      <body className={`mx-auto max-w-2xl  ${syne.variable} ${karla.variable}`}>
        <header className='pt-10 mx-auto max-w-xl px-8 md:px-0'>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
