import React from 'react'
import classes from './Backdrop.module.css'


const backdrop=(props)=>
{
    let back=null;
    // const arr=[classes.Backdrop, classes.BackdropTwo]
    if(props.show===true)
    back=(<div onClick={props.doit?props.clicked:props.cancelSubmit} className={classes.Backdrop}></div>);
    return(
        // {back}
        back
    )
}

export default backdrop;