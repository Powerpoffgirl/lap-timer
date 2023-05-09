import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  const timeInHours = Math.floor(time / 360000);
  const timeInMinutes = Math.floor((time % 360000) / 6000);
  const timeInSeconds = Math.floor((time % 6000) / 100);
  const timeInMilliseconds = Math.floor(time % 100);

  const addItem = () => {
    const newLap =
      timeInHours +
      ":" +
      timeInMinutes +
      ":" +
      timeInSeconds +
      ":" +
      timeInMilliseconds;
    console.log(newLap);
    setLaps([...laps, newLap]);
  };
  console.log(laps, "Laps");

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

  // Start timer
  const startTimer = () => {
    setIsRunning(true);
  };

  // Stop timer
  const stopTimer = () => {
    setIsRunning(false);
  };

  // Lap timer
  const lapTimer = () => {
    addItem();
  };

  // Reset timer
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  return (
    <div className="App">
      <h1>Lap Timer</h1>
      <p>
        {timeInHours}:{timeInMinutes}:{timeInSeconds}:{timeInMilliseconds}{" "}
      </p>
      <span>
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={stopTimer}>Stop Timer</button>
        <button onClick={lapTimer}>Lap Timer</button>
        <button onClick={resetTimer}>Reset Timer</button>
      </span>

      {laps.length > 0 &&
        laps.map((lap) => {
          return (
            <div>
              <li>{lap}</li>
            </div>
          );
        })}
    </div>
  );
}

export default App;
