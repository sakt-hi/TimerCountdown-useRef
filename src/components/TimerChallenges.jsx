import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenges = ({title, targetTime}) => {
    
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining,setTimeRemaining] = useState(targetTime*1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime*1000

    if(timeRemaining<=0){
        clearInterval(timer.current);
        dialog.current.open()
    }

    function handleReset(){
        setTimeRemaining(targetTime*1000);
    }

    function handleStart(){
        timer.current = setInterval(()=>{
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining-10)
        },10)
    }
    function handleStop(){
        dialog.current.open();
        clearInterval(timer.current);
    }
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className={`challenge ${timerIsActive ? 'challenge-active':''} `}>
        <h2>{title}</h2>
        <p className="challenge-time">
          <span className="material-symbols-outlined">timer</span>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : ""}>
          {timerIsActive ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenges;
