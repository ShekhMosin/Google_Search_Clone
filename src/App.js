import { Routes, Route } from "react-router-dom";

import   './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<Home />} /> */}
      </Routes>

    </div>
  );
}

export default App;
