import { useContext } from 'react'
import CollectionPreview from '../../components/collection-preview'

import { CategoryContext } from '../../contexts'

const ShopPage = () => {
  const categories = useContext(CategoryContext)

  return (
    <div className="shop-page">
      {categories.map(({ id, ...otherCollectionProps }: any) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default ShopPage
