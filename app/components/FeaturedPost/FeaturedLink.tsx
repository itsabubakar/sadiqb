import Link from "next/link"

type Props = {
    title: string
    date: string
    link: string
}
const FeaturedLink = ({ title, date, link }: Props) => {
    return (
        <li className="flex flex-col py-2">
            <Link className="hover:decoration-wavy hover:underline hover:text-gray-500 transition duration-200 ease-in  font-headers text-2xl hover:decoration-white" href={link}>{title}</Link>
            <span className="font-body text-gray-400">{date}</span>
        </li>
    )
}
export default FeaturedLink