import React from 'react'
import Burger from '../Burger/Burger'
import classes from './checkout.module.css'
import Button from '../Burger/Button'
const Checkout=(props)=>{

    const ingredients={
        meat: 1,
        bacon: 1,
        cheese: 1,
        salad: 1
    }

    const goBack=()=>{
        console.log(props.prevProps.history.goBack())
    }

    // console.log('Checkout',props.prevProps);
    if(props.prevProps.location.search!==''){
    let derivedIngredientsState=props.prevProps.location.search.slice(1)
    derivedIngredientsState=derivedIngredientsState.split('&')

    for (let i of derivedIngredientsState){
        let arr = i.split('=')
        ingredients[arr[0]]=Number(arr[1])

    }}
    return(
        <div className={classes.checkout}>
            <h1>We Hope It Tastes Well!</h1>
            <Burger ingredients={ingredients}></Burger>
            <br></br>
            <Button clicked={goBack} btnType='danger'>BACK</Button>
            <Button prevProps={props.prevProps} btnType='continue'>CONTINUE</Button>
        </div>
    )
}

export default Checkout