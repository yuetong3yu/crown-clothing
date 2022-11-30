import React from 'react'

import './index.scss'

const CustomButton: React.FC<any> = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
)

export default CustomButton
