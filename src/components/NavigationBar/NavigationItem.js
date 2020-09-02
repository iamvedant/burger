import React from 'react'
import classes from './NavigationItem.module.css'
import {Link} from 'react-router-dom'

const navItem=(props)=>{
    const arr=[classes.ListItem,classes.active]
    // console.log(props)
    if(props.pass===true)
    {
        return(
            <li >
        <Link to={props.path} className={classes.ListItemTwo}>{props.children}</Link>
        </li>);
    
    }
    else
    return(
        <li className={props.active?arr.join(' '):classes.ListItem}>
        {/* <li className={classes.ListItem}>      */}
            <Link to={props.path} className={classes.ListItemTwo}>{props.children}</Link>
        </li>
        );
}

export default navItem;

    