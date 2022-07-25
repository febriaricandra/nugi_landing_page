import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Pricing from "./pages/PricingPage";
import About from "./pages/About";
import Contact from "./pages/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<div>404</div>} />
        <Route path="/about" element={<About />} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
