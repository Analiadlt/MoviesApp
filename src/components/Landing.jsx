import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <div>
      <Link to="/Home" className="letsGo">
        Lets GO
      </Link>
    </div>
  );
}
