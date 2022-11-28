import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'

import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  auth,
} from './firebase/auth'
import { SignUpForm } from './components/sign-up/sign-up'

function App() {
  const logUser = async () => {
    const userRef = await createUserDocumentFromAuth(
      await signInWithGooglePopup()
    )
    console.log('123 user ref', userRef)
  }

  useEffect(() => {
    initGoogleRedirect()

    async function initGoogleRedirect() {
      const redirectRes = await getRedirectResult(auth)
      if (redirectRes) {
        const userRef = await createUserDocumentFromAuth(redirectRes)
        console.log('1234 user ref', userRef)
      }
    }
  }, [])

  return (
    <div>
      <button onClick={logUser}>Sign in with Google Popup</button>
      <br />
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
      <hr />

      <SignUpForm />
    </div>
  )
}

export default App
