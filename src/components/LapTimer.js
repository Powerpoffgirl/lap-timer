import react from "react";
import { useEffect } from "react";
import { useState } from "react";

const LapTimer = () => {
  // Variables
  const [time, setTime] = useState(0); //To store the state of time
  const [isRunning, setIsRunning] = useState(false); //Store the state of the timer, whether it is running or not
  const [laps, setLaps] = useState([]); //Store all the laps

  const timeInHours = Math.floor(time / 360000);
  const timeInMinutes = Math.floor((time % 360000) / 6000);
  const timeInSeconds = Math.floor((time % 6000) / 100);
  const timeInMilliseconds = Math.floor(time % 100);

  // Method for timer

  const addLap = () => {
    const newLap =
      timeInHours +
      ":" +
      timeInMinutes +
      ":" +
      timeInSeconds +
      ":" +
      timeInMilliseconds;

    setLaps([...laps, newLap]);
  };

  useEffect(() => {
    let intervalId = null;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      });
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);
  // Operations on timer like: start, stop, lap & reset
  //   Start timer
  const startTimer = () => {
    setIsRunning(true);
  };
  // Stop timer
  const stopTimer = () => {
    setIsRunning(false);
  };
  //   lap timer
  const lapTimer = () => {
    addLap();
  };

  //   const reset timer
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  return (
    <div>
      <h1>Lap Timer</h1>
      <p>
        {timeInHours}:{timeInMinutes}:{timeInSeconds}:{timeInMilliseconds}
      </p>
      <div>
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={stopTimer}>Stop Timer</button>
        <button onClick={lapTimer}>Lap Time</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <ul>
        {laps.map((lap) => {
          return (
            <div>
              <li>{lap}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default LapTimer;
