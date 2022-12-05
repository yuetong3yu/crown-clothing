import { useState } from 'react'
import {
  signInWithGooglePopup,
  signInUserWithPasswordAndEmail,
} from '../../utils/firebase/firebase'

import { SignInFormFields } from '../../types'
import FormInput from '../form-input'
import { Button } from '../button'

import './index.scss'
import { UserContext } from '../../contexts'

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

  const signInWithEmail = async (e: any) => {
    e.preventDefault()
    signInUserWithPasswordAndEmail(formFields.email, formFields.password)
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
          <Button type="submit" buttonType="google" onClick={signInWithEmail}>
            Sign In
          </Button>
          <Button onClick={signInWithGooglePopup} buttonType="inverted">
            Sign In Google
          </Button>
        </div>
      </form>
    </div>
  )
}
