import React, { useContext } from 'react'

import './index.scss'
import { CheckoutItem } from '../../components'
import { CartContext } from '../../contexts'

const Checkout: React.FC = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 06/20 - CVV: 123
      </div>
      {/* <StripeCheckoutButton price={total} /> */}
    </div>
  )
}

export default Checkout
