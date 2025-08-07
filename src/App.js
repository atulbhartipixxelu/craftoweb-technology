import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

// Header Footer Col
import Header from "@layout/Header/index.jsx";
import Footer from "@layout/Footer/index";

// Pages Link
import Home from "@pages/home";

// CSS
import "./assets/css/style.css";

function BodyClassHandler() {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = location.pathname.replace("", "") || "";
    document.body.className = `page-${pageTitle}`;
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <Router>
        <BodyClassHandler />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
