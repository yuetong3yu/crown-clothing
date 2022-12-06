import { useContext } from 'react'
import { CartContext } from '../../contexts'
import { Button, CartItem } from '../index'

import './index.scss'

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button buttonType="inverted">GO TO CHECKOUT</Button>
    </div>
  )
}
