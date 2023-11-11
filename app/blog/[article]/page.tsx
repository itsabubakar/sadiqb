"use client"

import Link from "next/link"

type Props = {
    params: {
        article: string
    }
}
const page = ({ params }: Props) => {


    return (
        <div>
            <section>
                {/* bread crumbs */}
                <div>

                    <Link href={'/'}>Home</Link> <span>/</span> <Link href={'/'}>Feature flags with React</Link>
                </div>

                {/* Title */}
                <h1>Feature flags with React</h1>

                {/* date and read time */}
                <div>
                    <p>April 30, 2023 /</p>
                    <p>4 min read</p>
                </div>
            </section>
        </div>
    )
}
export default page