import { useState } from "react";
import "./Counter.css";

interface CounterProps {
  num: number;
}

function Counter({ num }: CounterProps) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="counter-box">
        <button
          className="counter-button"
          onClick={() => setCount((count) => count + 1)}
        >
          {num}
          <br />
          <br />
          {count}
        </button>
      </div>
    </>
  );
}
export default Counter;
