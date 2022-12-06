import React from 'react'

import { ICartItem } from '../../types'

import './index.scss'

interface Props {
  item: ICartItem
}

export const CartItem: React.FC<Props> = ({
  item: { name, imageUrl, quantity, price },
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
