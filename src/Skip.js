import React, { useState, useEffect } from "react";

function Skip() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [items, setItems] = useState([]);
  const [isClicked, click] = useState(false);
  const [number, setNumber] = useState(
    Math.floor(Math.random() * (500 - 1) + 1)
  );
  const [showDesc, setShowDesc] = useState("");
  const site =
    "https://api.themoviedb.org/3/tv/3?=1&api_key=5471a39659aec129ecf2682b4262b7fb";

  function handleClick() {
    click(true);
    setNumber(Math.floor(Math.random() * (900 - 1) + 1));

    fetch(
      "https://api.themoviedb.org/3/tv/" +
        number +
        "?=3&api_key=5471a39659aec129ecf2682b4262b7fb"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.name);
          setShowDesc(result.overview);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }

  useEffect(() => {
    console.log("the effect happened");
  }, [number]);

  if (error) {
    return <div> Error: {error.message} </div>;
  } else if (!isLoaded) {
    return <div> Loading... </div>;
  } else {
    return (
      <div className="App">
        <h1 className="App-header"> Instant Gratification </h1>{" "}
        {isClicked ? (
          <p>You should Watch...</p>
        ) : (
          <p> All it takes is 1 click</p>
        )}
        {isClicked && <h1 className="Show-suggestion">{items} </h1>}
        {isClicked && <p>{showDesc}</p>}
        <form>
          <button className="Quiz-start" type="button" onClick={handleClick}>
            {" "}
            Click Me.{" "}
          </button>{" "}
        </form>{" "}
      </div>
    );
  }
}

export default Skip;