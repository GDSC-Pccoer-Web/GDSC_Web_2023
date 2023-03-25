import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Index from "./pages/Index";
import Blogs from "./pages/Blogs";
import Faq from "./pages/Faq";
import Events from "./pages/Events";
import About from "./pages/About";
import { useEffect } from "react";
import Navbar from "./component/Navbar";
import React from 'react';
import Footer from './component/Footer';
import Teams from './pages/Teams';
import Initial from './components/Initial';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
    document.getElementById('btn').click();
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/blogs":
        title = "";
        metaDescription = "";
        break;
      case "/teams":
        title = "";
        metaDescription = "";
        break;
      case "/faq":
        title = "";
        metaDescription = "";
        break;
      case "/events":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <React.Fragment>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer/>
    </React.Fragment>
  );
}
export default App;
