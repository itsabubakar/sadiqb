import Image from 'next/image'
import Navbar from './components/Navbar/Navbar'
import BlogSection from './components/Blog/BlogSection'
import ProjectSection from './components/Projects/ProjectSection'
import ResumeLink from './components/Resume/ResumeLink'

export default function Home() {
  return (
    <main className=''>
      <div className='mx-auto max-w-2xl px-5 md:px-0'>
        <div>
          <h1 className='text-5xl font-bold font-headers pt-10'>Sadiq<span className='text-orange-500 text-5xl'>-</span>B<span className='text-orange-500 text-5xl font-body'>.</span></h1>
          <h2 className='pt-1 text-2xl font-headers'>Full Stack Developer, Kaduna, Nigeria.</h2>
          <p className='font-body text-lg'>I develop web apps & mobile apps with a focus on good design, accessibility, and great user experience.</p>

          <div className="py-2">


            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos odio nobis architecto, enim dignissimos, vero omnis unde quae officia consequatur incidunt obcaecati sapiente tempora saepe fugiat nemo laborum ipsum maxime?</p>
            <ResumeLink />
          </div>
        </div>

        <BlogSection />
        <ProjectSection />

      </div>
    </main>
  )
}
