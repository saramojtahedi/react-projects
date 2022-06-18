import React, { useContext, useReducer, useState } from 'react'

const ProductContext = React.createContext()
const ProductContextDispatcher = React.createContext()

const initialState = [
    {id: 1, name: 'سیب', price: 1200, quantity: 1},
    {id: 2, name: 'موز', price: 1900, quantity: 2},
    {id: 3, name: 'گلابی', price: 1000, quantity: 3},
]

const reducer = (state, action) => {
    switch(action.type) {
        case "INCREASE": {
            const products = [...state]
            const index = state.findIndex(item => item.id === action.id)
            products[index].quantity++
            return products
        }
        case "DECREASE": 
            const products = [...state]
            const index = state.findIndex(item => item.id === action.id)
            if(products[index].quantity === 1) {
                const filteredProducts = state.filter(item => item.id !== action.id)
                return filteredProducts
            } else {
                products[index].quantity--
                return products
            }
        case "EDIT": {
            const products = [...state]
            const index = state.findIndex(item => item.id === action.id)
            products[index].name = action.event.target.value
            return products
        }
        case "REMOVE": {
            const filteredProducts = state.filter(item => item.id !== action.id)
            return filteredProducts
        }
    }
}

const ProductsProvider = ({children}) => {
    const[products, setProducts] = useReducer(reducer, initialState)

    return (
        <ProductContext.Provider value={products}>
            <ProductContextDispatcher.Provider value={setProducts}>
                {children}
            </ProductContextDispatcher.Provider>
        </ProductContext.Provider>
    )
}

export default ProductsProvider

export const useProducts = () => useContext(ProductContext)
export const useProductsActions = () => useContext(ProductContextDispatcher)

