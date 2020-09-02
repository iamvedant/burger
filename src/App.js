import React, { Component } from "react";
import Layout from "./components/Layout/Layout";

import BurgerBuilder from "./containers/BurgerBuilder";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";

import Orders from './components/Orders/Orders'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        
          <Switch>
            <Route
              path="/checkout"
              component={(props)=><Layout {...props}><Checkout prevProps={props}></Checkout></Layout>}
            ></Route>
            
            <Route path="/orders" component={(props)=><Layout {...props}><Orders {...props}></Orders></Layout>}></Route>
            <Route path="/" component={(props)=><Layout {...props}><BurgerBuilder {...props}></BurgerBuilder></Layout>}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
