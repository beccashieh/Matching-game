import React, { Component } from "react";
// import Wrapper from "./components/wrapper";
import Navbar from "./components/nav";
import Jumbotron from "./components/jumbotron";
import Counter from "./components/counter";
import Image from "./components/image";
import images from "./images.json";
import "./App.css";

//Fischer-Yates algorithm to randomly shuffle images
function shuffleImages(images) {
  console.log(images);
  let currentIndex = images.length;
  let tempValue, randomIndex;

  while (0 !== currentIndex) {
    //Picks remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -=1;
    //Swaps random element with current element
    tempValue = images[currentIndex];
    images[currentIndex] = images[randomIndex];
    images[randomIndex] = tempValue;
  }

  return images;
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
    console.log("this");
  }

  render() {
    return(
        <div className="container">
          <Navbar />
          <Jumbotron />
          <Counter />
        <div className="images-section" onClick={shuffleImages()}>
          {images.map(image => (
            <Image
              id={image.id}
              key={image.id}
              link={image.link}
            />
          ))}
        </div>
        <footer>Memory Game with React<i className="fab fa-react"></i></footer>
        </div>
    );
  }
}

export default App;
