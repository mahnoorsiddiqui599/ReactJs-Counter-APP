import { useState } from "react";
import "./App.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <div className="card">
        <h2>Counter App</h2>

        <div className="count-box">
          {count}
        </div>

        <div className="buttons">
          <button className="btn minus" onClick={() => setCount(count - 1)}>
            -
          </button>

          <button className="btn reset" onClick={() => setCount(0)}>
            Reset
          </button>

          <button className="btn plus" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
