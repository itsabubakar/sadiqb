import Link from "next/link"

type Props = {}
const Navbar = (props: Props) => {
    return (
        <nav className="flex items-center gap-x-5 max-w-xl ">
            <hr className="w-1/5 flex-2" />
            <ul className="flex justify-between font-headers flex-1 w-full gap-2">
                <li><Link className="active:text-green-500" href={'/'}>Index</Link></li>
                <li><Link href={'/about'}>About</Link></li>
                <li><Link href={'/contact'}>Contact</Link></li>
                <li><Link href={'/contact'}>Resume</Link></li>
            </ul>
            <hr className="w-1/5 flex-2" />
        </nav>
    )
}
export default Navbar