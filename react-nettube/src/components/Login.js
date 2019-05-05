import React from 'react'

const Login = () => {

    return (
      <div>
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
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default Login;