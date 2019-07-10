import React, { Component } from "react";
// import Wrapper from "./components/wrapper";
import Navbar from "./components/nav";
import Jumbotron from "./components/jumbotron";
import Counter from "./components/counter";
import Image from "./components/image";
// import Score from "./components/score";
import images from "./images.json";
import "./App.css";

class App extends Component {
  //Sets this.state.images to the json array.
  state = {
    images,
    count: 0
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

    // console.log("current index is " + images);
    // console.log("images now shuffled");
    return images;
  };
  
  //count increase function
  //if user clicks different image, count increases
  countIncrease = () => {
    this.setState({ count: this.state.count + 1 });
    console.log('count is: ', this.state.count);
  };
  //topScore function
  //if user clicks same image, topScore reflects highest count and count returns to 0.
  topScore = () => {
    this.setState({
      count: 0
    })
  };

  //checks if the "clicked" property of the image is true. Should be changed once the user clicks on an image.
  //if clicked is false, runs countIncrease.
  //if clicked is true, runs topScore and resets the count.
  clickedNew = (id, data) => {
    console.log(`Data id: ${data.id}\n Data: ${id}`);
    // this.countIncrease();

    // console.log('clicked', this.state.count);
    if (id !== data.id) {
      this.countIncrease();
      return this.state.count;
    }
  };

  clickedAgain = (id, data) => {
    if (id === data.id) {
      console.log('You chose a card more than once.')
      this.topScore();
    }
  }

  handleChange = event => {
    //Changes the clicked boolean to true.
    this.setState({
      clicked: true
    });
    this.shuffleImages(images);
  };

  handleItemClick = id => {
    console.log('id: ', id);
    let correctGuess= false;
    // console.log(newItem);
    const clickedImages = this.state.images.map(item => {
      const newItem = {...item};
      // console.log(item);
      if (newItem.id === id){
        if (!newItem.clicked) {
          newItem.clicked = true;
          correctGuess = true;
        }
      }
      return newItem;
    });
    correctGuess
    ? this.clickedNew(id, clickedImages)
    : this.clickedAgain(id, clickedImages);

    this.setState({
      images: this.shuffleImages(images)
    });
  };
  

  render() {
    return (
      <div className="container">
        <Navbar />
        <Jumbotron />
        <Counter/>
        <div className="images-section" id="imgSection">
          {this.state.images.map(image => (
            <Image
              handleChange={this.handleChange}
              id={image.id}
              key={image.id}
              link={image.link}
              handleClick={this.handleItemClick}
              // onClick={this.countIncrease}
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
