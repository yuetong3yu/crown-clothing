import React, { useState } from 'react'

import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview'

const ShopPage = () => {
  const [collections, setCollections] = useState<any>(SHOP_DATA)

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }: any) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default ShopPage
