import React from 'react'
import classes from './NavigationItem.module.css'


const navItem=(props)=>{
    const arr=[classes.ListItem,classes.active]
    if(props.pass===true)
    {
        return(
            <li className={classes.ListItemTwo}>
        {props.children}
        </li>);
    
    }
    else
    return(
        <li className={props.active?arr.join(' '):classes.ListItem}>
        {/* <li className={classes.ListItem}>      */}
            {props.children}
        </li>
        );
}

export default navItem;

    