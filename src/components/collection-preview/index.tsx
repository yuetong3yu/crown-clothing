import React from 'react'
import { CollectionItemProps } from '../../types'

import { CollectionItem } from '../index'

import './index.scss'

interface Props {
  title: string
  items: CollectionItemProps[]
}

const CollectionPreview: React.FC<Props> = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((_, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} id={id} {...otherItemProps} />
        ))}
    </div>
  </div>
)

export default CollectionPreview
