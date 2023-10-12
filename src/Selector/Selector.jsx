import {useEffect, useState} from 'react';
import "./selector.scss"
function Selector() {
    const [value, setValue] =useState("#e57373")
    useEffect(()=>{
        document.body.style.backgroundColor = value
    },[value])
    return (
        <div className="Selector">
            <select onChange={(event)=>{setValue(event.target.value)}}>
                <option value="#e57373">#e57373</option>
                <option value="#40ecd2">#40ecd2</option>
                <option value="#ece577">#ece577</option>
            </select>
            <p>{value}</p>
        </div>
    );
}

export default Selector;