import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import AnswerBubble from "./AnswerBubble";
import Button from "./Button";
import triviaData from "./trivia";

function TriviaQuiz() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [chosenAnswer, changeAnswer] = useState("");
  const [lastPage, setLastPage] = useState(false);
  const [Answer, submitAnswer] = useState("");
  const [celebrate, setCelebrate] = useState("");
  const [score, addToScore] = useState(0);

  function handleSubmit() {
    setQuestionNumber(questionNumber + 1);
    changeAnswer(0);

    if (
      Answer === "1970" ||
      Answer === "Seinfeld" ||
      Answer === "268" ||
      Answer === "Michelle" ||
      Answer === "Drew Barrymore" ||
      Answer === "LeVar Burton" ||
      Answer === "Astro" ||
      Answer === "Orange & Green" ||
      Answer === "The West Wing" ||
      Answer === "Yours Truly Stationary"
    ) {
      //   setCelebrate("correct");
      addToScore(score + 1);
      console.log(score);
      console.log("right");
    } else {
      setCelebrate("wrong");
      console.log("wrong");
      console.log(score);
    }
  }

  function handleClick(event) {
    let choice = event.target.getAttribute("Name");

    triviaData.map((question) => {
      if (choice === question.answerOptions[0]) {
        changeAnswer(1);
        submitAnswer(choice);
      } else if (choice === question.answerOptions[1]) {
        changeAnswer(2);
        submitAnswer(choice);
      } else if (choice === question.answerOptions[2]) {
        changeAnswer(3);
        submitAnswer(choice);
      } else if (choice === question.answerOptions[3]) {
        changeAnswer(4);
        submitAnswer(choice);
      }
    });
  }

  function getScore() {
    setLastPage(true);
  }

  return (
    <div className="quiz">
      {lastPage === true ? (
        <h1 className="Score-header"> You scored {score} out of 10.</h1>
      ) : (
        <div>
          <h1 className="App-header"> Question {questionNumber}</h1>
          <p className="Question-text">
            {" "}
            {triviaData[questionNumber - 1].question}{" "}
          </p>
        </div>
      )}

      {lastPage === true ? null : (
        <div className="wrapper">
          <AnswerBubble
            onClick={handleClick}
            Name={triviaData[questionNumber - 1].answerOptions[0]}
            className={`AnswerBox1 ${chosenAnswer === 1 ? "Highlight" : ""}`}
            Text={triviaData[questionNumber - 1].answerOptions[0]}
          />
          <AnswerBubble
            onClick={handleClick}
            Name={triviaData[questionNumber - 1].answerOptions[1]}
            className={`AnswerBox2 ${chosenAnswer === 2 ? "Highlight" : ""}`}
            Text={triviaData[questionNumber - 1].answerOptions[1]}
          />
          <AnswerBubble
            onClick={handleClick}
            Name={triviaData[questionNumber - 1].answerOptions[2]}
            className={`AnswerBox3 ${chosenAnswer === 3 ? "Highlight" : ""}`}
            Text={triviaData[questionNumber - 1].answerOptions[2]}
          />
          <AnswerBubble
            onClick={handleClick}
            Name={triviaData[questionNumber - 1].answerOptions[3]}
            className={`AnswerBox4 ${chosenAnswer === 4 ? "Highlight" : ""}`}
            Text={triviaData[questionNumber - 1].answerOptions[3]}
          />
        </div>
      )}

      {questionNumber === 10 ? (
        <Button
          className="Quiz-start"
          type="button"
          onClick={getScore}
          text="Show me my score!"
        />
      ) : (
        <Button
          className="Quiz-start"
          type="button"
          onClick={lastPage ? null : handleSubmit}
          text={lastPage ? "Thanks for taking the quiz!" : ">>"}
        />
      )}
    </div>
  );
}

export default TriviaQuiz;
