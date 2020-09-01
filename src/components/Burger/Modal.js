import React from 'react'
import Summary from './Summary'
import classes from './Modal.module.css'
import BUTTON from './Button'
import Backdrop from './Backdrop'
import Spinner from '../UI/Spinner'

import Aux from '../../hoc/Auxiliary'
import Check from '../UI/Check'
const TotalPrice=(cost,ingredients)=>
{
    const items=Object.keys(ingredients);
    let total=0;
    items.map(ele=>{

        total+=cost[ele]*ingredients[ele];
        return 0;
    })

    return total;
}

const classNames = [classes.modalBox, classes.disabledBox];
const giveClass=(isShown, classNames)=>{
    if(isShown==null){
        classNames[1]=classes.disabledBox
    }
    if(isShown){
        classNames[1]=classes.modalBox2;
        return classNames[0];
    }
    else{
        return classNames[1];
    }
}
const modal=(props)=>
{
    let modalPage;

    if(props.onloading){
        modalPage=(
            <Aux>
                <Backdrop cancelSubmit={props.cancelSubmit} show={props.show}></Backdrop>
                <div className={[giveClass(props.show, classNames), classes.flexDisp].join(' ')}>
                    <Spinner/>
                </div>
            </Aux>
        )
    }

    else
    if(props.success){
        modalPage=(
            <Aux>
                <Backdrop cancelSubmit={props.cancelSubmit} show={props.show}></Backdrop>
                <div className={[giveClass(props.show, classNames), classes.flexDisp].join(' ')}>
                    <Check/>
                </div>
            </Aux>
        )
    }

    else
    if(props.error){
        modalPage=(
            <Aux>
                <Backdrop cancelSubmit={props.cancelSubmit} show={props.show}></Backdrop>
                <div className={[giveClass(props.show, classNames), classes.flexDisp].join(' ')}>
                    <i className="fas fa-times"></i>
                    <p>Something Went Wrong! Please Check Your Internet Connection</p>
                </div>

               
            </Aux>
        )
    }

    else{
        modalPage=(
        <Aux>
            <Backdrop cancelSubmit={props.cancelSubmit} show={props.show}></Backdrop>
            <div className={giveClass(props.show, classNames)}>
            
                <h1>Your Order</h1>
                <p>A delicious burger with following ingredients:</p>
                <Summary ingredients={props.ingredients} cost={props.cost}></Summary>
                <p><strong>Total Price: {String.fromCharCode(8377)+TotalPrice(props.cost,props.ingredients)}</strong></p>
                <p>Continue To Checkout?</p>
                <BUTTON clicked={props.cancelSubmit} btnType='danger'>BACK</BUTTON>
                <BUTTON ingredients={props.ingredients} clicked={props.load} btnType='continue'>CONTINUE</BUTTON>
                </div>
        </Aux>
        )
    }
    
    return(
        <div>
            {modalPage}
        </div>
        
    )
}

export default modal;