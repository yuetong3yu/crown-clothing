import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './index.scss'
import { UserContext } from '../../contexts'

const Header: React.FC = () => {
  const { currentUser } = useContext(UserContext)

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/auth">
          {currentUser
            ? currentUser.user.displayName || currentUser.user.email
            : 'SIGN IN'}
        </Link>
      </div>
    </div>
  )
}

export default Header
