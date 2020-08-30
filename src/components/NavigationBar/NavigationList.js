import React from 'react'
import classes from './NavigationList.module.css'

const NavList=(props)=>{
    return(
        <ul className={props.pass?classes.ListTwo:classes.List}>{props.children}</ul>
    );
}

export default NavList;