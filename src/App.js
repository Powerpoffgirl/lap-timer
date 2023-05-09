import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showLap, setShowLap] = useState(0);
  const [items, setItems] = useState([]);

  const timeInHours = Math.floor(time / 360000);
  const timeInMinutes = Math.floor((time % 360000) / 6000);
  const timeInSeconds = Math.floor((time % 6000) / 100);
  const timeInMilliseconds = Math.floor(time % 100);

  const showLapInHours = Math.floor(time / 360000);
  const showLapInMinutes = Math.floor((time % 360000) / 6000);
  const showLapInSeconds = Math.floor((time % 6000) / 100);
  const showLapInMilliseconds = Math.floor(time % 100);

  const addItem = () => {
    const newItem =
      showLapInHours +
      ":" +
      showLapInMinutes +
      ":" +
      showLapInSeconds +
      ":" +
      showLapInMilliseconds;
    console.log(newItem);
    setShowLap(time);
    setItems([...items, newItem]);
  };
  console.log(items, "items");

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
    setShowLap(time);
    setIsRunning(false);
  };

  // Lap timer
  const lapTimer = () => {
    setShowLap(time);
    addItem();
  };

  // Reset timer
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
    setItems([]);
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

      {items.length > 0 &&
        items.map((item) => {
          return (
            <div>
              <li>{item}</li>
            </div>
          );
        })}
    </div>
  );
}

export default App;
