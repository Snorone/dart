import Counter from "../components/counter/Counter";
import "./App.css";
import NavBar from "../components/navbar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="main">
        <Counter />
        <Counter />
      </div>
    </div>
  );
}

export default App;
