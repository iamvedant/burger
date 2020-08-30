import React from 'react'
import classes from './Logo.module.css'
import BurgerLogo from '../../assets/burger.png'

const logo=(props)=>{
    return(
        <div style={props.pass?{position:"relative"}:{position:"relative",left: "80px"}} className={classes.ImageHolder}>
            <img  alt="Logo" className={classes.Image} src={BurgerLogo}></img>
        </div>
    )
}

export default logo;