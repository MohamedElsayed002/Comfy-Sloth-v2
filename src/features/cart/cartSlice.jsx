
// cartItems: [],
// numbersInCart: 0,
// cartTotal: 0,
// shipping: 500,
// tax: 0,
// orderTotal: 0
import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'

const defaultState = {
    cartItems: [],
    numbersInCart: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0
}

const getCartFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('cart')) || defaultState
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: getCartFromLocalStorage(),
    reducers: {
        addItem: (state, action) => {
            const { product } = action.payload
            const item = state.cartItems.find((i) => i.cartID === product.cartID)
            if (item) {
                item.amount += product.amount
            } else {
                state.cartItems.push(product)
            }
            state.numbersInCart += product.amount
            state.cartTotal += product.amount * product.price
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;
            localStorage.setItem('cart', JSON.stringify(state));
            toast.success('product added successfully')
        },
        clearCart: (state) => {
            localStorage.setItem('cart', JSON.stringify(defaultState))
            return defaultState
        },
        removeItem: (state, action) => {
            console.log('a7a')
            const { cartID } = action.payload;
            const product = state.cartItems.find((i) => i.cartID === cartID);
            state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);
            state.numbersInCart -= product.amount;
            state.cartTotal -= product.price * product.amount;
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;
            localStorage.setItem('cart', JSON.stringify(state));
            toast.error('Item removed from cart');
        },
        editItem: (state, action) => {
            const { cartID, amount } = action.payload;
            const item = state.cartItems.find((i) => i.cartID === cartID);
            state.numbersInCart += amount - item.amount;
            state.cartTotal += item.price * (amount - item.amount);
            item.amount = amount;
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;
            localStorage.setItem('cart', JSON.stringify(state)); 
            toast.success('Cart updated');
        },
    },
})

export const { addItem, clearCart , removeItem , editItem } = cartSlice.actions

export default cartSlice.reducer