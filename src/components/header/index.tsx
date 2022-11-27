import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './index.scss'
import { UserContext } from '../../contexts'
import { signOutUser } from '../../utils/firebase/firebase'

const Header: React.FC = () => {
  const { currentUser } = useContext(UserContext)

  const signOutHandler = async (e: any) => {
    e.preventDefault()
    await signOutUser()
  }

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <>
            <a onClick={signOutHandler}>SIGN OUT &nbsp;</a>
            <span>{currentUser.displayName || currentUser.email}</span>
          </>
        ) : (
          <Link className="option" to="/auth">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
