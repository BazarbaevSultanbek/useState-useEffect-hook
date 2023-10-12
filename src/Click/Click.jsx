import {useEffect, useState} from 'react';
import "./Click.scss"

function Click() {
    const [count, setCount] = useState(4)
    const [items, setItem] = useState(["Item 1", "Item 2", "Item 3"])
    const AddItems = () => {
        setCount(prevState => prevState + 1)
        setItem(prevState => [...prevState, `Item ${count}`])
    }
    return (
        <div className="Click">
            <h4>Clicked nothing</h4>
            <div className="Click-nav">
                <ul className="Click-nav-items">
                    {items.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <button onClick={AddItems}>Add</button>
            </div>
        </div>
    );
}

export default Click;