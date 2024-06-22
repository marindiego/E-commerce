
import Link from 'next/link';


export default function LoggedOutNav() {
    return (
        <>
            <Link
                href="/login"
                className="px-2 py-1 font-bold border-collapse border-4 rounded-full hover:bg-slate-100 hover:text-black transition-all"
            >
                Sign in
            </Link>
            <Link href="/register" className="relative font-semibold inline-block text-white leading-8 no-underline before:absolute before:bottom-[-0.25rem] before:right-0 before:h-[2px] before:w-0 before:bg-white before:rounded before:transition-all before:duration-400 hover:before:w-full hover:before:left-0">
                Sign up
            </Link>
        </>
    );
}
