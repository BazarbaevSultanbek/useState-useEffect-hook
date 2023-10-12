import {useEffect, useState} from 'react';
import "./time.scss"
function Time() {
    const [second,setSecond] = useState(new Date().getSeconds())
    const [minute,setMinute] = useState(new Date().getMinutes())
    const [hour,setHour] = useState(new Date().getHours())
    const [day,setDay] = useState(new Date().toLocaleTimeString().split(" ")[1])

    useEffect(() => {
        const interval = setInterval(()=>{
            setSecond(new Date().getSeconds())
            setMinute(new Date().getMinutes())
            setHour(new Date().getHours())
            setDay(new Date().toLocaleTimeString().split(" ")[1])
        },1000)
        return ()=>{
            clearInterval(interval)
        }
    }, [second]);
    return (
        <div className="Time">
                <div className="Time-block">
                        <h3>The time is</h3>
                        <div className="Time-block-items">
                            <span>{hour}</span>
                            <span>:</span>
                            <span>{minute}</span>
                            <span>:</span>
                            <span>{second}</span>
                            <span>{day}</span>
                        </div>
                </div>
        </div>
    );
}

export default Time;