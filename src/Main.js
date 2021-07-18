import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Skip from "./Skip";
import Home from "./Home";
import Quiz from "./Quiz";
import QuestionOne from "./Question1";
import About from "./About";
import TriviaQuiz from "./TriviaQuiz";

const Main = () => {
  return (
    <Switch>
      {" "}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/skip" component={Skip}></Route>
      <Route exact path="/quiz" component={Quiz}></Route>
      <Route exact path="/Question1" component={QuestionOne}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/TriviaQuiz" component={TriviaQuiz}></Route>
    </Switch>
  );
};

export default Main;
