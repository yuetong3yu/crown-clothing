import React from 'react'
import { ICartItem } from '../../types'

import './index.scss'

interface Props {
  item: ICartItem
}

export const CheckoutItem: React.FC<Props> = ({ item }) => {
  const { imageUrl, name, quantity, price } = item
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        {/* <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div> */}
        <span className="value">{quantity}</span>
        {/* <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div> */}
      </span>
      <span className="price">{price}</span>
      {/* <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div> */}
    </div>
  )
}
