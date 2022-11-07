import { Link } from "@mui/material";
import React from "react";
import "./Home.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Home() {
  return (
    <div className="app__header">
      <div >
        <Link to="/" className="app__headerHome" >
          <h1>Home</h1>
          <h2 className="app__headerHome1">SignIn</h2>
          <h2 className="app__headerHome2">SignUp</h2>
        </Link>
      </div>
    </div>
  );
}

export default Home;
