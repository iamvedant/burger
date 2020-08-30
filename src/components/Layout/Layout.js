import React, { Component } from 'react';
import classes from './Layout.module.css'
import Toolbar from '../Toolbar/Toolbar'
import Aux from '../../hoc/Aux';
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
        return(
    <Aux>
    
        <Toolbar>
            <Menu clicked={this.ToggleSideBar} ></Menu>
            <Backdrop doit={true} clicked={this.ToggleSideBar} show={this.state.SideDrawer}></Backdrop>
            <SideDrawer show={this.state.SideDrawer}>
                <Logo pass={true}></Logo>
            <Navigation pass={true}>
                <NavList pass={true} active={true}>Burger Builder</NavList>

                <NavList pass={true}>CheckOut</NavList>
            </Navigation>
            </SideDrawer>
            <Logo></Logo>
            <Navigation>
                <NavList active={true}>Burger Builder</NavList>

                <NavList>CheckOut</NavList>
            </Navigation>
            
        </Toolbar>
        
        
        <main className={classes.Content}>
            {this.props.children}
        </main>
    </Aux>);
    }
};

export default layout;