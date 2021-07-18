import React from "react";
import { Link } from "react-router-dom";

function Quiz() {
  return (
    <div className="Quiz">
      <h1 className="app-header"> Let's Get Started...</h1>
      <Link to="/Question1">
        <button className="quiz-start">Start</button>
      </Link>{" "}
    </div>
  );
}

export default Quiz;
