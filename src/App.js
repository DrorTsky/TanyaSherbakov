/** @format */

import "./App.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Home } from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import GraphicDesign from "./components/GraphicDesign";
import { MarketLog } from "./components/MarketLog";
import { KillBills } from "./components/KillBills";
import Ichi from "./components/Ichi";
import Maynooth from "./components/Maynooth";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [scrollTo, setScrollTo] = useState("home");

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <ScrollToTop />
      <Header setScrollTo={setScrollTo} width={width} />
      <Routes>
        <Route path="/" exact element={<Home scrollTo={scrollTo} />} />
        <Route path="/MarketLog" element={<MarketLog />} />
        <Route path="/KillBills" element={<KillBills />} />
        <Route path="/Ichi" element={<Ichi />} />
        <Route path="/Maynooth" element={<Maynooth />} />
        <Route path="/about" element={<About />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
      </Routes>
      <Footer width={width} />
    </div>
  );
}

export default App;
