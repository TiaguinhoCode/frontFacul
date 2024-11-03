'use client';


import { useCart } from "@/context/cartContext";
import { formatCurrency } from "@/utils/mask/formatCurrency";
import { useState } from "react";

type Data = {
    id: string;
    stock: string;
    is_active: boolean;
    description: string;
    urlImagem: string;
    brand: string;
    price: number;
};

interface CartItem {
    product: Data;
    quantity: number;
}

interface ContainerCatalogProps {
    brand: string;
    data: Data[];
}

export default function ContainerCatalog({ brand, data }: ContainerCatalogProps) {
    // const [cartState, setCartState] = useState<CartItem[]>([])

    const { cartState, addToCart } = useCart();

    const totalProducts = data.length;
    return (
        <main className="my-8">
            <div className="container mx-auto px-6">
                <h3 className="text-gray-700 text-2xl font-medium">Catálogo {brand}</h3>
                <span className="mt-3 text-sm text-gray-500">{totalProducts}+ Products</span>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                    {data.map((product) => {
                        // Verifica a quantidade do produto no cartState
                        const cartItem = cartState.find(item => item.product.id === product.id);
                        const quantity = cartItem ? cartItem.quantity : 0;

                        return (
                            <div key={product.id} className="w-full border-gray-200 border max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                                <div className="relative h-56 w-full">
                                    <img
                                        src={product.urlImagem || 'fallback-image-url.jpg'}
                                        alt={product.description}
                                        className="h-full w-full object-cover"
                                    />
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="absolute bottom-4 right-4 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                                    >
                                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="px-5 py-3">
                                    <h3 className="text-gray-700 uppercase">{product.description}</h3>
                                    <span className="text-gray-500 mt-2">{formatCurrency(product.price)}</span>
                                    {quantity > 0 && ( // Exibe a quantidade se maior que 0
                                        <p className="mt-1 text-gray-700">Quantidade: {quantity}</p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
