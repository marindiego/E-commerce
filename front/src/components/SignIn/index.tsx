import Link from "next/link";

export const SignIn = () => {
    return (
        <Link href="/login" >
            <button
                type="button"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg lg:text-xl font-extrabold rounded-md group bg-gradient-to-br from-blue-600 to-cyan-500 group-hover:from-blue-600 group-hover:to-cyan-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
                <span className="relative px-4 lg:px-6 py-2.5 lg:py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Sign in
                </span>
            </button>
        </Link>
    )
}
export default SignIn;