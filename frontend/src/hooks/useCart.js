import { useState, useEffect } from "react";

export function useCart() {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('panierTechShop')
        return savedCart ? JSON.parse(savedCart) : []
    })

    const [order, setOrder] = useState(() => {
        const savedOrder = localStorage.getItem('orderTechShop')
        return savedOrder ? JSON.parse(savedOrder) : []
    })

    useEffect(() => {
        localStorage.setItem('panierTechShop', JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        localStorage.setItem('orderTechShop', JSON.stringify(order))
    }, [order])

    const confirmOrder = () => {
        if (cart.length === 0) return
        setOrder(cart)
        localStorage.setItem('orderTechShop', JSON.stringify(cart))
        setCart([])
    }

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
                return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
            }
            return item;
        });
        setCart(newCart);
    }

    const resetCart = () => setCart([])

    return { cart, addToCart, removeFromCart, updateQuantity, resetCart, confirmOrder, order, setOrder };
}