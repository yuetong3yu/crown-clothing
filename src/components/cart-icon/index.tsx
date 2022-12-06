import { useContext } from 'react'
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts'

import './index.scss'

export const CartIcon = () => {
  const { setIsCartOpen, cartItems } = useContext(CartContext)

  const itemCount = cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )

  const cartIconClickHandler = () => setIsCartOpen((o: Boolean) => !o)

  return (
    <div className="cart-icon" onClick={cartIconClickHandler}>
      <ShoppingBag />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}
