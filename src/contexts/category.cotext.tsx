import React, { createContext, useState } from 'react'
import { Category } from '../types'
import { SHOP_DATA } from '../pages/shop/shop.data'

export const CategoryContext = createContext<Category[]>(SHOP_DATA)

export const ProductProvider: React.FC<any> = ({ children }) => {
  const [categories] = useState<Category[]>(SHOP_DATA)

  return (
    <CategoryContext.Provider value={categories}>
      {children}
    </CategoryContext.Provider>
  )
}
