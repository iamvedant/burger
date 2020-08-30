import React from 'react'
import classes from './Sidebar.module.css'

const sidebar=(props)=>{
    const arr=[classes.sidebarHide,classes.sidebarShow]
    return(

            // <Backdrop show={props.show}></Backdrop>
            
                <div className={props.show?arr.join(' '):classes.sidebarHide}>
                    {props.children}
                </div>
        
        
    )
}

export default sidebar;