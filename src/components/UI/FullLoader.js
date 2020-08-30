import React from 'react'

import classes from './FullLoader.module.css'

const FullLoader=(props)=>{
    return(<div className={classes.Full}>{props.children}</div>);
}

export default FullLoader;