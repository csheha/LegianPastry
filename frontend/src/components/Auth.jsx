import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import React from "react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login</h1>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          console.log(jwtDecode(credentialResponse.credential));
          navigate("/"); // Redirect to home page after successful login
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}

export default Auth;
