import React, { Component } from 'react'
import Order from './Order'
import Axios from '../../axios-orders'
import Spinner from '../UI/Spinner';

class Orders extends Component{

    state={
        orders:null
    }

    componentDidMount(){

        const storeOrders=[];
       
        Axios.get('/order.json').then(
            (res)=>{
                for(let i of Object.keys(res.data)){
                    storeOrders.push({...res.data[i], id: i})
                }

                this.setState({
                    orders: storeOrders
                })

                console.log(storeOrders)
            }
        ).catch(err=>{
            console.log(err)
        })
    }
    render(){
        // console.log("Opened",this.props)
        let order=<Spinner></Spinner>

        if(this.state.orders){
            order=this.state.orders.map((order, index)=>{
                return(
                <Order orderValue={order.amountPaid} serial={index+1} key={order.id} ingredients={order.ingredients}></Order>)
            })
        }
        return(
            <div>
                {order}
            </div>
        )
    }
}

export default Orders;