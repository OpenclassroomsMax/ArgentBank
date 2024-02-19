import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header/>
        <Home />
        <Footer/>
      </BrowserRouter>
    </React.StrictMode>
  );
}
