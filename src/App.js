import logo from "./logo.svg";
import "./App.css";

function App() {
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

      {items.map((item) => {
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
