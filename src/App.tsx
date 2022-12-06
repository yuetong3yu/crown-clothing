import { Switch, Route } from 'react-router-dom'

import './App.css'

import HomePage from './pages/homepage'
import ShopPage from './pages/shop'
import Authentication from './pages/authentication'
import Header from './components/header'
import Checkout from './pages/checkout'

import { CategoryProvider, UserCtx, CartProvider } from './contexts'

function App() {
  return (
    <UserCtx>
      <CategoryProvider>
        <CartProvider>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route path="/auth" component={Authentication} />
              <Route path="/checkout" component={Checkout} />
            </Switch>
          </div>
        </CartProvider>
      </CategoryProvider>
    </UserCtx>
  )
}

export default App
