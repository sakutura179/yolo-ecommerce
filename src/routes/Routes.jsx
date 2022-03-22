import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import About from '../pages/About'
import Policy from '../pages/Policy'
import Contact from '../pages/Contact'
import Checkout from '../pages/Checkout'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/catalog" component={Catalog} />
            <Route path="/catalog/:slug" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/about" component={About} />
            <Route path="/policy" component={Policy} />
            <Route path="/contact" component={Contact} />
            <Route path="/checkout" component={Checkout} />
        </Switch>
    )
}

export default Routes