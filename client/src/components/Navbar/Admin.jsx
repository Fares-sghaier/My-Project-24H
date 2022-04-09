import React from "react";
export default function Admin(props) {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required="" />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>
        <a href="#"  onClick={()=>{props.change("adminwork")}}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
}
