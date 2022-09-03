import React from 'react';
import './Login.css';
function Login() {
  return (
    <div class="login">
    <div class="container">
      <form>
        <div class="form-inner">
          <h1>login</h1>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">password:</label>
            <input type="password" name="password" id="password" />
          </div>
          <input type="submit" value="LogIn" />
        </div>
      </form>
    </div>
  </div>
  );
}

export default Login;
