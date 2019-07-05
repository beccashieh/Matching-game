import React from "react";

function Score(props) {
    return (
        <div className="card-body">
            <p className="card-text">Score: {props.count}</p>
            <hr></hr>
            <p className="card-text">Top Score: {props.topScore}</p>
        </div>
    )
}

export default Score;