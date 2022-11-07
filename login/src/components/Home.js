import React from "react";
import "./Home.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Home() {
  return (
    <div className="app__header">
      <div className="app__headerHome">
        <p>Home</p>
        <p>SignIn</p>
        <p>SignUp</p>
      </div>
      <div className="app__headerSignIn">
        <SignIn />
      </div>
      <div className="app__headerSignUp">
      </div>
    </div>
  );
}

export default Home;
