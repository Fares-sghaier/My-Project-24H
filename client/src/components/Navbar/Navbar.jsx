import React from "react";

export default function Navbar(props) {
  return (
      <div className="topnav">     
          <a className="active"href="#home" onClick={()=>{props.change("home")}}>Home</a>
          <a href="#Speciality">Speciality</a>
          <a href="#Review" onClick={()=>{props.change("review")}}>Review</a>
          <a href="#Order">Order</a>
      </div>
  );
}
