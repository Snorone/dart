import Counter from "../../components/counter/Counter";
import "./aroundTheWorld.css";

export default function AroundTheWorld() {
  const buttons = Array.from({ length: 20 }, (_, i) => 20 - i);

  return (
    <div className="main-div">
      <div className="dart-board">
        <h1>Around The World</h1>
      </div>
      <div className="button-container">
        {buttons.map((num) => (
          <Counter key={num} num={num} />
        ))}
      </div>
    </div>
  );
}
