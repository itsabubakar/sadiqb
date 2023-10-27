import Link from "next/link"

type Props = {}
const BlogSection = (props: Props) => {
    return (
        <section className="py-10 ">
            <h2 className="text-2xl font-headers underline decoration-orange-500  decoration-wavy  font-bold">Featured Posts</h2>
            <ul>
                <li className="flex flex-col py-2">
                    <Link className="hover:decoration-wavy hover:underline decoration-orange-500 font-headers text-lg" href={'/blog/first-post'}>lorem Lorem ipsum dolor sit amet consectetur, adipisicing e</Link>
                    <span className="font-body text-gray-400">October 20, 2023</span>
                </li>
                <li className="flex flex-col py-2">
                    <Link className="hover:decoration-wavy hover:underline decoration-orange-500 font-headers text-lg" href={'/blog/first-post'}>lorem Lorem ipsum dolor sit amet consectetur, adipisicing e</Link>
                    <span className="font-body text-gray-400">October 20, 2023</span>
                </li>
                <li className="flex flex-col py-2">
                    <Link className="hover:decoration-wavy hover:underline decoration-orange-500 font-headers text-lg" href={'/blog/first-post'}>lorem Lorem ipsum dolor sit amet consectetur, adipisicing e</Link>
                    <span className="font-body text-gray-400">October 20, 2023</span>
                </li>
                <li className="flex flex-col py-2">
                    <Link className="hover:decoration-wavy hover:underline decoration-orange-500 font-headers text-lg" href={'/blog/first-post'}>lorem Lorem ipsum dolor sit amet consectetur, adipisicing e</Link>
                    <span className="font-body text-gray-400">October 20, 2023</span>
                </li>


            </ul>
        </section>
    )
}
export default BlogSection