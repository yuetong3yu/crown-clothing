import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../../contexts'
import { Button, CartItem } from '../index'

import './index.scss'

export const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext)
  const history = useHistory()

  const handleCheckout = () => {
    history.push('/checkout')
    setIsCartOpen(false)
  }

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
      <Button buttonType="inverted" onClick={handleCheckout}>
        GO TO CHECKOUT
      </Button>
    </div>
  )
}
