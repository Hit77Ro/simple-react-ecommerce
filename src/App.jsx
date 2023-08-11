import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import Details from "./Details";
import Text from "./Text";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="text" element={<Text />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/products/:productId" element={<Details />} />
      </Routes>
    </>
  );
}
