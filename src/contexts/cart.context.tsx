import React, { createContext, useState } from 'react'
import { ICartItem, ProductItem } from '../types'

interface ICartContext {
  isCartOpen: boolean
  setIsCartOpen: Function
  cartItems: ICartItem[]
  addItemToCart: (p?: ProductItem) => void
}

export const CartContext = createContext<ICartContext>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
})

const addItemCart = (cartItems: ICartItem[], itemToAdd: ProductItem) => {
  // find if item in cart
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  )
  // if yes, increase quantity
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  } else {
    // if no, add item to cart
    return [...cartItems, { ...itemToAdd, quantity: 1 }]
  }
}

export const CartProvider: React.FC<any> = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<ICartItem[]>([])
  const addItemToCart = (newProduct?: ProductItem) => {
    if (newProduct) setCartItems(addItemCart(cartItems, newProduct))
  }
  const value = {
    isCartOpen: cartOpen,
    setIsCartOpen: setCartOpen,
    cartItems,
    addItemToCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
