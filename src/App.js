import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Events from "./components/Events";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Events" element={<Events />} />

        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
