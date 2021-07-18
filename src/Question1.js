import React, { useState } from "react";
import AnswerBubble from "./AnswerBubble";
import Button from "./Button";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function QuestionOne() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [chosenAnswer, changeAnswer] = useState("");
  const apiKey = process.env.REACT_APP_API_KEY;
  const fetchSite =
    "https://api.themoviedb.org/3/discover/tv?api_key=" +
    apiKey +
    "&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false";
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
      changeAnswer(2);
      changeQ1String("&with_genres=18");
    } else if (choice === "Binge") {
      changeAnswer(3);
      changeQ1String("&without_genres=18,35,99,10763,10868");
    } else if (choice === "Learn") {
      changeAnswer(4);
      changeQ1String("&with_genres=99,10763,10768");
    } else if (choice === "Vintage") {
      changeQ2String("&first_air_date.lte=2010");
      changeAnswer(1);
    } else if (choice === "Current") {
      changeQ2String("&first_air_date.gte=2011");
      changeAnswer(2);
    } else if (choice === "Underrated") {
      changeQ3String("&vote_average.lte=5");
      changeAnswer(1);
      setLastPage(true);
    } else if (choice === "Popular") {
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
    console.log(apiKey);

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
          console.log(error);
          console.log(isLoaded);
        }
      );
  }

  return (
    <div className="quiz">
      <Nav />
      {error && console.log(error)}
      {questionNumber <= 3 ? (
        <h1 className="question-header"> Question {questionNumber}</h1>
      ) : (
        <h1 className="question-header">All done!</h1>
      )}
      <p className="question-text">
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
      <div className="center">
        {questionNumber === 3 ? (
          <Button
            className="quiz-start"
            type="button"
            onClick={getShow}
            text="Get Show!"
          />
        ) : lastPage ? (
          <Link className="home-link" to="/">
            Return Home{" "}
          </Link>
        ) : (
          <Button
            className="quiz-start"
            type={"button"}
            onClick={handleSubmit}
            text=">>"
          />
        )}
      </div>
    </div>
  );
}

export default QuestionOne;
