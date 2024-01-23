import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        font: `400 1.4rem 'Source Sans 3'`,
        textAlign: "center",
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <div>
        Oops, It's wrong place <br />
        404
        <br />
        <Link to="/">Go Back Home{"=>"}</Link>
      </div>
    </div>
  );
}
