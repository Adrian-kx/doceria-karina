import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import About from './Pages/About';
// import Menu from './Pages/Menu';
// import Contact from './Pages/Contact';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
