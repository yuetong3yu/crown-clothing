import React, { useState } from 'react'

import MenuItem from '../menu-item'
import { directories } from './directory.data'

import './index.scss'

const Directory: React.FC = () => {
  const [sections, setSections] = useState(directories)

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  )
}

export default Directory
