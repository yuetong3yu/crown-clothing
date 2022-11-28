import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from './firebase/auth'

function App() {
  const logUser = async () => {
    const userRef = await createUserDocumentFromAuth(
      await signInWithGooglePopup()
    )
    console.log('123 userref', userRef)
  }

  return (
    <div>
      <button onClick={logUser}>Sign in with Google</button>
    </div>
  )
}

export default App
