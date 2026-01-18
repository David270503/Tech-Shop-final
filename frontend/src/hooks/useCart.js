import { useState } from "react";

export function useCart() {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('panierTechShop')
        return savedCart ? JSON.parse(savedCart) : []
    })

    const addToCart = (product) => {
        const exist = cart.find(item => item.id === product.id);
        const newCart = exist
            ? cart.map(item => item.id === product.id ? { ...item, quantity: (item.quantity + 1) } : item)
            : [...cart, { ...product, quantity: 1 }];
        setCart(newCart);
    }

    const removeFromCart = (productId) => {
        const newCart = cart.filter(item => item.id !== productId);
        setCart(newCart);
    }

    const updateQuantity = (productId, change) => {
        const newCart = cart.map(item => {
            if (item.id === productId) {
                const newQuantity = item.quantity + change;
                return {...item, quantity: newQuantity > 0 ? newQuantity : 1 };
            }
            return item;
        });
        setCart(newCart);
    };

    return { cart, addToCart, removeFromCart, updateQuantity };
}