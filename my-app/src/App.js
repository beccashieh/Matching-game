import React, { Component } from "react";
// import Wrapper from "./components/wrapper";
import Navbar from "./components/nav";
import Jumbotron from "./components/jumbotron";
import Counter from "./components/counter";
import Image from "./components/image";
import images from "./images.json";
import "./App.css";

//Fischer-Yates algorithm to randomly shuffle images
function shuffleImages(friends) {
  let currentIndex = friends.length;
  let tempValue, randomIndex;

  while (0 !== currentIndex) {
    //Picks remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -=1;
    //Swaps random element with current element
    tempValue = friends[currentIndex];
    friends[currentIndex] = friends[randomIndex];
    friends[randomIndex] = tempValue;
  }

  return friends;
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images
    };
  }

  handleChange = (event) => {
    this.setState({
      clicked: true
    })
    shuffleImages();
  }

  render() {
    return(
        <div className="container">
          <Navbar />
          <Jumbotron />
          <Counter />
        <div className="images-section">
          {images.map(image => (
            <Image
              id={image.id}
              key={image.id}
              image={image.link}
            />
          ))}
        </div>
        <footer>Memory Game with React!</footer>
        </div>
    );
  }
}

export default App;
