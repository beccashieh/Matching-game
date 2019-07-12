import React from "react";

function Counter (props) {
  return(
    <div className="counter card" id="score-card">
    <h1 className="card-header">Score Tally</h1>
    <h3>
      Score: {props.score}
    </h3>
    <hr></hr>
    <h3>
      Top Score: {props.topScore}
    </h3>
  </div>
  )

}


export default Counter;
