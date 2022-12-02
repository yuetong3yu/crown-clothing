import { useEffect, useState } from 'react'
import { getRedirectResult, UserCredential } from 'firebase/auth'
import {
  auth,
  createUserDocumentFromAuth,
  createUserWithPasswordAndEmail,
} from '../../utils/firebase/firebase'

import { SignUpFormFields } from '../../types'
import { EMAIL_REG } from '../../utils/common'
import FormInput from '../form-input'
import { Button } from '../button'

import './index.scss'

const defaultFormFields: SignUpFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const SignUpForm = () => {
  const [formFields, setFormFields] =
    useState<SignUpFormFields>(defaultFormFields)

  const onChange = (event: any) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  const clearForm = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const { displayName, email, password, confirmPassword } = formFields
    if (password !== confirmPassword) throw new Error('Password not match.')
    if (password.length < 6)
      throw new Error('Password should be at least 6 characters')
    if (!EMAIL_REG.test(email)) throw new Error('No valid email.')

    try {
      const user = (await createUserWithPasswordAndEmail(
        email,
        password
      )) as UserCredential
      if (user) {
        const res = await createUserDocumentFromAuth(user, { displayName })
        if (res) {
          clearForm()
        }
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    listenToRedirect()

    async function listenToRedirect() {
      if (auth) {
        const res = await getRedirectResult(auth)
        if (res) {
          await createUserDocumentFromAuth(res)
        }
      }
    }
  }, [])

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name:"
          handleChange={onChange}
          type="text"
          name="displayName"
          required
          value={formFields.displayName}
        />

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

        <FormInput
          type="password"
          name="confirmPassword"
          required
          label="Confirm Password:"
          value={formFields.confirmPassword}
          handleChange={onChange}
        />

        <Button type="submit" buttonType="google">
          Submit
        </Button>
      </form>
    </div>
  )
}
