import React, { createContext, useEffect, useState } from 'react'
import { ICartItem, ProductItem } from '../types'

interface ICartContext {
  isCartOpen: boolean
  setIsCartOpen: Function
  cartItems: ICartItem[]
  cartTotal: number
  addItemToCart: (p?: ProductItem) => void
  removeItemFromCart: (p?: ProductItem) => void
}

export const CartContext = createContext<ICartContext>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartTotal: 0,
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

const removeItems = (cartItems: ICartItem[], itemToRemove: ProductItem) => {
  // find item to remove
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  )
  if (!existingItem) return cartItems
  // if quantity is 1, remove item
  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id)
  }
  // if quantity is more than 1, decrease quantity
  return cartItems.map((cartItem) => {
    if (cartItem.id === itemToRemove.id) {
      return { ...cartItem, quantity: cartItem.quantity - 1 }
    }
    return cartItem
  })
}

export const CartProvider: React.FC<any> = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<ICartItem[]>([])
  const [cartTotal, setCartTotal] = useState(0)
  const addItemToCart = (newProduct?: ProductItem) => {
    if (newProduct) setCartItems(addItemCart(cartItems, newProduct))
  }
  const removeItemFromCart = (product?: ProductItem) => {
    if (product) setCartItems(removeItems(cartItems, product))
  }

  useEffect(() => {
    setCartTotal(
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    )
  }, [cartItems])

  const value = {
    isCartOpen: cartOpen,
    setIsCartOpen: setCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    cartTotal,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
