import React from "react";


// //Fischer-Yates algorithm to randomly shuffle images
// function shuffleImages(images) {
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

//   return images;
// }

function Image(props) {
    return (
        <div className="card">
          <div className="img-container">
            <img src={props.link} alt={props.id} />
            <div className="card-body"></div>
          </div>
        </div>
      );
};


export default Image;