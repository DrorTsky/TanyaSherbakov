import {Home} from './routes/Home'
import './App.css';

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
