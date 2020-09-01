import React from 'react'
import classes from './Logo.module.css'
import BurgerLogo from '../../assets/burger.png'

const logo=(props)=>{
    return(
        <div onClick={props.clicked} className={classes.ImageHolder}>
            <img  alt="Logo" className={classes.Image} src={BurgerLogo}></img>
        </div>
    )
}

export default logo;