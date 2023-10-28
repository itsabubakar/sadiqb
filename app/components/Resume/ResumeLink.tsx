import Link from "next/link"

type Props = {}
const ResumeLink = (props: Props) => {
    return (
        <Link href={'/downloadresume'} className="transition duration-200 ease-in decoration-wavy font-headers inline-block  md:text-lg underline hover:decoration-orange-500  text-white rounded-lg  hover:text-orange-500 hover:decoration-wavy }">View Resume</Link>
    )
}
export default ResumeLink