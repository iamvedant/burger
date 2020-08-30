import React from 'react'
import styles from './CostManager.module.css'
const cost=(props)=>
{
    const ing={...props.ingredients};
    const price={...props.cost};
    let finalCost=0;
    Object.keys(ing).map(item=>{
        
            finalCost+=(ing[item]*price[item])
            return 0;
        
    })
    return(
        <div className={styles.block}>
            <div className={styles.bar}><p className={styles.dash}>Total Cost: <strong>{String.fromCharCode(8377)+finalCost}</strong></p></div>
            {/* <button className={styles.btn}>Checkout</button> */}
        </div>
    )
}

export default cost;