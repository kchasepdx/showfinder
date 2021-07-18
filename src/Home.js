import React from "react";
import Image from "./Image";
import TV from "./tv.png";

function Home() {
  return (
    <div className="App">
      <h1 className="app-header"> SHOW FINDER </h1>
      <p id="sub-title"> Let's find your next show.</p>
      <Image source={TV} alt="television" />
    </div>
  );
}

export default Home;
