import React from 'react'

const Heading = ({text , color}) => {
    if(color === "white")return (<h2 className='Heading' style={{color: "white"}}>{text}<span></span></h2>)
    return (<h2 className='Heading'>{text}<span></span></h2>)
}

export default Heading
