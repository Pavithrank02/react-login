import React from "react";
import "./SignIn.css";
import { IconButton } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
function SignIn() {
  return (
    <div>
      <div className="page">
        <IconButton>
          <AccountCircleRoundedIcon />
        </IconButton>
        <p> Username</p>
        <input type="text" />
        <p> Password</p>
        <input type="text" />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default SignIn;
