import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./component/Main/Main.jsx";
import Authorization from "./component/Authorization/Authorization.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/authorization" element={<Authorization/>} />
        <Route path="/main" element={<Main/>} />
        <Route path="/" element={<Navigate to="/authorization"/>} />
      </Routes>
    </>
  );
}

export default App;
