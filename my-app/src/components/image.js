import React from "react";
import images from "../images.json";



//Fischer-Yates algorithm to randomly shuffle images
function shuffleImages(images) {
  // let currentIndex = images.length;
  // let tempValue, randomIndex;

  // while (0 !== currentIndex) {
  //   //Picks remaining element
  //   randomIndex = Math.floor(Math.random() * currentIndex);
  //   currentIndex -=1;
  //   //Swaps random element with current element
  //   tempValue = images[currentIndex];
  //   images[currentIndex] = images[randomIndex];
  //   images[randomIndex] = tempValue;
  // }
  let randomIndex, currentIndex, i;
  for (i = images.length -1; i < 0; i--) {
    randomIndex = Math.floor(Math.random() * (i + 1));
    currentIndex = images[i];
    images[i] = images[randomIndex];
    images[randomIndex] = currentIndex;
  }
  console.log('current index is ' + images);
  console.log('images now shuffled');
  return images;
}

function Image(props) {
    return (
        <div className="img-card" onClick={ () => shuffleImages(images)}>
          <div className="img-container">
            <img src={props.link} alt={props.id} />
            <div className="card-body"></div>
          </div>
        </div>
      );
};


export default Image;