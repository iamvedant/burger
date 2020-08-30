import React from 'react'
import classes from './Hamburger.module.css'
const hamburger=(props)=>{
    return(
        <div onClick={props.clicked} className={classes.iconHolder}>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
        </div>
    )
}

export default hamburger;