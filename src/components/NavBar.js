import React from "react";
import logo from "./Images/Logo.png";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.signin = (event) => {
      var newWindow = window.open(
        "http://localhost:8000/signup.html",
        null,
        "height=1000,width=1000,status=yes,toolbar=no,menubar=no,location=no"
      );
    };

    this.login = (event) => {
      var newWindow = window.open(
        "http://localhost:8080/login.html",
        null,
        "height=1000,width=1000,status=yes,toolbar=no,menubar=no,location=no"
      );
    };

    this.mount = (event) => {
      var iframe = document.getElementById("iframe");
      if (event.target.id === "ttt") {
        iframe.src = "tic_tac_toe.html";
      } else if ((event.target.id = "rps")) {
        iframe.src = "rock_paper_scissors.html";
      }
    };
  }
  render() {
    return (
      <ul className="menubar">
        <li>
          <img src={logo} className="logo" alt="Logo" />
        </li>
        <li>
          <a href="#" onClick={this.signin}>
            <i className="fa fa-solid fa-user-plus"></i>ᔕIGᑎ ᑌᑭ
          </a>
        </li>
        <li>
          <a href="#" onClick={this.login}>
            <i className="fa fa-fw fa-user"></i> ᒪOG Iᑎ
          </a>
        </li>
        <li className="dropdown">
          <button href="#" className="dropbtn">
            <i className="fa fa-duotone fa-gamepad"></i>ＧΛＭΣＳ
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <div className="drop">
              <a href="#" id="ttt" onClick={this.mount}>
                Tic Tac Toe
              </a>
            </div>
            <div className="drop">
              <a href="#" id="rps" onClick={this.mount}>
                Rock Paper Scissors
              </a>
            </div>
            <div className="drop">
              <a href="#">Guess The Number</a>
            </div>
          </div>
        </li>
        <li>
          <a href="Homepage.html">
            <i className="fa fa-fw fa-home"></i>ᕼOᗰE
          </a>
        </li>
      </ul>
    );
  }
}

export default NavBar;
