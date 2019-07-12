import React from "react";

//Image component creates each image card.
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