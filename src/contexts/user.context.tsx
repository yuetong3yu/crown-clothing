import { User } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import { IUserContext } from '../types'
import { signOutUser, userAuthListener } from '../utils/firebase/firebase'

const defaultContext: IUserContext = {
  currentUser: null,
  setCurrentUser: () => null,
}

export const UserContext = createContext<IUserContext>(defaultContext)

export const UserCtx: React.FC<any> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const value: IUserContext = {
    currentUser: user,
    setCurrentUser: setUser as any,
  }

  useEffect(() => {
    const unsubscribe = userAuthListener((user) => {
      setUser(user)
    })

    return unsubscribe
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
