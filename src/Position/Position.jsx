import { useState } from 'react';
import './position.scss';

function Position() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(prevState => prevState + 1);
    };

    const updateMousePosition = (e) => {
        setWidth(e.clientX);
        setHeight(e.clientY);
    };

    return (
        <div className="Position" onMouseMove={updateMousePosition}>
            <p>You clicked {count} times</p>
            <button onClick={inc}>Click me</button>
            <p>X position: {width}</p>
            <p>Y position: {height}</p>
        </div>
    );
}

export default Position;
