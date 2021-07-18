import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Quiz() {
  return (
    <div className="Quiz">
      <Nav />
      <h1 className="app-header"> Let's Get Started...</h1>
      <Link to="/Question1">
        <button className="quiz-start">Start</button>
      </Link>{" "}
    </div>
  );
}

export default Quiz;
