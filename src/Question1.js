import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import AnswerBubble from "./AnswerBubble";
import Button from "./Button";

function QuestionOne() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [chosenAnswer, changeAnswer] = useState("");
  const [fetchSite, changeFetchSite] = useState(
    "https://api.themoviedb.org/3/discover/tv?api_key=5471a39659aec129ecf2682b4262b7fb&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false"
  );
  const [questionOneString, changeQ1String] = useState("");
  const [questionTwoString, changeQ2String] = useState("");
  const [questionThreeString, changeQ3String] = useState("");
  const [showName, setShowName] = useState("");
  const [showDesc, setShowDesc] = useState("");
  const [lastPage, setLastPage] = useState(false);

  function handleSubmit() {
    setQuestionNumber(questionNumber + 1);
    changeAnswer("");
  }

  function handleClick(event) {
    let choice = event.target.getAttribute("Name");

    console.log(questionNumber);

    if (choice === "Laugh") {
      console.log("laugh");
      changeAnswer(1);

      changeQ1String("&with_genres=35");
    } else if (choice === "Cry") {
      console.log("cry");
      changeAnswer(2);
      changeQ1String("&with_genres=18");
    } else if (choice === "Binge") {
      console.log("binge");
      changeAnswer(3);
      changeQ1String("&without_genres=18,35,99,10763,10868");
    } else if (choice === "Learn") {
      console.log("Learn");
      changeAnswer(4);
      changeQ1String("&with_genres=99,10763,10768");
    } else if (choice === "Vintage") {
      console.log("Vintage");
      changeQ2String("&first_air_date.lte=2010");
      changeAnswer(1);
    } else if (choice === "Current") {
      console.log("Current");
      changeQ2String("&first_air_date.gte=2011");
      changeAnswer(2);
    } else if (choice === "Underrated") {
      console.log("Underrated");
      changeQ3String("&vote_average.lte=5");
      changeAnswer(1);
      setLastPage(true);
    } else if (choice === "Popular") {
      console.log("popular");
      changeQ3String("&vote_average.gte=5");
      changeAnswer(2);
      setLastPage(true);
    }
  }

  function getShow() {
    setQuestionNumber(4);

    setLastPage(true);

    const URL =
      fetchSite + questionOneString + questionTwoString + questionThreeString;
    console.log(URL);

    fetch(URL)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          const showArray = result.results;
          const randomNumber = Math.floor(
            Math.random() * (showArray.length - 1) + 1
          );
          console.log(randomNumber);
          setShowName(result.results[randomNumber].name);
          setShowDesc(result.results[randomNumber].overview);
          console.log(showName);
          console.log(showDesc);
          console.log(lastPage);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }

  // function startAgain() {
  //   setQuestionNumber(1);
  //   console.log("start again called");
  // }

  return (
    <div className="quiz">
      {questionNumber <= 3 ? (
        <h1 className="App-header"> Question {questionNumber}</h1>
      ) : (
        <h1 className="App-header">All done!</h1>
      )}
      <p className="Question-text">
        {" "}
        {questionNumber === 1 && "Are you in the mood to..."}{" "}
        {questionNumber === 2 &&
          "Want to watch something more vintage or more current?"}{" "}
        {questionNumber === 3 &&
          "Do you like your shows to be popular or underrated?"}
        {questionNumber === 4 && "The show you should watch is..."}
      </p>
      {questionNumber === 1 && (
        <div className="wrapper">
          <AnswerBubble
            onClick={handleClick}
            Name="Laugh"
            className={`AnswerBox1 ${chosenAnswer === 1 ? "Highlight" : ""}`}
            Text="Laugh"
          />
          <AnswerBubble
            onClick={handleClick}
            Name="Cry"
            className={`AnswerBox2 ${chosenAnswer === 2 ? "Highlight" : ""}`}
            Text="Cry"
          />
          <AnswerBubble
            onClick={handleClick}
            Name="Binge"
            className={`AnswerBox3 ${chosenAnswer === 3 ? "Highlight" : ""}`}
            Text="Binge"
          />
          <AnswerBubble
            onClick={handleClick}
            Name="Learn"
            className={`AnswerBox4 ${chosenAnswer === 4 ? "Highlight" : ""}`}
            Text="Learn"
          />
        </div>
      )}

      {questionNumber === 2 && (
        <div className="wrapper">
          <AnswerBubble
            onClick={handleClick}
            Name="Vintage"
            className={`AnswerBox1 ${chosenAnswer === 1 ? "Highlight" : ""}`}
            Text="Vintage, please"
          />
          <AnswerBubble
            onClick={handleClick}
            Name="Current"
            className={`AnswerBox2 ${chosenAnswer === 2 ? "Highlight" : ""}`}
            Text="More current"
          />
        </div>
      )}

      {questionNumber === 3 && (
        <div className="wrapper">
          <AnswerBubble
            onClick={handleClick}
            Name="Underrated"
            className={`AnswerBox1 ${chosenAnswer === 1 ? "Highlight" : ""}`}
            Text="Underrated"
          />
          <AnswerBubble
            onClick={handleClick}
            Name="Popular"
            className={`AnswerBox2 ${chosenAnswer === 2 ? "Highlight" : ""}`}
            Text="Popular"
          />
        </div>
      )}

      {questionNumber === 4 && (
        <div className="App">
          <h1 className="Show-suggestion">{showName}</h1>
          <p>{showDesc}</p>
        </div>
      )}

      {questionNumber === 3 ? (
        <Button
          className="Quiz-start"
          type="button"
          onClick={getShow}
          text="Get Show!"
        />
      ) : (
        <Button
          className="Quiz-start"
          type={lastPage ? "submit" : "button"}
          onClick={handleSubmit}
          text={lastPage ? "Thanks for taking the quiz!" : ">>"}
        />
      )}
    </div>
  );
}

export default QuestionOne;
