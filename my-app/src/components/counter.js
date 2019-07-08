import React from "react";
import Score from "./score";
import Image from "../components/image";

class Counter extends React.Component {
  //Setting the initial state of the counter component
  state = {
    count: 0
  };

  //count increase function
  //if user clicks different image, count increases
  countIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };
  //topScore function
  //if user clicks same image, topScore reflects highest count and count returns to 0.
  topScore = () => {
    return this.state.count;
  };

  //checks if the "clicked" property of the image is true. Should be changed once the user clicks on an image.
  //if clicked is false, runs countIncrease.
  //if clicked is true, runs topScore and resets the count.
  checkClick = () => {
    if (!Image.clicked) {
      this.countIncrease();
    } else {
      this.topScore();
    }
  };

  //Render method used to display card containing appropriate scores.
  render = () => {
    return (
      <div className="card text-center" id="score-card">
        <div className="card-header bg-primary">
          <h3>Score Tally</h3>
        </div>
        <Score
          count={this.state.count}
          countIncrease={this.countIncrease}
          topScore={this.state.topScore}
        />
      </div>
    );
  };
}

export default Counter;
