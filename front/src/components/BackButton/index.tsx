'use client';

import { useRouter } from "next/navigation";
import { HiOutlineArrowLeft } from "react-icons/hi";


export const BackButton = () => {
    const router = useRouter()
    return (
        <button type="button" onClick={() => router.push('/products')} className="flex items-center gap-2 text-gray-500 text-md font-semibold absolute top-3 left-3 ">
            <HiOutlineArrowLeft size={20} className=""/>
            <span className="relative hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-gray-500 transition-all duration-300">
                Back to products
            </span>
        </button>
    )
}
export default BackButton;