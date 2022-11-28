import { signInWithGooglePopup } from './firebase/auth'

function App() {
  const logUser = async () => {
    const res = await signInWithGooglePopup()
    console.log('123 res', res)
  }

  return (
    <div>
      <button onClick={logUser}>Sign in with Google</button>
    </div>
  )
}

export default App
