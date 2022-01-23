import React from "react";
import "./Register.scss";
import { useAuth0 } from "@auth0/auth0-react";
import registervector from "../../resources/Saly-16.png";

export const SignIn = () => {
    const { loginWithRedirect } = useAuth0();
   return (
       <div className="login">
           <header className="logo">BookAbout</header>
           <body>
           <div className="left-side">
            <form action='#' method='GET' enctype='text/plain'>
                <h1>Welcome to BookAbout</h1>
                <p>Already have an account? 
                    <span>
                    <a href="">Log In</a>
                    </span>
                </p>
                <div className="firstname">
                <label>First name</label>
                <input type={"text"} placeholder='First Name' ></input>
                </div>
                <div className='lastname'>
                    <label>Last Name </label>
                    <input type={"text"} placeholder='Last Name' />
                </div>
                <div className='email'>
                    <label>Email </label>
                    <input type={"text"} placeholder='Email' />
                </div>
            <button onClick={() => loginWithRedirect()}>Log In</button>
            </form>
           </div>
           <div className="right-side">
                <img className="person-img"
                src={registervector}
                alt="Person reading" />
           </div>
           </body>
       </div>
   );
  };