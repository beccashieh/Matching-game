import React from "react";
import Navbar from "./components/nav";
import Jumbotron from "./components/jumbotron";
import Counter from "./components/counter";
import Image from "./components/image";
import images from "./images.json";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Jumbotron />
      <Counter />
      <div className="images-section">
        <Image image={images[0].image} />
        <Image image={images[1].image} /> <Image image={images[7].image} />
        <Image image={images[2].image} /> <Image image={images[8].image} />
        <Image image={images[3].image} /> <Image image={images[9].image} />
        <Image image={images[4].image} /> <Image image={images[10].image} />
        <Image image={images[5].image} /> <Image image={images[11].image} />
        <Image image={images[6].image} />
      </div>
      <footer>Memory Game with React!</footer>
    </div>
  );
}

export default App;
