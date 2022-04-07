import React from "react";

export default function Navbar() {
  return (
    <header>
      <a href="#" className="logo">
        WAkalni
      </a>
      <div className="menu-bar">
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#Speciality">Speciality</a>
          <a href="#Review">Review</a>
          <a href="#Order">Order</a>
        </nav>
      </div>
    </header>
  );
}
