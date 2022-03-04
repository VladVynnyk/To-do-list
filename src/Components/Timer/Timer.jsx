import React, {useEffect, useState} from 'react';
import classes from './Timer.module.css'

const Timer = () => {
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);

    useEffect(()=>{
        let interval = setInterval(()=>{
            clearInterval(interval);

            if (seconds === 0){
                if(minutes !==0){
                    setSeconds(59);
                    setMinutes(minutes-1);
                } else {
                    let minutes = displayMessage ? 24 : 4;
                    let seconds = 59;

                    setSeconds(seconds);
                    setMinutes(minutes);
                    setDisplayMessage(!displayMessage);
                }
            } else {
                setSeconds(seconds - 1)
            }
        }, 1000);
    }, [seconds])

    const timerMinutes = minutes < 10 ? `0${minutes}`: minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}`:seconds;

    return (
        <div className={classes.timer}>
            <div className={classes.message}>
                {displayMessage && <div>Break time! New session starts in:</div>}
            </div>
            <div className={classes.timer}>{timerMinutes}:{timerSeconds}</div>
        </div>
    );
};

export default Timer;