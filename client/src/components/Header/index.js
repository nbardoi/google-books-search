import React from "react";
import style from "./style.css";

function Header({children}) {
  return (
    <div
    style={{ height: 300, clear: "both", paddingTop: 80, textAlign: "center", width: "100%"}}
    className="jumbotron"
    >
      <h1 style={{color: "white"}}>Google Books Search</h1>
      <h2 style={{color: "white"}}>Search for and save Books of Interest</h2>
      {children}
    </div>
  );
}

export default Header;
