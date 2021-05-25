import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <ul>
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/TriviaQuiz">Trivia</Link>
        </li>

        <li>
          <Link to="/quiz">Take the Quiz</Link>
        </li>
        <li>
          <Link to="/skip">Skip the Quiz</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
