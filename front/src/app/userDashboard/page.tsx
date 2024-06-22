'use client';

import React, { useState, useEffect } from 'react';
import { IUserSession } from '@/types';
import { DashboardSidebarMobile } from '@/components/DashboardSidebarMobile';

export default function UserDashboard() {
    const [userLogged, setUserLogged] = useState<IUserSession | null>(null);

    useEffect(() => {
        const storedUserData = localStorage.getItem('userSession');
        if (storedUserData) {
            setUserLogged(JSON.parse(storedUserData));
        }
    }, []);

    if (!userLogged) {
        return (
            <div className="flex justify-center items-center h-screen w-full">
                <div className="text-center">
                    <h1 className="text-2xl text-center font-bold text-gray-800">
                        Loading User Data...
                    </h1>
                </div>
            </div>
        );
    }

    const { name, email, address, phone } = userLogged?.userData || {};

    return (
        <div className='w-full h-full'>
            <div className='mt-5 ml-5'>
                <DashboardSidebarMobile />
            </div>
            <div className="max-w-md h-fit mx-auto bg-white rounded-lg shadow-lg p-6 mt-10">
                <div className="flex items-center mb-6">
                    <img
                        src="/images/default-avatar.png"
                        alt="User Avatar"
                        className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
                        <p className="text-gray-600">{email}</p>
                    </div>
                </div>
                <div>
                    <ul className="space-y-2 text-gray-700">
                        <li>
                            <strong className='w-20 inline-block'>Name:</strong> {name}
                        </li>
                        <li>
                            <strong className='w-20 inline-block'>Email:</strong> {email}
                        </li>
                        <li>
                            <strong className='w-20 inline-block'>Address:</strong> {address}
                        </li>
                        <li>
                            <strong className='w-20 inline-block'>Phone:</strong> {phone}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
