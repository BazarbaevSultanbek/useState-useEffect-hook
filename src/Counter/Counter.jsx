import {useState} from 'react';
import "./counter.scss"

function Counter() {
    const local = localStorage.getItem("count")
    const [count, setCount] = useState(JSON.parse(local));
    if (local === null) {
        localStorage.setItem("count", 0);
    } else {
        localStorage.setItem("count", count)
    }
    const inc = () => {
        setCount(prevState => prevState + 1)
    }

    const dec = () => {
        setCount(prevState => prevState - 1)
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <div className="Counter">
            <h3>{count}</h3>
            <div className="Counter-buttons">
                <button onClick={dec}>-1</button>
                <button onClick={inc}>+1</button>
                <button onClick={reset}>Reset</button>
            </div>
            <p>Count from Local Store</p>
        </div>
    );
}

export default Counter;