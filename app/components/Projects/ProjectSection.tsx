import Project from "./Project"
import Verse from '../../../public/img/verse/verse.png'
import Link from "next/link"

type Props = {}
const ProjectSection = (props: Props) => {
    return (
        <section className="pb-10 ">
            <h2 className="text-2xl font-headers underline decoration-orange-500  decoration-wavy  font-bold underline-offset-8">Selected Projects</h2>

            <div className="pt-8">
                <Project
                    title="Verse"
                    imgSrc={Verse}
                    description="📜 Explore the world of poetry with Verse—a React Native app that brings you captivating poems from the poetrydb API. Styled with NativeWind, every verse is a visual delight. Immerse yourself in the magic of words and emotions with Verse, where poetry meets seamless design. 🌟 "
                    tech={["React Native", "TypeScript"]}
                    githubCode="https://github.com/itsabubakar/verse"

                />
                <Project
                    title="Project Title"
                    imgSrc={Verse}
                    description="The goal of Solsken is to be an effective, usable cross-platform weather app with worldwide support, presenting all information the APIs provide. Mobile use is prioritized heavily, and the UI and UX are built to provide an experience as close to native as possible."
                    tech={["React", "TypeScript"]}
                    githubCode="https://github.com/itsabubakar/verse"
                    liveSite="/"



                />


            </div>
            <Link href={'https://github.com/itsabubakar'} className="py-2 transition duration-200 ease-in decoration-wavy font-headers inline-block  md:text-lg underline hover:decoration-orange-500  text-white rounded-lg  hover:text-orange-500 hover:decoration-wavy underline-offset-[4px]">View all projects</Link>
        </section>
    )
}
export default ProjectSection