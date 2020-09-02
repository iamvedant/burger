import React, { Component } from 'react'
import classes from './Order.module.css'

class Order extends Component{

    
    render(){
        let item=null;
        item=Object.keys(this.props.ingredients).map(ig=>{
            return(
                <li className={classes.listItem} key={ig}>{ig}({this.props.ingredients[ig]})</li>
            )
        })
        return(
            <div className={classes.order}>
                <h1>Order {this.props.serial}</h1>
                <div className={classes.section}>
                    <ul className={classes.orderList}>
                       {item}
                    </ul>

                    <div>
                        <h1>Amount Paid: $30</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Order;