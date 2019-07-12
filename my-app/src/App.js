import React, { Component } from "react";
// import Wrapper from "./components/wrapper";
import Navbar from "./components/nav";
import Jumbotron from "./components/jumbotron";
import Counter from "./components/counter";
import Image from "./components/image";
import images from "./images.json";
import "./App.css";

class App extends Component {
  //Sets this.state.images to the json array.
  state = {
    images,
    score: 0,
    topScore: 0
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

    return images;
  };
  

  //topScore function
  //if user clicks same image, topScore reflects highest count and count returns to 0.
  topScore = () => {
    this.setState({
      score: 0
    })
  };

  //checks if the "clicked" property of the image is true. Should be changed once the user clicks on an image.
  //if clicked is false, runs countIncrease.
  //if clicked is true, runs topScore and resets the count.
  clickedNew = (newItem) => {
    // console.log(`Data id: ${data.id}\n Data: ${id}`);
    // this.countIncrease();
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = newScore > topScore ? newScore : topScore;
    this.setState({
      item: this.shuffleImages(newItem),
      score: newScore,
      topScore: newTopScore
    });
    console.log("Score: ", newScore);
    console.log("Top Score: ", newTopScore);
    // console.log('clicked', this.state.count);
    // if (id !== data.id) {
    //   this.countIncrease();
    //   return this.state.count;
    // }
  };

  clickedAgain = item => {
    this.setState({
      item: this.resetItem(item),
      score: 0,
    })
    console.log('clicked again');
    // if (id === data.id) {
    //   console.log('You chose a card more than once.')
    //   this.topScore();
    // }
  }

  resetItem = item => {
    const resetItem = item.map(image => ({...item, clicked: false}));
    return this.shuffleImages(resetItem);
  }

  // handleChange = event => {
  //   //Changes the clicked boolean to true.
  //   this.setState({
  //     clicked: true
  //   });
  //   this.shuffleImages(images);
  // };

  handleItemClick = id => {
    let correctGuess= false;
    const clickedImages = this.state.images.map(item => {
      const newItem = {...item};
      if (newItem.id === id){
        if (!newItem.clicked) {
          
          newItem.clicked = true;
          correctGuess = true;
          console.log("correct",correctGuess);
        }
      }
      return newItem;
    });
   
    if (correctGuess){
      console.log('if');
      this.clickedNew(clickedImages);
      // console.log('you clicked a new image');
    } 
    else {
      console.log('else ', clickedImages);
      this.clickedAgain(clickedImages);
      // console.log('you chose this image already');
    }

    // this.setState({
    //   images: this.shuffleImages(images)
    // });
    // console.log(`Score: ${this.state.score} Top Score: ${this.state.topScore}`);
  };
  

  render() {
    return (
      <div className="container">
        <Navbar />
        <Jumbotron />
        <Counter
          score={this.state.score}
          topScore={this.state.topScore}/>
        <div className="images-section" id="imgSection">
          {this.state.images.map(image => (
            <Image
              // handleChange={this.handleChange}
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
