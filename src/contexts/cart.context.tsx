import React, { createContext, useState } from 'react'

interface ICartContext {
  isCartOpen: boolean
  setIsCartOpen: any
}

export const CartContext = createContext<ICartContext>({
  isCartOpen: false,
  setIsCartOpen: () => {},
})

export const CartProvider: React.FC<any> = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false)
  const value = { isCartOpen: cartOpen, setIsCartOpen: setCartOpen }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
