import React, { Component } from 'react'
import Burger from '../Burger/Burger'
import classes from './checkout.module.css'
import Button from '../Burger/Button'
import Form from '../Order-Form/Form'
import Backdrop from '../Burger/Backdrop'
import axios from '../../axios-orders'
class Checkout extends Component{

    state={
        checkout: false,
        loading: false,
        success: false,
        error: false,
    }
    ingredients={
        meat: 1,
        bacon: 1,
        cheese: 1,
        salad: 1
    }

    goBack=()=>{
        console.log(this.props.prevProps.history.goBack())
    }   

    proceedToCheckout=()=>{
        this.setState({
            checkout: true
        })
    }
    hideBackdrop=(event)=>{
        event.preventDefault()
        // console.log(event);
        this.setState({
            checkout: false
        })
    }

    placeOrder=(event)=>{
        event.preventDefault();

    }

    Submit=(event)=>{
        event.preventDefault();
        let name = document.getElementById('input-one').value;
        let email = document.getElementById('input-two').value;
        let street = document.getElementById('input-three').value;
        let zip = document.getElementById('input-four').value;

        console.log(name, email, street, zip);

    this.setState({
        loading: true
    });
      axios.post("/order.json", {
        ingredients: { ...this.ingredients },
        customerName: name,
        deliverSpeed: "fastest",
        Address: street,
        ZipCode: zip,
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
            checkout: false,
          });
          this.props.prevProps.history.replace('/');
        }, 2000);

        console.log("Placed Order")
      })
      
      .catch((err) => {
        // this.setState({
        //   loading: false,
        //   success: false,
        //   submit: true,
        //   error: true,
        // });
        // setTimeout(() => {
        //   this.setState({
        //     submit: false,
        //     error: false,
        //   });
        // }, 2000);
        console.log(err)
      });
    }
    render(){

    // console.log('Checkout',this.props.prevProps);
    if(this.props.prevProps.location.search!==''){
    let derivedIngredientsState=this.props.prevProps.location.search.slice(1)
    derivedIngredientsState=derivedIngredientsState.split('&')

    for (let i of derivedIngredientsState){
        let arr = i.split('=')
        this.ingredients[arr[0]]=Number(arr[1])

    }}
    let backdrop=null;
    if(this.state.checkout===true){
        backdrop=<Backdrop cancelSubmit={this.hideBackdrop} show={true}></Backdrop>
    }
    return(
        <div className={classes.checkout}>
            <h1>We Hope It Tastes Well!</h1>
            <Burger ingredients={this.ingredients}></Burger>
            <br></br>
            <Button clicked={this.goBack} btnType='danger'>BACK</Button>
            <Button clicked={this.proceedToCheckout} prevProps={this.props.prevProps} btnType='continue'>CONTINUE</Button>
            <Form isSuccess={this.state.success} isLoading={this.state.loading} Submit={(event)=>this.Submit(event)} Cancel={(event)=>this.hideBackdrop(event)} isShown={this.state.checkout}></Form>
            {backdrop}
        </div>
    )
    }
}

export default Checkout