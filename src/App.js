import { useState } from "react";
import Clock from "./Components/Clock";



const App=()=> {

  const [timerDays,setTimerDays] = useState();
  const [timerMunits,setTimerMunits] = useState();
  const [timerHours,setTimerHours] = useState();
  const [timerSeconds,setTimerSeconds] = useState();

  
  return (
    <div className="App">
    <Clock/>
    </div>
  );
}

export default App;
