
"use client";

import { Sidebar } from "flowbite-react";
import { HiInbox, HiShoppingBag, HiArrowLeft, HiShoppingCart, HiMenuAlt1 } from "react-icons/hi";
import { HiMiniIdentification  } from "react-icons/hi2";


export function DashboardSidebar() {
    return (
        <div className="">
            <Sidebar className="hidden lg:block" aria-label="User Dashboard Sidebar">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="/userDashboard" icon={HiMiniIdentification}>
                            <span className="font-montserrat font-semibold">Personal information</span>
                        </Sidebar.Item>

                        <Sidebar.Item href="#" icon={HiInbox} label="3">
                            <span className="font-montserrat font-semibold">Inbox</span>
                        </Sidebar.Item>
                        <Sidebar.Item href="/userDashboard/orders" icon={HiShoppingBag}>
                            <span className="font-montserrat font-semibold">Orders</span>
                        </Sidebar.Item>
                        <Sidebar.Item href="/userDashboard/cart" icon={HiShoppingCart}>
                            <span className="font-montserrat font-semibold">Cart</span>
                        </Sidebar.Item>   
                        <Sidebar.Item href="#" icon={HiArrowLeft}>
                            <span className="font-montserrat font-semibold">Logout</span>
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
}
