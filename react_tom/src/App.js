import './App.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import ProductList from './pages/ProductList'
import ShopList from './pages/ShopList'
import ProductData from './pages/ProductData'
import ProductAdd from './pages/ProductAdd'
import ProductEdit from './pages/ProductEdit'
import { withRouter } from 'react-router'
function App() {
  const [isAuth, setisAuth] = useState(false)

  return (
    <Router>
      <>
        <Switch>
          <Route path="/ProductList/:sid">
            <ProductList />
          </Route>
          <Route path="/ShopList/:sid?/">
            <ShopList isAuth={isAuth} />
          </Route>
          <Route path="/ProductData/:sid?">
            <ProductData />
          </Route>
          <Route path="/ProductAdd">
            <ProductAdd />
          </Route>
          <Route path="/ProductEdit/:sid">
            <ProductEdit />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
