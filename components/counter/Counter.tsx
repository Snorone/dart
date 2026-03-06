import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(5);
  return (
    <>
      <button
        className="counter-button"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </>
  );
}
export default Counter;
