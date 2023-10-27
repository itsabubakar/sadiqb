"use client"
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link"

const links = [
    { href: "/", label: "Index" },
    { href: "/blog", label: "Blog" },
    { href: "/resume", label: "Resume" },
];

type Props = {}
const Navbar = (props: Props) => {
    const path = usePathname();
    return (
        <div>
            <nav className="flex items-center gap-x-5 md:gap-x-8 max-w-xl">
                <hr className="w-1/5 flex-2 border-orange-500 h-0 horder-t-2 border-dashed" />

                <ul className="flex justify-between font-headers flex-1 w-full gap-2">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link className={`active:bg-black relative ${link.href === path ? "text-white" : "text-gray-300"}`} href={link.href}>
                                {link.href === path && (
                                    <motion.span
                                        layoutId="underline"
                                        className="absolute left-0 top-full block h-[2px] mt-[1px] w-full bg-orange-500  rounded"
                                    />
                                )}
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <hr className="w-1/5 flex-2 border-orange-500 h-0 horder-t-2 border-dashed" />
            </nav>

        </div>

    )
}
export default Navbar