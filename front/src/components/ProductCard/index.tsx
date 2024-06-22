'use client'


import { Card } from 'flowbite-react';
import Image from 'next/image';
import { IProduct } from "@/types";
import Link from "next/link";
import { useRouter } from 'next/navigation';


const ProductCard: React.FC<IProduct> = ({ id, name, price, stock, image }) => {
  const router = useRouter();

  return (
    <Card
      className="relative max-w-sm w-72 bg-[#ffffff] hover:shadow-lg"
      renderImage={() => <Image src={image} alt={name} width={200} height={200} className="h-60 w-full object-contain" />}
    >
      <h2 className="text-xl font-semibold text-black">{name}</h2>
      <p className="text-black text-2xl font-bold">${price}</p>
      <p className="text-gray-500 text-sm mb-2 ">Stock: {stock}</p>
      <div></div>
      <div></div>
      <div className='flex justify-between items-center absolute bottom-5'>
        <Link href={`/product/${id}`} key={id}>
          <button type='button' className="max-w-fit bg-secondary text-white py-2 px-3 rounded hover:bg-secondary/90 focus:ring-2 cursor-pointer">
            View Details
          </button>
        </Link>
      </div>
    </Card>
  );
};

export default ProductCard;