import Link from "next/link";

export default function NotFound() {
    return (
        <div className="grid h-screen px-4 place-content-center ">
            <h1 className="tracking-widest text-gray-500 uppercase text-3xl">
                404 | Not Found
            </h1>
            <Link className="text-center bg-orange-500 px-2 py-1 hover:bg-white hover:text-black transition duration-200 mt-4" href={'/'}>Return home</Link>
        </div>
    );
}