'use client';

import { getProductById } from '@/helpers/products';
import { IProduct, IUserSession } from '@/types';
import React, { useEffect, useState } from 'react';
import { Button } from 'flowbite-react';
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";
import BackButton from '@/components/BackButton';
import { useRouter } from 'next/navigation';
import ProductLoading from '@/components/ProductLoading';
import { useAuth } from '@/context/AuthContext';

const DetailProduct = ({ params }: { params: { productId: string } }) => {
    const router = useRouter();
    const [product, setProduct] = useState<IProduct>();
    const {userData} = useAuth();

    useEffect(() => {
        const fetchProductDetail = async () => {
            const product = await getProductById(params.productId);
            setProduct(product);
        };
            fetchProductDetail();
    }, [params.productId]);

    const handleAddToCart = () => {
        if (!userData?.token) {
            router.push('/login');
            return;
        }
        
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const productIndex = cart.findIndex((item: { id: number | undefined; }) => item.id === product?.id);
        if(productIndex === -1) {
            cart.push(product)
            localStorage.setItem('cart', JSON.stringify(cart));
            router.push('/userDashboard/cart');
        } else {
            alert('Product already in cart');
        }

    };
    return (
        <section className="relative min-h-[55.5vh] py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
            <BackButton />
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                {!product ? <ProductLoading /> :
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                        <div className="shrink-0 w-full h-full bg-[#ffffff] max-w-md lg:max-w-lg mx-auto">
                            <img className="w-full lg:w-auto lg:h-full lg:mx-auto dark:hidden" src={product?.image} alt={product?.name} />
                            <img className="hidden dark:block" src={product?.image} alt={product?.name} />
                        </div>
                        <div>
                            <div className="mt-6 sm:mt-8 lg:mt-0">
                                <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                                    {product?.name}
                                </h1>
                                <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                    <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                                        ${product?.price}
                                    </p>
                                </div>
                                <div className="mt-5 sm:gap-4 sm:items-center sm:flex sm:mt-5">
                                    <p className="text-lg font-medium text-gray-500 dark:text-gray-400">Stock: {product?.stock}</p>
                                </div>
                                <hr className="my-6 md:my-5 border-gray-200 dark:border-gray-800" />
                                <p className="mb-6 text-gray-500 dark:text-gray-400">
                                    {product?.description}
                                </p>
                            </div>
                            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                                <Button onClick={handleAddToCart} size="md" outline gradientDuoTone="greenToBlue" className="mt-4 sm:mt-0">
                                    <HiShoppingCart className="mr-2 h-5 w-5" />
                                    Add to cart
                                </Button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </section>
    );
};

export default DetailProduct;
