import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", width: "100%"}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
