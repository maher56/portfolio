import React , { useState , useEffect }from 'react'
import Heading from './Heading'
const Goals = () => {
    const [boxes , setBoxes] = useState([]);
    useEffect(()=> {
        const data = require("../data.json").exp;
        setBoxes(data);
    } , [boxes])
    return (
        <div className='exp' id='goals'>
            <Heading text={"my experience"}/>
            <div className='container'>
                <div className='body'>
                    {boxes.map((box , index) => {
                        return (<div className='box' key={index}>
                            <h3>{box.name}:</h3>
                            <div className='percent'><span style={{width: box.percent}}>{box.percent}</span></div>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Goals
