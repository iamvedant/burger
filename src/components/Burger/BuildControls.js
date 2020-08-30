import React from 'react'
import classes from './BuildControls.module.css'

const controls=(props)=>{
    const controls=Object.keys(props.ingredients).map((item,index)=>{
        const l=item.split('')
        l[0]=l[0].toUpperCase()
        // item=l.join('')
        let disabled=false;
        if(props.ingredients[item]===0)
        disabled=true;
        return(
            <div className={classes.AdderBlock}>
                <p>{l.join('')}</p>
                <button id={classes.btnOne} className={classes.btn} onClick={()=>props.click(item)}>+</button>
                <button disabled={disabled} className={classes.btn} onClick={()=>props.clickRev(item)}>-</button>
                <p className={classes.inp}> {props.ingredients[item]} </p>
            </div>
            );
    }
    );
    return(
        <div className={classes.Block}>
            {controls}     
        </div>
    )
}

export default controls
