import Link from "next/link"
import Experience from "../components/Resume/Experience"
import ResumeLink from "../components/Resume/ResumeLink"

type Props = {}
const page = (props: Props) => {
    return (
        <div className="py-10 px-5 md:px-0">
            <section>
                <h2 className="text-2xl font-headers underline decoration-orange-500 underline-offset-8  decoration-wavy  font-bold pb-10 pt-4">Resume</h2>
                {/* 
                small about
                download resume
                experience
                skills
            */}
                <p className="font-body text-lg">Hello! I&apos;m Sadiq Bilyamin, and I&apos;m thrilled to share a bit about myself with you. For the past two years, I&apos;ve been exploring the ins and outs of React.</p>
                <p className="font-body text-lg pt-4">Diving into the world of databases, I&apos;m comfortable dancing between SQL and NoSQL, ensuring a well-rounded approach to handling data.</p>
                <p className="font-body text-lg pt-4">I have experience building backend with Express js, the popular Node js frame work.</p>
                <p className="font-body text-lg pt-4">I&apos;ve recently added PHP to my toolkit, opening up new possibilities in my coding adventures.</p>
                <p className="font-body text-lg pt-4">When it comes to the mobile scene, you can find me in the groove of React Native, shaping user experiences that are both smooth and exciting. I love to read and enjoy getting lost in a good book.</p>
                <div className="py-2">
                    <ResumeLink />
                </div>
                <h3 className="text-xl font-headers underline decoration-orange-500  decoration-wavy  font-semibold py-3 underline-offset-4">What I do</h3>
                <ul>
                    <li className="font-body text-gray-300">Web and mobile app development</li>
                    <li className="font-body text-gray-300">UI Development</li>
                    <li className="font-body text-gray-300">UX Thinking & Research</li>
                </ul>


            </section>

            <Experience />
        </div>
    )
}
export default page