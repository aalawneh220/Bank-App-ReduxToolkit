import { Route, Routes } from "react-router-dom";
import Counter from "./Components/Counter";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Movie from "./Components/Movie";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
