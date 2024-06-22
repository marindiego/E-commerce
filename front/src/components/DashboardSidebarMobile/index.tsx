"use client";

import { Dropdown } from "flowbite-react";
import { HiInbox, HiLogout, HiShoppingBag, HiArrowLeft, HiShoppingCart, HiMenuAlt1 } from "react-icons/hi";
import { HiMiniIdentification } from "react-icons/hi2";


export function DashboardSidebarMobile() {
    return (
        <div className="block lg:hidden text-black" >
            <Dropdown dismissOnClick={false} size="sm" label={<HiMenuAlt1 className="w-5 h-5"/>} arrowIcon={false} inline placement="right-start">
                <Dropdown.Item href="/userDashboard" icon={HiMiniIdentification}>
                    Personal information
                </Dropdown.Item>
                <Dropdown.Item href="" icon={HiInbox}>
                    Inbox
                </Dropdown.Item>
                <Dropdown.Item href="/userDashboard/orders" icon={HiShoppingBag}>
                    Orders
                </Dropdown.Item>
                <Dropdown.Item href="/userDashboard/cart" icon={HiShoppingCart}>
                    Cart
                </Dropdown.Item>
                <Dropdown.Divider className="bg-gray-300"/>
                <Dropdown.Item icon={HiLogout}>Log out</Dropdown.Item>
            </Dropdown>

        </div>
    );
}
