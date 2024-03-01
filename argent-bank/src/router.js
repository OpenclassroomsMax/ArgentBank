import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/User/User";

export default function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/sign-in" element={<SignIn/>}/>
          <Route exact path="/user" element={<User/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </React.StrictMode>
  );
}
