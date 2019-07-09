import React, { Component } from "react";
// import Wrapper from "./components/wrapper";
import Navbar from "./components/nav";
import Jumbotron from "./components/jumbotron";
import Counter from "./components/counter";
import Image from "./components/image";
import images from "./images.json";
import "./App.css";

// Fischer-Yates algorithm to randomly shuffle images
// function shuffleImages(images) {
//   // console.log(images);
//   let currentIndex = images.length;
//   let tempValue, randomIndex;

//   while (0 !== currentIndex) {
//     //Picks remaining element
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -=1;
//     //Swaps random element with current element
//     tempValue = images[currentIndex];
//     images[currentIndex] = images[randomIndex];
//     images[randomIndex] = tempValue;
//   }
//   console.log('images shuffled');
//   return images;
// }

class App extends Component {

    //Sets this.state.images to the json array.
    state = {
      images
    };


  handleChange = (event) => {
    //Changes the clicked boolean to true.
    this.setState({
      clicked: true
    })
    // shuffleImages(images);
    // console.log("this");
  }

  render() {
    return(
        <div className="container">
          <Navbar />
          <Jumbotron />
          <Counter />
        <div className="images-section" id="imgSection">
          {this.state.images.map(image => (
            <Image
              handleChange = {this.handleChange}
              id={image.id}
              key={image.id}
              link={image.link}
              // onClick={ () => shuffleImages(images)}
            />
          ))}
        </div>
        <footer>Memory Game with React<i className="fab fa-react"></i></footer>
        </div>
    );
  }
}

export default App;
