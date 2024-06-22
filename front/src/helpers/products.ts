//types
import { IProduct } from "@/types";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const productsToPreLoad: IProduct[] = [
  {
    id: 1,
    name: "iPhone 12 Pro",
    price: 999,
    description:
      "Un poderoso dispositivo con un increíble sistema de cámara, pantalla Super Retina XDR y capacidades 5G.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-blue-hero",
    categoryId: 1,
    stock: 15,
  },
  {
    id: 2,
    name: "iPad Air",
    price: 599,
    description:
      "Experimenta potencia y versatilidad con el iPad Air: impresionante pantalla Liquid Retina, rendimiento rápido y soporte para Apple Pencil y Magic Keyboard.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-wifi-blue-202009",
    categoryId: 3,
    stock: 15,
  },
  {
    id: 4,
    name: "MacBook Pro 13 pulgadas",
    price: 1299,
    description:
      "Supera tu trabajo con el MacBook Pro con el chip Apple M1, pantalla Retina y batería para todo el día.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011?wid=892&hei=820&&qlt=80&.v=1603406905000",
    categoryId: 2,
    stock: 18,
  },
  {
    id: 5,
    name: "Adaptador de corriente USB-C de 20W de Apple",
    price: 19,
    description:
      "Carga rápida tu iPhone, iPad u otros dispositivos compatibles con este adaptador de corriente USB-C de 20W compacto y conveniente de Apple.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU7T2_GEO_US?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1542406417329",
    categoryId: 4,
    stock: 22,
  }
];

export async function getProductsDB() {
  try {
    const response = await fetch(`${apiUrl}/products`,{
      method: "GET",
      headers: {
        'ngrok-skip-browser-warning': 'true'
      },
      next: { revalidate: 600 }, // revalidate every 10 minutes to fetch new data from the server
    });
    const products: IProduct[] = await response.json();
    return products;
  }
  catch(error: any) {
    throw new Error(error.message);
  }
} 
export async function getProductById(id: string) {
  try {
    const products = await getProductsDB();
    const product = products.find((product) => product.id === parseInt(id));
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (error: any) {
    throw new Error(error);
  }
}