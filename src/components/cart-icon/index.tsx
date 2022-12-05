import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'

import './index.scss'

export const CartIcon = () => {
  return (
    <div className="cart-icon">
      <ShoppingBag />
      <span className="item-count">0</span>
    </div>
  )
}
