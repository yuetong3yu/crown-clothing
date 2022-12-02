import { createContext, useState } from 'react'
import { IUserContext } from '../types'

const defaultContext: IUserContext = {
  currentUser: null,
  setCurrentUser: () => null,
}

export const UserContext = createContext<IUserContext>(defaultContext)

export const UserCtx: React.FC<any> = ({ children }) => {
  const [user, setUser] = useState<any>(null)
  const value: IUserContext = { currentUser: user, setCurrentUser: setUser }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
