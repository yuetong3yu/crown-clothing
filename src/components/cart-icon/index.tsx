import { useContext } from 'react'
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts'

import './index.scss'

export const CartIcon = () => {
  const { setIsCartOpen } = useContext(CartContext)

  const cartIconClickHandler = () => setIsCartOpen((o: Boolean) => !o)

  return (
    <div className="cart-icon" onClick={cartIconClickHandler}>
      <ShoppingBag />
      <span className="item-count">0</span>
    </div>
  )
}
