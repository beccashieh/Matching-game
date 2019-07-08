import React from "react";

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