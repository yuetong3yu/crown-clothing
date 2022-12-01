import { FunctionComponent } from 'react'

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

interface ButtonProps {
  buttonType: 'google' | 'inverted'
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  buttonType,
}) => {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>
      {children}
    </button>
  )
}
