import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignIn from "./pages/SignIn/SignIn";

export default function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/sign-in" element={<SignIn/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </React.StrictMode>
  );
}
