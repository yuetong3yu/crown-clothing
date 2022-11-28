import { useState } from 'react'

interface SignUpFormFields {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}

const defaultFormFields: SignUpFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const SignUpForm = () => {
  const [formFields, setFormFields] =
    useState<SignUpFormFields>(defaultFormFields)
  console.log('123 form fields', formFields)

  const onChange = (event: any) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div>
      <form>
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
