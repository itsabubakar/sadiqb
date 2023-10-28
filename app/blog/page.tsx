import Link from "next/link"
import BlogLink from "../components/Blog/BlogLink"

type Props = {}
const page = (props: Props) => {
    return (
        <section className="py-10 px-5 md:px-0 ">
            <h2 className="text-2xl font-headers underline decoration-orange-500  decoration-wavy  font-bold pb-10 pt-4">Blog Posts</h2>
            <ul>
                <BlogLink />
                <BlogLink />
                <BlogLink />
                <BlogLink />
                <BlogLink />

            </ul>
        </section>
    )
}
export default page