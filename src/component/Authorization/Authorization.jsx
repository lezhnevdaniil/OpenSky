import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Authorization.scss";

function Authorization() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main-authorization">
      <Header />
      <div className="header-authorization">
        <h2>Authorization</h2>
      </div>
      <div className="authorization">
        <form onSubmit={onClick}>
          <h1>Войти в систему</h1>
          <label>Login</label>
          <input
            type="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Login"
          ></input>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          ></input>
          <div className="button">
            <Link to="/main">
              <button>Click</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Authorization;
