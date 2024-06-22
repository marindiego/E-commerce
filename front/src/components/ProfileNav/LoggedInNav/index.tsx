"use client";

import { Dropdown, DropdownItem } from "flowbite-react";
import { HiLogout, HiUserCircle, HiCog, HiCreditCard   } from "react-icons/hi"
import {  usePathname, useRouter } from "next/navigation";

export default function LoggedInNav({ fullName }: { fullName: string }) {
    const router = useRouter();
    const pathName = usePathname();
    const handleSignOut = () => {
        localStorage.removeItem('userSession');
        localStorage.removeItem('isLogged');

        // Emite un evento personalizado de sign out
        window.dispatchEvent(new Event('signOut'));

        if (pathName !== '/') {
            router.push('/');
        }
    };
    return (
        <>
            <div className="flex items-center justify-center h-full">
                <Dropdown label={
                    <>
                    <div className='inline-flex py-1 px-2 items-center justify-center h-full w-10 rounded-3xl border-slate-100 active:bg-slate-100 active:text-black transition-all border-4 mr-2'>
                        <span className='font-extrabold text-sm'>
                            {fullName?.split(' ')[0][0] + fullName?.split(' ')[1][0]}
                        </span>
                    </div>
                    <span>{fullName?.split(' ')[0]}</span>
                    </>
                } inline>
                    <DropdownItem 
                        onClick={() => router.push('/userDashboard')}
                        icon={HiUserCircle} 
                        className="hover:!bg-slate-300"
                    >
                        Profile
                    </DropdownItem>
                    <DropdownItem icon={HiCog} className="hover:!bg-slate-300">
                        Settings
                    </DropdownItem>
                    <DropdownItem icon={HiCreditCard} className="hover:!bg-slate-300"
                    >
                        Billing
                    </DropdownItem>
                    <DropdownItem
                        icon={HiLogout} 
                        onClick={() => handleSignOut()} 
                        className="hover:!bg-slate-300"
                    >
                        Sign out
                    </DropdownItem>
                </Dropdown>                
            </div>
        </>
    )
}
