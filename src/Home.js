import React from "react";
import Image from "./Image";
import TV from "./tv.png";
import Nav from "./Nav";

function Home() {
  return (
    <div className="App">
      <Nav />
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>

      <h1 className="app-header"> SHOW FINDER </h1>
      <p id="sub-title"> Let's find your next show.</p>
      <Image source={TV} alt="television" />
    </div>
  );
}

export default Home;
