import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDM1McxnKfXAWanH2IrpA9_S95Kx4cQxUw',
  authDomain: 'first-project-with-fireb-434ca.firebaseapp.com',
  projectId: 'first-project-with-fireb-434ca',
  storageBucket: 'first-project-with-fireb-434ca.appspot.com',
  messagingSenderId: '991381606921',
  appId: '1:991381606921:web:e4471b5fe0d33af1ff5ed8',
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
