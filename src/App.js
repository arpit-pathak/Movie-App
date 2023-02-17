import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="pages">
          <Routes>
            <Route path="/" element={<Trending />} exact />
            <Route path="/series" element={<Series />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
        <Navbar />
        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
