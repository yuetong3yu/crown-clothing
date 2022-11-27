import { User, UserCredential } from 'firebase/auth'

export interface CollectionItemProps {
  id: string
  name: string
  price: number
  imageUrl: string
}

export interface FormInputProps {
  handleChange: JSX.IntrinsicElements['input']['onChange']
  label: string
  [key: string]: any
}

export interface MenuItemProps {
  title: string
  imageUrl: string
  size: string
  history: string[]
  linkUrl: string
  match: any
}

export interface SignInFormFields {
  email: string
  password: string
}

export interface SignUpFormFields {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}

export interface IUserContext {
  currentUser: User | null
  setCurrentUser: (u?: User | null) => void
}
