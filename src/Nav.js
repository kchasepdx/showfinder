import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="navbar-fixed">
        <ul>
          <li>
            <Link className="nav-link" to="/about">
              {" "}
              About{" "}
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/TriviaQuiz">
              Trivia
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/quiz">
              Take the Quiz
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/skip">
              Skip the Quiz
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/showfinder">
              Home
            </Link>
          </li>
        </ul>
      </div>
      {/* Responsive Collapse Nav Bar */}
      <div className="dropdown navbar-narrow">
        <button
          className="fixed-top btn btn-secondary dropdown-toggle dropdown-toggle-split menu-btn"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-bars"></i>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li className="dropdown-item">
            <a href="/" className="dropdown-item">
              Home
            </a>
          </li>
          <li className="dropdown-item">
            <a href="/about" className="dropdown-item">
              About
            </a>
          </li>

          <li className="dropdown-item">
            <a href="/TriviaQuiz" className="dropdown-item">
              Trivia
            </a>
          </li>
          <li className="dropdown-item">
            <a href="/quiz" className="dropdown-item">
              Take the Quiz
            </a>
          </li>
          <li className="dropdown-item">
            <a href="/skip" className="dropdown-item">
              Skip the Quiz
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
