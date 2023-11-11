import Image, { StaticImageData } from "next/image"
import Link from "next/link"

type Props = {
    title: string
    imgSrc: StaticImageData
    description: string
    tech: string[]
    liveSite?: string
    githubCode: string
}
const Project = ({ title, imgSrc, description, tech, liveSite, githubCode }: Props) => {
    return (
        <div className="flex flex-col sm:flex-row sm:justify-between items-center relative bg-[#252626] py-8 px-10 rounded-lg mb-8">
            <div className="sm:w-1/2 w-full">
                <h2 className="text-2xl font-headers pb-4">{title}</h2>
                <p className="font-body pb-4">{description}</p>
                <div className="flex gap-2">
                    {
                        tech.map((t, i) => (
                            <p key={i} className="text-lg font-body underline decoration-wavy decoration-orange-500 underline-offset-[5px]">{t}</p>
                        ))
                    }
                </div>
                <div className="pt-4 flex gap-2 ">
                    {liveSite && <Link className="decoration-wavy underline font-body hover:text-orange-500 hover:no-underline transition duration-200" href={liveSite}>Visit live site</Link>}
                    <Link className="decoration-wavy underline font-body hover:text-orange-500 hover:no-underline transition duration-200" href={githubCode}>Github code</Link>
                </div>


            </div>
            <div className="pt-8 sm:pt-0">
                <Image
                    unoptimized
                    width={200}
                    height={200}
                    objectFit="cover" className="w-[300px] sm:w-[200px] h-full" src={imgSrc} alt={title} />
            </div>
        </div>
    )
}
export default Project