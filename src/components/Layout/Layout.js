import React, { Component } from 'react';
import classes from './Layout.module.css'
import Toolbar from '../Toolbar/Toolbar'
import Aux from '../../hoc/Auxiliary';
import Logo from '../Toolbar/Logo';
import Navigation from '../NavigationBar/NavigationList';
import Backdrop from '../Burger/Backdrop'
import NavList from '../NavigationBar/NavigationItem';

import Menu from '../Toolbar/Hamburger'
import SideDrawer from '../Sidebar/SideBar'
class layout extends Component
{

    state={
        SideDrawer: false
    }

    ToggleSideBar=()=>{
        this.setState({
            SideDrawer: !(this.state.SideDrawer)
        })
    }
    render(){
        console.log(this.props)
        return(
    <Aux>
    
        <Toolbar>
            <Menu clicked={this.ToggleSideBar} ></Menu>
            <Backdrop doit={true} clicked={this.ToggleSideBar} show={this.state.SideDrawer}></Backdrop>
            <SideDrawer show={this.state.SideDrawer}>
                <Logo pass={true}></Logo>
            <Navigation pass={true}>
                <NavList path="/" pass={true} active={true}>Burger Builder</NavList>

                <NavList path="/orders" pass={true}>Orders</NavList>
            </Navigation>
            </SideDrawer>
            <Navigation>
                <NavList active={this.props.location.pathname==='/'} path="/">Burger Builder</NavList>

                <NavList active={this.props.location.pathname==='/orders'} path="/orders">Orders</NavList>
            </Navigation>
            
        </Toolbar>
        
        
        <main className={classes.Content}>
            {this.props.children}
        </main>
    </Aux>);
    }
};

export default layout;