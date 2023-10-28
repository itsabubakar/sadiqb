import Link from "next/link"

type Props = {}
const BlogLink = (props: Props) => {
    return (
        <li className="flex flex-col py-5">
            <Link className="hover:decoration-wavy hover:underline decoration-orange-500 font-headers text-2xl" href={'/blog/first-post'}>Lorem loremus ipsum dolor sit amet consectetur, adipisicing e</Link>
            <p className="text-gray-300 py-1 text-lg font-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur sequi </p>
            <span className="font-body text-gray-400 text-lg">October 20, 2023</span>
        </li>
    )
}
export default BlogLink