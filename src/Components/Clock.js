import React from 'react'

const Clock = ({timerDays,timerHours,timerMunits,timerSeconds}) => {
  return (
    <>
        <section className="timer-container">
            <section className="timer">

                <div className="clock">
                    <section>
                       <p>{timerDays}</p>
                       <small>Days</small> 
                    </section>
                    <span>:</span>

                    <section>
                       <p>{timerHours}</p>
                       <small>Hours</small> 
                    </section>
                    <span>:</span>

                    <section>
                       <p>{timerMunits}</p>
                       <small>Munits</small> 
                    </section>
                    <span>:</span>

                    <section>
                       <p>{timerSeconds}</p>
                       <small>Seconds</small> 
                    </section>
                </div>
            </section>
        </section>
    </>
  )
}

Clock.defaultProps={
    timerDays:10,
    timerHours:10,
    timerMunits:10,
    timerSeconds:10,

}

export default Clock;