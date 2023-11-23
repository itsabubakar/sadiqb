import Link from "next/link"
import BlogLink from "../components/Blog/BlogLink"
import FeaturedLink from "../components/FeaturedPost/FeaturedLink"

type Props = {}
const page = (props: Props) => {
    return (
        <section className="py-10 px-5 md:px-0 ">
            <h2 className="text-2xl font-headers underline decoration-orange-500  decoration-wavy  font-bold pb-10 pt-4 underline-offset-8">Blog Posts</h2>
            <ul>
                <FeaturedLink
                    title={'My developer toolbox 2023'}
                    date={'November 23, 2023'}
                    link={'/blog/my-developer-toolbox-2023'}
                />
            </ul>
        </section>
    )
}
export default page