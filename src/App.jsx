import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./Navbar";
import Home from "./Home";
import Details from "./Details";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/products/:productId" element={<Details />} />
      </Routes>
    </>
  );
}
