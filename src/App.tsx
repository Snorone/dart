import Dart from "../pages/Dart";
import "./App.css";
import NavBar from "../components/navbar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="main">
        <Dart />
      </div>
    </div>
  );
}

export default App;
