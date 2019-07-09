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

  componentDidMount() {
    this.setState({ images: this.shuffleImages(this.state.images) });
  }

  //Fischer-Yates algorithm to randomly shuffle images
  shuffleImages = images => {
    let currentIndex = images.length - 1;

    while (currentIndex > 0) {
      //Picks remaining element
      const randomIndex = Math.floor(Math.random() * (currentIndex + 1));

      //Swaps random element with current element
      const tempValue = images[currentIndex];
      images[currentIndex] = images[randomIndex];
      images[randomIndex] = tempValue;
      currentIndex--;
    }

    console.log("current index is " + images);
    console.log("images now shuffled");
    return images;
  };

  handleChange = event => {
    //Changes the clicked boolean to true.
    this.setState({
      clicked: true
    });
    this.shuffleImages(images);
    // console.log("this");
  };

  handleItemClick = id => {
    this.setState({
      images: this.shuffleImages(images)
    })
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <Jumbotron />
        <Counter />
        <div className="images-section" id="imgSection">
          {this.state.images.map(image => (
            <Image
              handleChange={this.handleChange}
              id={image.id}
              key={image.id}
              link={image.link}
              handleClick={this.handleItemClick}
              // onClick={ () => shuffleImages(images)}
            />
          ))}
        </div>
        <footer>
          Memory Game with React
          <i className="fab fa-react" />
        </footer>
      </div>
    );
  }
}

export default App;
