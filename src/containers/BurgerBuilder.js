import React, { Component } from "react";

import classes from "./BurgerBuilder.module.css";
import Aux from "../hoc/Auxiliary";
import Burger from "../components/Burger/Burger";
import BuildControls from "../components/Burger/BuildControls";
import PriceDashboard from "../components/Burger/CostManager";
import Modal from "../components/Burger/Modal";
import axios from "../axios-orders";
import Spinner from "../components/UI/Spinner";

import FullLoader from '../components/UI/FullLoader'
class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: null,
      submit: false,
      loading: false,
      success: false,
      error: false,
    };

    
  }
  
  cost = {
    salad: 4,
    bacon: 20,
    cheese: 10,
    meat: 30,
  };

  componentDidMount() {
    axios.get("/ingredients.json").then((response) => {
        console.log(response.data);
      this.setState({
        ingredients: { ...response.data},
      });
      
    });
  }

  IngredientsAdder = (item) => {
    const newIngredients = this.state.ingredients;
    newIngredients[item] = newIngredients[item] + 1;
    this.setState({
      newIngredients,
    });
  };

  loadingStateChanger = () => {
    this.setState({
      loading: !this.state.loading,
    });

    axios
      .post("/order.json", {
        ingredients: { ...this.state.ingredients },
        customerName: "Vedant Gupta",
        deliverSpeed: "fastest",
        Address: "83/2 Gandhi Gram",
        modeOfPayment: "Online(Paid)",
      })
      .then((res) => {
        this.setState({
          loading: false,
          success: true,
        });
        setTimeout(() => {
          this.setState({
            loading: false,
            success: false,
            submit: false,
          });
        }, 2000);
      })
      .catch((err) => {
        this.setState({
          loading: false,
          success: false,
          submit: true,
          error: true,
        });
        setTimeout(() => {
          this.setState({
            submit: false,
            error: false,
          });
        }, 2000);
      });
  };

  IngredientsRemover = (item) => {
    const newIngredients = this.state.ingredients;
    if (newIngredients[item] > 0)
      newIngredients[item] = newIngredients[item] - 1;

    this.setState({
      newIngredients,
    });
  };

  cancelSubmit = () => {
    this.setState({ submit: false });
  };

  isDisabled = () => {
    let sum = 0;
    // console.log("hello there");
    Object.values(this.state.ingredients).map((val) => {
      sum += val;
      return 0;
    });
    if (sum === 0) return true;
    else return false;
  };

  Submit = () => {
    this.setState({ submit: true });
  };
  render() {
    let dock = (<FullLoader>
        <Spinner />
    </FullLoader>)
      if(this.state.ingredients)
        {
            dock = (
        <Aux>
          <Burger ingredients={this.state.ingredients}></Burger>
          <PriceDashboard
            ingredients={this.state.ingredients}
            cost={this.cost}
          ></PriceDashboard>

          <BuildControls
            ingredients={this.state.ingredients}
            click={this.IngredientsAdder}
            clickRev={this.IngredientsRemover}
          />
          <div className={classes.checkoutHolder}>
            <button
              onClick={this.Submit}
              disabled={this.isDisabled()}
              className={classes.checkout}
            >
              ORDER NOW
            </button>
          </div>
          <Modal
            error={this.state.error}
            success={this.state.success}
            onloading={this.state.loading}
            load={this.loadingStateChanger}
            cancelSubmit={this.cancelSubmit}
            show={this.state.submit}
            ingredients={this.state.ingredients}
            cost={this.cost}
          />
        </Aux>
      );
        }
    return (dock);
  }
}

export default BurgerBuilder;
