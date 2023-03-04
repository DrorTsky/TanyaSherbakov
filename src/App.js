/** @format */

import "./App.css";
import { Home } from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import GraphicDesign from "./components/GraphicDesign";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
      </Routes>
    </>
  );
}

export default App;
