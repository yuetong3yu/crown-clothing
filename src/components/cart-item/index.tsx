import React from 'react'

import { ICartItem } from '../../types'

import './index.scss'

export const CartItem: React.FC<ICartItem> = ({
  name,
  imageUrl,
  quantity,
  price,
}) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}
