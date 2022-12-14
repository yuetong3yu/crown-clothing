import { FunctionComponent } from 'react'

import './index.scss'

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

interface ButtonProps {
  buttonType: 'google' | 'inverted'
  onClick?: JSX.IntrinsicElements['button']['onClick']
  [key: string]: any
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  buttonType = 'inverted',
  ...otherProps
}) => {
  return (
    <button
      className={`custom-button button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}
