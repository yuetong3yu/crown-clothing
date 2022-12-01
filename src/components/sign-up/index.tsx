import { useEffect, useState } from 'react'
import { getRedirectResult, UserCredential } from 'firebase/auth'
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  createUserWithPasswordAndEmail,
} from '../../utils/firebase/firebase'

import { SignUpFormFields } from '../../types'
import { EMAIL_REG } from '../../utils/common'

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
    <div>
      <button style={{ marginBottom: 12 }} onClick={signInWithGoogleRedirect}>
        Sign in with Google
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="displayName">Display Name: </label>
        <input
          type="text"
          name="displayName"
          required
          value={formFields.displayName}
          onChange={onChange}
        />
        <br />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          required
          value={formFields.email}
          onChange={onChange}
        />
        <br />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          required
          value={formFields.password}
          onChange={onChange}
        />
        <br />

        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input
          type="password"
          name="confirmPassword"
          required
          value={formFields.confirmPassword}
          onChange={onChange}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
