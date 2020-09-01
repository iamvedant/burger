import React, { Component } from "react";
import Layout from "./components/Layout/Layout";

import BurgerBuilder from "./containers/BurgerBuilder";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Layout></Layout>
          <Switch>
            <Route
              path="/checkout"
              component={(props)=><Checkout prevProps={props}></Checkout>}
            ></Route>

            <Route path="/" component={BurgerBuilder}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
