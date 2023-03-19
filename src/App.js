import { useState,useEffect } from "react";
import Clock from "./Components/Clock";
import './App.css';



const App=()=> {

  const [timerDays,setTimerDays] = useState();
  const [timerMunits,setTimerMunits] = useState();
  const [timerHours,setTimerHours] = useState();
  const [timerSeconds,setTimerSeconds] = useState();

  let interval;

  const startTimer= ()=>{
    const countDownDate = new Date("March 22,2023").getTime();

    interval = setInterval(()=>{
      const now = new Date().getTime();

      const distance = countDownDate-now;

      const days = Math.floor(distance / (24*60*60*1000));
      const hours = Math.floor(distance % (24*60*60*1000) / (1000*60*60));
      const munits = Math.floor(distance % (60*60*1000) / (1000*60));
      const Seconds = Math.floor(distance % (60*1000) / (1000));

      if (distance < 0){
        //stop Timer
        clearInterval(interval.current);
      }else{
        // constantly update the timer

        setTimerDays(days);
        setTimerHours(hours);
        setTimerMunits(munits);
        setTimerSeconds(Seconds);
      }


    });
  };

  useEffect (()=>{
    startTimer();
  })

  return (
    <div className="App">
    <Clock timerDays = {timerDays}
          timerHours = {timerHours}
          timerMunits = {timerMunits}
          timerSeconds = {timerSeconds}
    />
    </div>
  );
}

export default App;
