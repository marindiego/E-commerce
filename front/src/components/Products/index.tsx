// types
import { IProduct } from "@/types";

// Components
import ProductCard from "../ProductCard";

// helpers
import { getProductsDB } from "@/helpers/products";

const Products = async() => {
    const products = await getProductsDB();
    return (
        <section className="bg-slate-100">
            <div className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8">
                    {products && products?.map((product) => (
                            <ProductCard key={product.id} {...product}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Products;