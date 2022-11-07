import React from "react";
import "./SignIn.css";
import { IconButton } from "@mui/material";
import { Link } from "@mui/material";
import Home from "./Home";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
function SignIn() {
  return (
   
    <div>
      <Link to="/"><Home /></Link>
      <div className="page">
        <Link to='/signIn'>
        <IconButton>
          <AccountCircleRoundedIcon sx={{ fontSize: 70 }} />
        </IconButton>
        <p> Username</p>
        <input type="text" />
        <p> Password</p>
        <input type="text" />
        <button>Login</button>
        </Link>
      </div>
    </div>
      
  );
}

export default SignIn;
