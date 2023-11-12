import { Metadata } from 'next'


import Link from "next/link"

type Props = {
    params: {
        article: string
    }
}

export const metadata: Metadata = {
    title: 'Next.js',
}

const page = ({ params }: Props) => {


    return (
        <div className="py-12">
            <section>
                {/* bread crumbs */}
                <div>

                    <Link className="font-headers text-gray-500 hover:text-gray-300 transition duration-200" href={'/'}>Home</Link> <span>/</span> <Link className="font-headers text-gray-300" href={'/'}>Feature flags with React, My first post</Link>
                </div>

                {/* Title */}
                <h1 className="font-headers text-4xl py-2">Feature flags with React</h1>

                {/* date and read time */}
                <div className="flex font-headers gap-2 text-gray-400 items-center">
                    <p>April 30, 2023</p>
                    <p>|</p>
                    <p>4 min read</p>
                </div>
            </section>

            {/* Content */}
            <section className="pt-10 font-body text-gray-300 text-lg">
                <p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vitae hic eaque deleniti pariatur eum temporibus aliquid aut, maxime minima omnis ut placeat saepe corporis iusto necessitatibus velit dolorem repudiandae.</p>
                <p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vitae hic eaque deleniti pariatur eum temporibus aliquid aut, maxime minima omnis ut placeat saepe corporis iusto necessitatibus velit dolorem repudiandae.</p>
                <p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vitae hic eaque deleniti pariatur eum temporibus aliquid aut, maxime minima omnis ut placeat saepe corporis iusto necessitatibus velit dolorem repudiandae.</p>
                <p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vitae hic eaque deleniti pariatur eum temporibus aliquid aut, maxime minima omnis ut placeat saepe corporis iusto necessitatibus velit dolorem repudiandae.</p>
                <p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vitae hic eaque deleniti pariatur eum temporibus aliquid aut, maxime minima omnis ut placeat saepe corporis iusto necessitatibus velit dolorem repudiandae.</p>
            </section>
        </div>
    )
}
export default page