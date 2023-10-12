import  {useState} from 'react';
import "./App.css"
import Click from "./Click/Click.jsx";
import Counter from "./Counter/Counter.jsx";
import Selector from "./Selector/Selector.jsx";
import Position from "./Position/Position.jsx";
import Changer from "./Changer/Changer.jsx";
import Time from "./Time/Time.jsx";

function App() {
    const [page, setPage] = useState("Click")

    const changePage = ()=>{
        switch (page){
            case "Click":
                document.body.style.backgroundColor = "white"
                return <Click />

            case "Time":
                document.body.style.backgroundColor = "white"
                return <Time />

            case "Changer":
                document.body.style.backgroundColor = "white"
                return <Changer />

            case "Position":
                document.body.style.backgroundColor = "white"
                return <Position />

            case "Selector":
                return <Selector />
            case "Counter":
                document.body.style.backgroundColor = "white"
                return <Counter />

        }
    }
    return (
        <div className="App">
            <h1>HomeWork(useState, useEffect)</h1>
            <div className="App-buttons">
                <button onClick={() => setPage("Click")}>Click</button>
                <button onClick={() => setPage("Time")}>Time</button>
                <button onClick={() => setPage("Changer")}>Changer</button>
                <button onClick={() => setPage("Position")}>Position</button>
                <button onClick={() => setPage("Selector")}>Color select</button>
                <button onClick={() => setPage("Counter")}>Counter</button>
            </div>
            <div className="page-content">
                {changePage()}
            </div>
        </div>
    );
}

export default App;