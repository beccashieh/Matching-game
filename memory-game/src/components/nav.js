import React from "react";

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">
          <h1>Memory Game</h1>
        </span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <span className="start-game-title">
                Click any image to start your game!
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
