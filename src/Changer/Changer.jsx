import {useState} from 'react';
import "./changer.scss"

function Changer() {
    const [count, setCount] = useState(0)
    const [lucky, setLuck] = useState()
    const [name, setName] = useState("y")
    const inc = () => {
        setCount(prevState => prevState + 1)
        setName(prevState => prevState + "y")
    }
    const luck = () => {
        setLuck(Math.floor(Math.random() * 100))
    }

    return (
        <div className="Changer">
            <p>Welcome Cool Gu{name}</p>
            <p>Your lucky number is {lucky}</p>
            <p>Name has changed {count} times</p>
            <button onClick={inc}>Change name</button>
            <button onClick={luck}>Get your lucky number</button>
        </div>
    );
}

export default Changer;