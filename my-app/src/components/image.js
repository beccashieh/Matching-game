import React from "react";
// import images from "../images.json";



// //Fischer-Yates algorithm to randomly shuffle images
// function shuffleImages(images) {
//   let currentIndex = images.length -1;

//   while (currentIndex > 0) {
//     //Picks remaining element
//     const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
   
//     //Swaps random element with current element
//     const tempValue = images[currentIndex];
//     images[currentIndex] = images[randomIndex];
//     images[randomIndex] = tempValue;
//     currentIndex--;
//   }

//   console.log('current index is ' + images);
//   console.log('images now shuffled');
//   return images;
// }

function Image(props) {
    return (
        <div className="img-card" onClick={ () => props.handleClick(props.id)}>
          <div className="img-container">
            <img src={props.link} alt={props.id} />
            <div className="card-body"></div>
          </div>
        </div>
      );
};


export default Image;