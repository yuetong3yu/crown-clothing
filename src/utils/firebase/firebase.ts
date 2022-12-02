import { initializeApp } from 'firebase/app'
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  UserCredential,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDM1McxnKfXAWanH2IrpA9_S95Kx4cQxUw',
  authDomain: 'first-project-with-fireb-434ca.firebaseapp.com',
  projectId: 'first-project-with-fireb-434ca',
  storageBucket: 'first-project-with-fireb-434ca.appspot.com',
  messagingSenderId: '991381606921',
  appId: '1:991381606921:web:e4471b5fe0d33af1ff5ed8',
}

initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

const db = getFirestore()

export const createUserDocumentFromAuth = async (
  userAuth: UserCredential,
  additionalInfo: Object = { displayName: 'Default Name' }
) => {
  const userDocumentRef = doc(db, 'users', userAuth.user.uid)
  const userSnapshot = await getDoc(userDocumentRef)

  // if the user does not exit, create the user.
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth.user
    const createAt = new Date()

    try {
      await setDoc(userDocumentRef, {
        displayName,
        email,
        createAt,
        ...additionalInfo,
      })
    } catch (err) {
      console.log('1234 creating error', err)
    }
  }

  return userDocumentRef
}

export const createUserWithPasswordAndEmail = async (
  email: string,
  password: string
) => {
  if (!email || !password) return

  return createUserWithEmailAndPassword(auth, email, password)
}

export const signInUserWithPasswordAndEmail = async (
  email: string,
  password: string
) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}
