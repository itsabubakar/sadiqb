import Link from "next/link"
import FeaturedLink from "../FeaturedPost/FeaturedLink"

type Props = {}
const BlogSection = (props: Props) => {
    return (
        <section className="py-10 ">
            <h2 className="text-2xl font-headers underline decoration-orange-500  decoration-wavy  font-bold underline-offset-8">Featured Posts</h2>
            <ul>
                <FeaturedLink
                    title={'My developer toolbox 2023'}
                    date={'November 23, 2023'}
                    link={'/blog/my-developer-toolbox-2023'}
                />
                <Link href={'/blog'} className="py-2 transition duration-200 ease-in decoration-wavy font-headers inline-block  md:text-lg underline hover:decoration-orange-500  text-white rounded-lg  hover:text-orange-500 hover:decoration-wavy underline-offset-[4px]">View all posts</Link>
            </ul>
        </section>
    )
}
export default BlogSection