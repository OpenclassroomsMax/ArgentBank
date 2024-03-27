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


import { userLogIn } from "../../services/api";

export default function SignIn() {
  let navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')

  const isUserLogedIn = useSelector((state) => state.login.isUserLogedIn);
  const dispatch = useDispatch();

  const handleSumit = async (e) => {
    e.preventDefault()
    setError('')

    const response = await userLogIn(userName, password);

    if (response.status !== 200) {
      return setError('The Username or Password is wrong')
    }
    console.log(response.status)

    if (response.data.body.token) {
      dispatch(setToken(response.data.body.token))
    }

    /*Renvoie le token api et après récuper les infos */
    
    navigate('/user')

    
  };


  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSumit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={userName} onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button" >Sign In</button>
          <p className="error-message">{error}</p>
        </form>
      </section>
    </main>
  );
}

{
  /* <button className="sign-in-button">Sign In</button> */
}
