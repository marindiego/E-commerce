'use client'

import React from "react";
import { DashboardSidebarMobile } from "@/components/DashboardSidebarMobile";
import { getOrders } from "@/helpers/orders.helper";
import { IOrder, IUserSession } from "@/types";
import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

export default function OrdersPage() {
    const [userSession, setUserSession] = useState<IUserSession>();
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [expandedOrders, setExpandedOrders] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const userSessionStored = JSON.parse(localStorage.getItem('userSession') || 'false');
            setUserSession(userSessionStored);
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const ordersResponse = await getOrders(userSession?.token!);
            setOrders(ordersResponse);
        }
        userSession?.token && fetchData();
    }, [userSession?.token]);

    const toggleOrder = (orderId: number) => {
        setExpandedOrders((prev) => ({
            ...prev,
            [orderId]: !prev[orderId],
        }));
    };

    return (
        <div className="w-full h-full p-4 bg-gray-200 text-black">
            <div className="my-5">
                <DashboardSidebarMobile />
            </div>
            <div className="overflow-auto">
                {orders.length > 0 ? (
                    <table className="w-full md:container md:mx-auto bg-white rounded-lg shadow-md">
                        <thead className="w-full bg-gray-300">
                            <tr>
                                <th className="w-1/4 py-2 px-4 border-b text-left">Order ID</th>
                                <th className="w-1/4 py-2 px-4 border-b text-left">Status</th>
                                <th className="w-1/4 py-2 px-4 border-b text-left">Date</th>
                                <th className="w-1/4 py-2 px-4 border-b text-center ">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            {orders.map((order) => (
                                <React.Fragment key={order.id}>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border-b">{order.id}</td>
                                        <td className="py-2 px-4 border-b">{order.status}</td>
                                        <td className="py-2 px-4 border-b">{new Date(order.date).toLocaleDateString()}</td>
                                        <td className="py-2 px-4 border-b text-center">
                                            <button onClick={() => toggleOrder(order.id)}>
                                                {expandedOrders[order.id] ? <FaAngleUp /> : <FaAngleDown />}
                                            </button>
                                        </td>
                                    </tr>
                                    {expandedOrders[order.id] && (
                                        <tr>
                                            <td colSpan={4} className="p-4 bg-gray-100 border-b absolute w-3/4 md:w-2/4 z-20">
                                                <ul className="space-y-2">
                                                    {order.products.map((product) => (
                                                        <li key={product.id} className="flex items-center space-x-4">
                                                            <img className="h-20 w-20 rounded" src={product.image} alt={product.name} />
                                                            <div>
                                                                <h3 className="text-sm font-bold">{product.name}</h3>
                                                                <p className="text-sm text-gray-600">{product.description}</p>
                                                                <p className="text-sm text-gray-900 font-semibold">${product.price}</p>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="p-4 bg-blue-50 rounded-lg text-center font-semibold">
                        No orders found
                    </div>
                )}
            </div>
        </div>
    );
}
