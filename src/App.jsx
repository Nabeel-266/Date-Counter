import "./App.css";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";

function App() {
  const [range, setRange] = useState(0);
  const [inputVal, setInputVal] = useState(0);
  const [isRangeGiven, setIsRangeGiven] = useState(true);

  function incrementRangeValue() {
    if (range) {
      setInputVal((prv) => prv + range);
      setIsRangeGiven(true);
    } else {
      setIsRangeGiven(false);
    }
  }

  function decrementRangeValue() {
    if (range) {
      setInputVal((prv) => prv - range);
      setIsRangeGiven(true);
    } else {
      setIsRangeGiven(false);
    }
  }

  function countDateThroughGivenInputValue() {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + inputVal);
    const givenDate = newDate.toDateString();

    if (inputVal > 0) {
      return `${inputVal} ${
        inputVal === 1 ? "day" : "days"
      } later, the date would be "${givenDate}"`;
    } else if (inputVal < 0) {
      return `${inputVal.toString().split("").slice(1).join("")} ${
        inputVal === -1 ? "day" : "days"
      } ago, the date was "${givenDate}"`;
    } else {
      return `Today is ${givenDate}`;
    }
  }

  return (
    <div className="App">
      <div className="container">
        <header className="heading">
          <h1>Date Counter</h1>
        </header>

        <section className="midArea">
          <div className="rangeArea">
            <input
              type="range"
              min={0}
              max={10}
              onChange={(e) => {
                setRange(+e.target.value);
                if (+e.target.value !== 0) {
                  setIsRangeGiven(true);
                }
              }}
            />
            <span>{range}</span>
          </div>

          <div
            className="alertMsg"
            style={{
              display: !isRangeGiven ? "block" : "none",
            }}>
            <p>Please! select the range value first</p>
          </div>

          <div className="findDateInputArea">
            <button className="decrementBtn" onClick={decrementRangeValue}>
              <FaMinus />
            </button>
            <input
              type="number"
              value={inputVal}
              onChange={(e) => {
                setInputVal(+e.target.value);
              }}
            />
            <button className="incrementBtn" onClick={incrementRangeValue}>
              <FaPlus />
            </button>
          </div>

          <div className="showDateArea">
            <p>{countDateThroughGivenInputValue()}</p>
          </div>
        </section>

        <div className="footer">
          <button
            className="resetBtn"
            onClick={() => {
              setRange(0);
              setInputVal(0);
            }}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
