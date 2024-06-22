'use client';

import LoggedInNav from './LoggedInNav';
import LoggedOutNav from './LoggedOutNav';
import { useState, useEffect } from 'react';
import { IUserSession } from '@/types';
import { usePathname } from 'next/navigation';

export default function ProfileNav() {
    const pathName = usePathname();
    const [userData, setUserData] = useState<IUserSession>({} as IUserSession);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    
    useEffect(() => {
        const updateStateFromLocalStorage = () => {
            const storedUserData = localStorage.getItem('userSession');
            if (storedUserData) {
                setUserData(JSON.parse(storedUserData));
            }
            const storedIsLoggedIn = localStorage.getItem('isLogged');
            if (storedIsLoggedIn) {
                setIsLoggedIn(JSON.parse(storedIsLoggedIn));
            } else {
                setIsLoggedIn(false);
            }
        };
        
        // Inicializa el estado con los valores de localStorage
        if (typeof window !== 'undefined') {
            updateStateFromLocalStorage();
        }

        // Agrega un listener para el evento storage
        window.addEventListener('storage', updateStateFromLocalStorage);

        // Agrega un listener para el evento personalizado de sign out
        window.addEventListener('signOut', updateStateFromLocalStorage);

        // Limpia los listeners cuando el componente se desmonta
        return () => {
            window.removeEventListener('storage', updateStateFromLocalStorage);
            window.removeEventListener('signOut', updateStateFromLocalStorage);
        };
    }, [pathName]);

    return (
        <div className='h-full py-4 flex items-center justify-center gap-3'>
            {isLoggedIn ? <LoggedInNav fullName={userData?.userData?.name} /> : <LoggedOutNav />}
        </div>
    );
}
