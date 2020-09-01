import React, { Component } from "react";

import classes from "./Form.module.css";
import Button from "../Burger/Button";

import Spinner from "../UI/Spinner";
import Aux from "../../hoc/Auxiliary";
import Check from '../UI/Check'
class form extends Component {
  render() {
    let classeNames = [classes.formContainerHidden, classes.formContainerShown];

    let fillForm = (
      <Aux>
        <h2>Enter Your Contact Data</h2>
        <form
          autoComplete="off"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            id="input-one"
            className={classes.input}
            type="text"
            placeholder="Name"
          ></input>
          <label htmlFor="input-one">Name</label>

          <input
            id="input-two"
            className={classes.input}
            type="email"
            placeholder="Email"
          ></input>
          <label htmlFor="input-two">Email</label>

          <input
            id="input-three"
            className={classes.input}
            type="text"
            placeholder="Street"
          ></input>
          <label htmlFor="input-three">Street</label>

          <input
            id="input-four"
            className={classes.input}
            type="text"
            placeholder="Postal Code"
          ></input>
          <label htmlFor="input-four">Postal Code</label>
          <Button
            clicked={(event) => this.props.Submit(event)}
            btnType="continue"
          >
            ORDER
          </Button>
          <br></br>
          <Button
            clicked={(event) => this.props.Cancel(event)}
            btnType="danger"
          >
            CANCEL
          </Button>
        </form>
      </Aux>
    );

    if(this.props.isLoading){
        fillForm=<Spinner></Spinner>
    }

    else
    if(this.props.isSuccess){
        classeNames.push(classes.flexDiv)
        fillForm=<Check></Check>
    }
    return (
      <div
        className={this.props.isShown ? classeNames.join(" ") : classeNames[0]}
      >
          {fillForm}
      </div>
    );
  }
}

export default form;
