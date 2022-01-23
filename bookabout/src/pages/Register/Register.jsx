import React from "react";
import "./Register.scss";
import { useAuth0 } from "@auth0/auth0-react";

export const SignIn = () => {
    const { loginWithRedirect } = useAuth0();
   return (
       <div className="login">
           <header className="logo">BookAbout</header>
           <div className="left-side">
            <form action='#' method='GET' enctype='text/plain'>
            <button onClick={() => loginWithRedirect()}>Log In</button>
            </form>
           </div>
           <div className="right-side">

           </div>
       </div>
   );
  };