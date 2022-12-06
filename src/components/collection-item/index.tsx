import React, { useContext } from 'react'

import './index.scss'
import { ProductItem } from '../../types'
import { Button } from '../button'
import { CartContext } from '../../contexts'

export const CollectionItem: React.FC<ProductItem> = (item) => {
  const { name, price, id, imageUrl } = item

  const { addItemToCart } = useContext(CartContext)

  return (
    <div className="collection-item" key={id}>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={() => addItemToCart(item)}>
        Add to cart
      </Button>
    </div>
  )
}
