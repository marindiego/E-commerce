'use client';

import CartProduct from "@/components/CartProduct";
import { IProduct, IUserSession } from "@/types";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { createOrder } from "@/helpers/orders.helper";
import { DashboardSidebarMobile } from "@/components/DashboardSidebarMobile";

export default function Cart() {
    const [cart, setCart] = useState<IProduct[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [userData, setUserData] = useState<IUserSession>();
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const userSessionData = JSON.parse(localStorage.getItem("userSession") || "false");
            setUserData(userSessionData);
            if (!userSessionData?.token) {
                redirect("/login");
            }
            const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
            if (storedCart) {
                setCart(storedCart);
                setTotal(calculateTotalPrice(storedCart));
            }
            setLoading(false); // Set loading to false after fetching cart data
        }
    }, []);
    const calculateTotalPrice = (cart: IProduct[]) => {
        return cart.reduce((acc: number, item: IProduct) => acc + item.price, 0);
    }
    const handleRemoveProduct = (id: number) => {
        const newCart = cart.filter((product) => product.id !== id);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));

        setTotal(calculateTotalPrice(newCart));
    }
    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
        setTotal(0);
    }
    const handleCheckout = async() => {
        try {
            const idProducts = new Set(cart.map((product) => product.id));
            await createOrder(Array.from(idProducts), userData?.token!);

            alert("Order created successfully");
            clearCart();
            router.push('/userDashboard/orders')
        } catch (error) {
            console.error(error);
            alert("Error creating order");
        }
    }
    return (
        <div className="w-full h-full flex flex-col xl:flex-row gap-4 justify-between p-8 bg-gray-200 text-white">
            <DashboardSidebarMobile />
            {loading ? (
                <div role="status" className="w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-start gap-4">
                        <div className="flex items-center justify-center max-w-32 h-32 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                        <div className="w-full">
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                            <div className="w-3/4 h-2 bg-gray-300 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-1/4"></div>
                    </div>
                    <div className="flex items-center justify-start gap-4">
                        <div className="flex items-center justify-center max-w-32 h-32 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                        <div className="w-full">
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                            <div className="w-3/4 h-2 bg-gray-300 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-1/4"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            ) : !cart.length ? (
                <div className="w-full h-full flex items-center justify-center p-4 border border-gray-200 rounded shadow dark:border-gray-700">
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">No products in the cart</p>
                </div>
            ) : (
                <div className="w-full xl:w-3/4 h-full overflow-y-auto">
                    {cart.map((product, index) => (
                        <CartProduct
                            key={index}
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                            stock={product.stock}
                            handleRemoveProduct={handleRemoveProduct}
                        />
                    ))}
                </div>
            )}
            <div className="w-full xl:w-1/4 bg-gray-50 text-black p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                <div className="mb-4">
                    <p className="flex justify-between">
                        {
                            cart.length > 0
                                ? `Subtotal (${cart.length} items):`
                                : "No items in cart"
                        }
                    </p>
                </div>
                <div className="w-full bg-gray-300 h-0.5 my-1"></div>
                <div className="flex justify-between text-xl font-bold mb-4">
                    {
                        cart.length > 0
                            ? 
                            <>
                                <span>Total:</span> 
                                <span>${total.toFixed(2)}</span>
                            </>
                            : "$0.00"
                    }
                </div>
                <button onClick={handleCheckout} type="button" className="w-full relative block cursor-pointer text-white mx-auto font-semibold rounded-lg overflow-hidden p-1.5 isolation-auto bg-gradient-to-r from-green-400 via-yellow-400 to-blue-400 bg-[length:400%_100%] animate-background-move
                hover:animate-background-move-hover focus:animate-background-move-active 
                ">
                    <span className="relative block py-1 px-2 text-base font-bold rounded-md">
                        Proceed to Checkout
                    </span>
                </button>

                <Link href="/products" className="flex justify-center">
                    <span className="mb-2 py-2 hover:text-blue-600 transition-all">Continue Shopping</span>
                </Link>
            </div>
        </div>
    );
}
