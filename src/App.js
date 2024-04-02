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
  const [isScrollToId, setIsScrollToId] = useState(false);
  return (
    <>
      <ScrollToTop />
      <Header setIsScrollToId={setIsScrollToId} />
      <Routes>
        <Route path="/" exact element={<Home isScrollToId={isScrollToId} />} />
        <Route path="/MarketLog" element={<MarketLog />} />
        <Route path="/KillBills" element={<KillBills />} />
        <Route path="/Ichi" element={<Ichi />} />
        <Route path="/Maynooth" element={<Maynooth />} />
        <Route path="/about" element={<About />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
