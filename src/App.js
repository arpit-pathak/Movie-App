import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<></>} exact />
          <Route path="/series" element={<></>} />
          <Route path="/movies" element={<></>} />
          <Route path="/search" element={<></>} />
        </Routes>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
