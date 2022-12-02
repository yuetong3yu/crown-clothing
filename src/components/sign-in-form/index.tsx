import { useState } from 'react'
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase'

import { SignInFormFields } from '../../types'
import FormInput from '../form-input'
import { Button } from '../button'

import './index.scss'

const defaultFormFields: SignInFormFields = {
  email: '',
  password: '',
}

export const SignInForm = () => {
  const [formFields, setFormFields] =
    useState<SignInFormFields>(defaultFormFields)

  const onChange = (event: any) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  const signInWithGoogle = async () => {
    const auth = await signInWithGooglePopup()
    if (auth) {
      const res = await createUserDocumentFromAuth(auth)
      console.log('123 ', res)
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput
          type="email"
          name="email"
          required
          label="Email:"
          value={formFields.email}
          handleChange={onChange}
        />

        <FormInput
          label="Password:"
          type="password"
          name="password"
          required
          value={formFields.password}
          handleChange={onChange}
        />

        <div className="buttons-container">
          <Button type="submit" buttonType="google">
            Sign In
          </Button>
          <Button onClick={signInWithGoogle} buttonType="inverted">
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  )
}
