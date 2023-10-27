import Image from 'next/image'
import Navbar from './components/Navbar/Navbar'
import BlogSection from './components/Blog/BlogSection'
import ProjectSection from './components/Projects/ProjectSection'

export default function Home() {
  return (
    <main className=''>
      <div className='mx-auto max-w-2xl px-5 md:px-0'>
        <div>
          <h1 className='text-5xl font-bold font-headers pt-10'>Sadiq<span className='text-orange-500 text-5xl'>-</span>B<span className='text-orange-500 text-5xl font-body'>.</span></h1>
          <h2 className='pt-1 text-2xl font-headers'>Full Stack Developer, Kaduna, Nigeria.</h2>
        </div>

        <BlogSection />
        <ProjectSection />

      </div>
    </main>
  )
}
