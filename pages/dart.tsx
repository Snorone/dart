import Counter from "../components/counter/Counter";
import "./Dart.css";

export default function Dart() {
  const buttons = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="main-div">
      <div className="dart-board">
        <h1>Dart</h1>
      </div>
      <div className="button-container">
        {buttons.map((num) => (
          <Counter key={num} num={num} />
        ))}
      </div>
    </div>
  );
}
