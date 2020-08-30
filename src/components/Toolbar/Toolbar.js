import React from 'react'
import classes from './Toolbar.module.css'
const toolbar=(props)=>
{

    return(
        <div className={classes.Toolbar}>{props.children}</div>
    );
}

export default toolbar;