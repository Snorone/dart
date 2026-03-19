import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Home from "./pages/home/home";
import AroundTheWorld from "./pages/aroundTheWorld/aroundTheWorld";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aroundtheworld" element={<AroundTheWorld />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
