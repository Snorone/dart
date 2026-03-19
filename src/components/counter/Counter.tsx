import "./Counter.css";
import { useCounterStore } from "../../store/counterStore";

interface CounterProps {
  num: number;
}

function Counter({ num }: CounterProps) {
  const count = useCounterStore((state) => state.counts[num] || 0);
  const increment = useCounterStore((state) => state.increment);
  const isComplete = count >= 3;

  return (
    <div className="counter-box">
      <button
        className="counter-button"
        onClick={() => !isComplete && increment(num)}
        disabled={isComplete}
      >
        <p className="number-style">{num}</p>

        <br />
        <br />

        {isComplete ? <span className="checkmark">✓</span> : count}
      </button>
    </div>
  );
}
export default Counter;
