import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    return (
      <div className="login-form-container">
        <h1>Login</h1>
        <form>
          <div class="login-form">
            <label for="username"><b>Username</b></label><br/>
            <input type="text" placeholder="Enter Username" name="username" required/>
            <br/>
            <br/>
            <label for="password"><b>Password</b></label><br/>
            <input type="password" placeholder="Enter Password" name="password" required/>
            <br/>
            <br/>
            <button button className="tiny ui inverted red basic button" type="submit">Login</button>
            <br/>
            
            <h4>No Account Yet?</h4>
            <Link to="/new">
            <button button className="tiny ui inverted red basic button" type="submit">Create New Account</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
  
  export default Login;