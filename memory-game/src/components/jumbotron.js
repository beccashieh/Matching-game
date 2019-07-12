import React from "react";

function Jumbotron() {
  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
          <h1 className="display-4">Memory Game:</h1>
          <p className="lead">
            Click on an image to receive points, but don't click the same image twice!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
