import { useEffect, useRef, useState } from "react"
import Button from "../ui/Button"
import Form from "../ui/Form"
import '../styles/Common.css'
import Error from "../ui/Error"
const Timer = (props) => {

    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [completed, setCompleted] = useState(true)
    const [timerState, setTimerState] = useState(0)
    const [error, setError] = useState('')


    //Update clock values
    const updateSeconds = (e) => {
        if (e.target.value >=60 || e.target.value <0){
            setError('Seconds must be between 0-59')
            return
        } else {
            setError('')
            setSeconds(e.target.value)
        }
        
    }
    const updateMinutes = (e) => {
        if (e.target.value >=60 || e.target.value <0){
            setError('Minutes must be between 0-59')
            return
        } else {
            setError('')
            setMinutes(e.target.value)
        }
        
    }
    const updateHours = (e) => {
         
            setError('')
            setHours(e.target.value)
        
        
    }
    //Switch between stop and start
    const switchTimerState = () => {
        if (timerState === 1){
            setTimerState(0)
        } else if (timerState === 0){
            setTimerState(1)
        }
    }
    //Restarts clock
    const resetTimer = () => {
        setHours(0)
        setMinutes(0)
        setSeconds(0)
        setTimerState(0)
        setCompleted(true)
    }
    //Starts clock
    const startTimer = (e) => {
        e.preventDefault()
        if (hours === 0 && minutes === 0 && seconds === 0){
            setError("Values cannot be empty")
            return
        }
        setError('')
        setCompleted(false)
        setTimerState(1)

        
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

  
        return (
            <>
        {completed && <> 
            <Form>
        <div className="form-div"> 
        <label htmlFor="Hours">Hours</label>
        <input className="form-input" onChange={updateHours} value={hours} id="Hours" name="Hours" type="text"></input>
        </div>
        <div className="form-div"> 
        <label htmlFor="Hours">Minutes</label>
        <input className="form-input" onChange={updateMinutes} value={minutes} id="Minutes" name="Minutes" type="text"></input>
        </div>
        <div className="form-div"> 
        <label htmlFor="Hours">Seconds</label>
        <input className="form-input" onChange={updateSeconds} value={seconds} id="Seconds" name="Seconds" type="text"></input>
        </div>
        <Button onClick={startTimer}>Set time</Button>
        </Form>
        </>}

        {!completed && <> 
        <p>{hours<10 ? '0'+hours : hours}:{minutes<10 ? '0'+minutes : minutes}:{seconds < 10 ? '0'+seconds : seconds}</p>
        {timerState === 0 && !completed ? <Button onClick={switchTimerState}>Start</Button> : <Button onClick={switchTimerState}>Stop</Button>}
        {timerState === 0  && <Button onClick={resetTimer}>Restart</Button>}
        </> } 
        
        {error && <Error err={error} />}
        </>
        )
   
}

export default Timer