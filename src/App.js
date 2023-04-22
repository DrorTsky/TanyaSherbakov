/** @format */

import "./App.css";
import { Home } from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import GraphicDesign from "./components/GraphicDesign";
import { MarketLog } from "./components/MarketLog";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MarketLog" element={<MarketLog />} />
        <Route path="/about" element={<About />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
