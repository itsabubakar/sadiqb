import Link from "next/link"

type Props = {}
const BlogSection = (props: Props) => {
    return (
        <section className="py-10 ">
            <h2 className="text-2xl font-headers underline decoration-orange-500">Featured Posts</h2>
            <ul>
                <li className="flex flex-col">
                    <Link className="font-headers" href={'/blog/first-post'}>lorem Lorem ipsum dolor sit amet consectetur, adipisicing e</Link>
                    <span>October 20, 2023</span>
                </li>

            </ul>
        </section>
    )
}
export default BlogSection