import { createContext, useEffect, useState } from 'react'
import { IUserContext } from '../types'
import { signOutUser, userAuthListener } from '../utils/firebase/firebase'

const defaultContext: IUserContext = {
  currentUser: null,
  setCurrentUser: () => null,
}

export const UserContext = createContext<IUserContext>(defaultContext)

export const UserCtx: React.FC<any> = ({ children }) => {
  const [user, setUser] = useState<any>(null)
  const value: IUserContext = { currentUser: user, setCurrentUser: setUser }

  useEffect(() => {
    const unsubscribe = userAuthListener((user) => {
      if (user) {
        alert(`Welcome, ${user.email}`)
      }
      setUser(user)
    })

    return unsubscribe
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
