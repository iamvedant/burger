import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger=(props)=>
{
    const transformedIngredients=Object.keys(props.ingredients).map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=><BurgerIngredient key={igKey + i} type={igKey}/>)
    });

    let check=0;
    Object.values(props.ingredients).map(element=>
        check+=element)
    let addTag=null;
    if(check===0)
    {
        addTag=(
            <p>Please Add Some Ingredients</p>
        )
    }
    

    return (
        <div className={classes.Burger}>
            
            <BurgerIngredient type="bread-top"/>
            {addTag}
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;