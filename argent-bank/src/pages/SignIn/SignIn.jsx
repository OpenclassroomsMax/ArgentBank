import "../SignIn/SignIn.css";

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import {
  setToken,
  setUserLogIn,
  setErrorLogin,
} from '../../utils/reducer.jsx';


import userLogIn from "../../services/api";

export default function SignIn() {
  let navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const isUserLogedIn = useSelector((state) => state.login.isUserLogedIn);
  const dispatch = useDispatch();

  const handleSumit = async (e) => {
    e.preventDefault()


    const response = await userLogIn(userName, password);
    if (response.status !== 200) {
      return console.log("error");
    }

    if (response.data.body.token) {
      dispatch(setToken(response.data.body.token))
    }

    /*Renvoie le token api et après récuper les infos */
    
    navigate('/user')

    
  };


  return (
    <main class="main bg-dark">
      <section class="sign-in-content">
        <i class="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form >
          <div class="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" value={userName} onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div class="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div class="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <button type="submit" class="sign-in-button" onClick={handleSumit}>Sign In</button>
        </form>
      </section>
    </main>
  );
}

{
  /* <button class="sign-in-button">Sign In</button> */
}
