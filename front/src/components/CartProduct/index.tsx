import { IProduct, CartProductProps } from "@/types";

export const CartProduct: React.FC<CartProductProps> = ({ id, name, description, price, image, stock, handleRemoveProduct }) => {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-2 justify-between p-4 mb-4 bg-gray-50 rounded-lg">
            <div className="flex items-center w-full">
                <div className="min-w-36 h-32 mr-4">
                    <img src={image} alt={name} className="w-full h-full object-cover text-sm text-black" />
                </div>
                <div>
                    <h2 className="text-xl text-black font-semibold">{name}</h2>
                    <p className="text-gray-400">{description}</p>
                    <div className="mt-1 flex items-center justify-start text-sm font-bold">
                        <p className="text-gray-400">Stock: {stock}</p>
                        <button type="button" onClick={() => handleRemoveProduct(id)} className="ml-4 px-2 py-1 text-red-500 hover:text-red-600 underline">Remove</button>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end w-full lg:w-1/4 mt-4 lg:mt-0 text-black">
                <button type="button" className="h-5 w-5 inline-flex cursor-pointer items-center justify-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100">-</button>
                <span className="text-base mx-2">1</span>
                <button type="button" className="h-5 w-5 inline-flex cursor-pointer items-center justify-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100">+</button>
                <span className="w-14 text-base font-semibold ml-4">${price}</span>
            </div>
        </div>
    )
}
export default CartProduct;
