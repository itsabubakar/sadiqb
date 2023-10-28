import Link from "next/link"

type Props = {}
const FeaturedLink = (props: Props) => {
    return (
        <li className="flex flex-col py-2">
            <Link className="hover:decoration-wavy hover:underline hover:text-gray-500 transition duration-200 ease-in  font-headers text-lg hover:decoration-white" href={'/blog/first-post'}>lorem Lorem ipsum dolor sit amet consectetur, adipisicing e</Link>
            <span className="font-body text-gray-400">October 20, 2023</span>
        </li>
    )
}
export default FeaturedLink