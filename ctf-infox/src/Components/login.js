import React from 'react'
import "./Assets/login.css"
import jwtDecode from 'jwt-decode'
// import { Navigate } from 'react-router'
// import dotenv from "dotenv"

import {useNavigate} from "react-router"

// dotenv.config();

const userObject={
    email:"",
    googleId:"",
    name:"",
    key:"<h1>Newprogrammakinginprogress</h1>"
}

const Login = () => {
    const Navigate= useNavigate()
    const LoginUser= async ()=>{
        const resCheck = await fetch(
            "http://localhost:5500/heck/ctf/auth/google/chk",
            {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(userObject),
              referrerPolicy: "origin-when-cross-origin",
            }
          );
          var checkres = await resCheck.json();
            if(checkres.success)
            {
                localStorage.setItem("authKey",checkres.authKey);
                Navigate('/challenges')
            }
        const res = await fetch('http://localhost:5500/heck/ctf/auth/google', {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(userObject),
            referrerPolicy:"origin-when-cross-origin"
        });
        const finalRes= await res.json();
        console.log(finalRes);
        if(finalRes.success)
        {
            localStorage.set("authKey",finalRes.authKey);
            Navigate('/challenges');
        }
    }

    const handleCredentialResponse= async (response) => {
        const userDetails = await jwtDecode(response.credential);
        console.log("Encoded JWT ID token: ");
        userObject.email=userDetails.email;
        userObject.name=userDetails.name;
        userObject.googleId=userDetails.sub;
        console.log(userObject);
        setTimeout(() => {
            LoginUser();
        }, 500);
      }

    React.useEffect(()=>{
        
        if(localStorage.getItem("authKey"))
        {
            Navigate('/challenges');
        }
        /* global google */
      const func= async ()=>{
        await google.accounts.id.initialize({
          client_id: "272494210674-lv27tkavnkhr38u0oq5q7e0mo533i3o5.apps.googleusercontent.com",
          callback: handleCredentialResponse
        });
        await google.accounts.id.renderButton(
          document.getElementById("buttonDiv"),
          { theme: "outline", size: "large" }  // customization attributes
        );
        // google.accounts.id.prompt(); // also display the One Tap dialog
      }
      func();
      // eslint-disable-next-line
    },[])

    return (
        <>
        <div className="parent">
        {/* <div className="body">
            <img className="bg-img" src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" alt="" />
            </div> */}


            <div className="box">
            <div id="buttonDiv"></div>
                {/* <div className="form">
                    <h2>Login</h2>
                    <div className="inputBox">
                        <input type="text" required="required" />
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="password" required="required" />
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className="links">
                        <a href="/challenge">Forgot password?</a>
                        <a href="/home">Sign Up</a>
                    </div>
                    <a href="/challenges"><input type="submit" value="Login" /></a>
                </div> */}
            </div>





         {/* <div className='main_background'>
        //     <div className='login_modal'>
        //         <input className='email_field' placeholder='your email' />
        //         <input className='password_field' placeholder='your password' />
        //     </div>
    // </div> */}
    </div>
        </>
    )
}

export default Login