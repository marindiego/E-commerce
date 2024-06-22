'use client'

//helpers
import { productsToPreLoad } from "@/helpers/products";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProductsHome() {
  const router = useRouter();
  
  const handleAddToCart = () => {
    if (typeof window !== 'undefined') {
      const isLogged = JSON.parse(localStorage.getItem('isLogged') || 'false');
      if(!isLogged) {
        router.push('/login');
        return;
      }
    }
    alert("You're logged in, you can add to cart");
  };
    return (
      <section className="sm:container mx-auto py-12 bg-backgroundColor">
        <h2 className="text-5xl font-extrabold font-montserrat tracking-widest mb-10 text-white text-center">The most outstanding products</h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 justify-center items-center justify-items-center gap-6 2xl:gap-x-0">
          {productsToPreLoad.map((product) => (
            <div
              key={product.id}
              className="relative w-full px-3 md:w-[640px] h-48 shadow-md text-center text-2xl text-backgroundColor2 flex justify-start items-start"
            >
            <div className="bg-slate-100 h-full w-64 px-5">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="p-5 bg-gray-200 flex flex-col items-start justify-end text-2xl tracking-wide font-montserrat w-full h-full">
              <h3 className="text-xl font-montserrat font-semibold w-full text-start h-full  tracking-wide">{product.name}</h3>
              <p className="text-black text-3xl font-extrabold tracking-wider font-nunito">${product.price}</p>
              <span className="text-neutral-500 font-medium tracking-wide font-nunito">stock: {product.stock}</span>
            </div>
              <Link href={`/product/${product.id}`} className="absolute bottom-2 right-4 text-zinc-100 bg-gray-400 hover:bg-gray-500 px-3 py-1 text-lg font-bold font-nunito leading-9 rounded-lg shadow-md ">
                Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    )
}