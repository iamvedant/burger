import React from 'react'

const summary =(props)=>
{
    let summaryCheck=Object.keys(props.ingredients).map(item=>
        {
            return(
                    <li>
                        <p><strong>{item}</strong>: {props.ingredients[item]}</p>
                    </li>
            )
        })
    return (
        <div>
            <ul>
                {summaryCheck}
            </ul>
        </div>
    )
}

export default summary;