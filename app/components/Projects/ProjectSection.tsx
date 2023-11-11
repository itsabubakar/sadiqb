import Project from "./MobileProject"
import Verse from '../../../public/img/verse/verse.png'
import Idyllic from '../../../public/img/idyllic/idyllic.png'
import Jag from '../../../public/img/jag/jag.png'
import Link from "next/link"
import WebProject from "./WebProject"

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
                <WebProject
                    title="Idyllic Ui"
                    imgSrc={Idyllic}
                    description="Idyllic UI Framework seamlessly marries Tailwind CSS simplicity with Chakra UI-inspired React components. Developers can effortlessly integrate and customize reusable components, and the best part—no need for imports, you can just copy and paste to enhance your development experience."
                    tech={["React", "TypeScript"]}
                    githubCode="https://github.com/itsabubakar/idyllic-ui-doc"
                    liveSite="https://idyllic-ui-doc.vercel.app/"
                />

                <WebProject
                    title="Joshua Akubo Gabriel"
                    imgSrc={Jag}
                    description="A visual masterpiece that  blending aesthetics and functionality. With an intuitive design, easy navigation leads you through his dynamic expressions and rich cultural tapestry. Carefully curated images provide a vivid showcase of his performances and artistic collaborations. A website celebrating culture and movement, offering a glimpse into the profound spirit of Joshua's artistic journey."
                    tech={["React", "tailwindcss"]}
                    // githubCode="https://github.com/itsabubakar/idyllic-ui-doc"
                    liveSite="jakubog.com"
                />


            </div>
            <Link href={'https://github.com/itsabubakar'} className="py-2 transition duration-200 ease-in decoration-wavy font-headers inline-block  md:text-lg underline hover:decoration-orange-500  text-white rounded-lg  hover:text-orange-500 hover:decoration-wavy underline-offset-[4px]">View all projects</Link>
        </section>
    )
}
export default ProjectSection