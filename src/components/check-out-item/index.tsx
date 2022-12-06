import React, { useContext } from 'react'
import { CartContext } from '../../contexts'
import { ICartItem } from '../../types'

import './index.scss'

interface Props {
  item: ICartItem
}

export const CheckoutItem: React.FC<Props> = ({ item }) => {
  const { imageUrl, name, quantity, price } = item
  const { removeItemFromCart, addItemToCart } = useContext(CartContext)

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(item)}>
          decrease
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(item)}>
          increase
        </div>
      </span>
      <span className="price">{price}</span>
      {/* <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div> */}
    </div>
  )
}
