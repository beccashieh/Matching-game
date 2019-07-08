import React from "react";

function Image(props) {
    return (
        <div className="card" onClick={this.handleChange}>
          <div className="img-container">
            <img src={props.link} alt={props.id} />
            <div className="card-body"></div>
          </div>
        </div>
      );
};


export default Image;