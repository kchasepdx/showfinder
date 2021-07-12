import React from "react";
import Image from "./Image";

function Home() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="App">
      <h1 className="App-header"> SHOW FINDER </h1>
      <p> Let's find your next show.</p>
      <Image
        source={
          "https://www.jing.fm/clipimg/full/36-368523_tv-frame-png-old-tv-png-transparent.png"
        }
      />
    </div>
  );
}

export default Home;
