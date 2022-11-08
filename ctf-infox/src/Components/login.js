import React from 'react'
import "./Assets/login.css"

const Login = () => {
  return (
    <div class="box">
            <div class="form">
                <h2>Login</h2>
                <div class="inputBox">
                    <input type="text" required="required" />
                    <span>Username</span>
                    <i></i>
                </div>
                <div class="inputBox">
                    <input type="password" required="required" />
                    <span>Password</span>
                    <i></i>
                </div>
                <div class="links">
                    <a href="/challenge">Forgot password?</a>
                    <a href="/home">Sign Up</a>
                </div>
                <a href="/challenges"><input type="submit" value="Login" /></a>
            </div>
        </div>
    // {/* <div className='main_background'>
    //     <div className='login_modal'>
    //         <input className='email_field' placeholder='your email' />
    //         <input className='password_field' placeholder='your password' />
    //     </div>
    // </div> */}
  )
}

export default Login