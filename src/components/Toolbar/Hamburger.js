import React from 'react'
import Logo from './Logo'
const hamburger=(props)=>{
    return(
        <Logo clicked={props.clicked}></Logo>
    )
}

export default hamburger;