import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Restaurants from './pages/Restaurants/Restaurants';
import Restaurant from './pages/Restaurant/Restaurant';
import Basket from "./pages/Basket/Basket";
import Checkout from './pages/Checkout/Checkout';
import Demo from './pages/Demo/Demo/Demo';
// import Header from "./Header";
// import SignUp from "./SignUp";



class App extends Component {
  render() {
    console.log('app render test')

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurants" component={Restaurants} />
          <Route path="/restaurant/:id/:name/:fee" component={Restaurant} />
          <Route path="/basket/:id/:name/:fee" component={Basket} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/demo" component={Demo} />



        </Switch>
      </Router>
    );
  }
}

export default App;
