'use client'

// CartContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Data {
    id: string;
    stock: string;
    is_active: boolean;
    description: string;
    urlImagem: string;
    brand: string;
    price: number;
}

interface CartItem {
    product: Data;
    quantity: number;
}

interface CartContextType {
    cartState: CartItem[];
    addToCart: (product: Data) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartState, setCartState] = useState<CartItem[]>([]);

    const addToCart = (product: Data) => {
        setCartState(prevCart => {
            const existingItem = prevCart.find(item => item.product.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { product, quantity: 1 }];
            }
        });
    };

    return (
        <CartContext.Provider value={{ cartState, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
