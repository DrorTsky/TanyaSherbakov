import './App.css';
import {Home} from './routes/Home'
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/careers" element={<Careers />} /> */}
      </Routes>
    </>
  );
}

export default App;
