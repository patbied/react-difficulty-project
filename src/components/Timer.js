import { useEffect, useState } from "react"
import Button from "../ui/Button"
import Form from "../ui/Form"
import '../styles/Common.css'

const Timer = (props) => {

    const [hours, setHours] = useState(props.hours)
    const [minutes, setMinutes] = useState(props.minutes)
    const [seconds, setSeconds] = useState(props.seconds)
    const [completed, setCompleted] = useState(true)
    const [timerState, setTimerState] = useState(0)
    const switchTimerState = () => {
        if (timerState === 1){
            setTimerState(0)
        } else if (timerState === 0){
            setTimerState(1)
        }
    }
    const resetTimer = () => {
        setHours(0)
        setMinutes(0)
        setSeconds(0)
        setTimerState(0)
        setCompleted(true)
    }
    const startTimer = (e) => {
        e.preventDefault()
        setCompleted(false)
        
    }
    useEffect(() => {
        const decreaseTimeInterval = setInterval(() => {
            if (timerState === 1){
                if (hours <=0 && minutes <=0 && seconds <=0 ){
                    return 
                } else {
                setSeconds((prevSeconds) => prevSeconds-1)
                if (hours >= 1 && minutes <= 0 && seconds <= 0){
                    setHours(prevHours => prevHours-1)
                    setMinutes(59)
                    setSeconds(59)
                    console.log("top")
                }
                else if (seconds <= 0){
                    setMinutes(prevMins => prevMins-1)
                    setSeconds(59)
                    console.log("bottom")
                }    
              
              
            }} 

        }, 1000); 
      
     
        return () => {
            console.log("clean up")
            clearInterval(decreaseTimeInterval)
            
        }
    },[timerState, hours,minutes,seconds])

    if (completed){
        return (
            <>
            <Form>
        <div className="form-div"> 
        <label htmlFor="Hours">Hours</label>
        <input className="form-input" id="Hours" name="Hours" type="text"></input>
        </div>
        <div className="form-div"> 
        <label htmlFor="Hours">Minutes</label>
        <input className="form-input" id="Minutes" name="Minutes" type="text"></input>
        </div>
        <div className="form-div"> 
        <label htmlFor="Hours">Seconds</label>
        <input className="form-input" id="Seconds" name="Seconds" type="text"></input>
        </div>
        <Button onClick={startTimer}>Set time</Button>
        </Form>
            </>
            )
    }
    else if (!completed){
        return (
            <>
            
            <p>{hours<10 ? '0'+hours : hours}:{minutes<10 ? '0'+minutes : minutes}:{seconds < 10 ? '0'+seconds : seconds}</p>
            {timerState === 0 && !completed ? <Button onClick={switchTimerState}>Start</Button> : <Button onClick={switchTimerState}>Stop</Button>}
            {timerState === 0  && <Button onClick={resetTimer}>Restart</Button>}
            </>
        )
    }
   
}

export default Timer