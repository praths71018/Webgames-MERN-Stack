import React from "react";
import Footer from "./footer";
import NavBar from "./NavBar";

// import Game from "./gamepage";
import "./Homepage.css";
import Ttt from "./Images/Home/Tic Tac Toe.png";
import Rps from "./Images/Home/RPC.png";
import Gtn from "./Images/Home/GuessTheNumber.jpeg";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.mount = (event) => {
      var iframe = document.getElementById("iframe");
      if (event.target.id === "ttt") {
        iframe.src = "tic_tac_toe.html";
      } else if ((event.target.id = "rps")) {
        iframe.src = "rock_paper_scissors.html";
      }
    };

    this.submit = (event) => {
      try {
        alert("Submitted");
      } catch {
        alert("Submission failed");
      }
    };
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="bg">
          <section className="intro">
            <div className="head">
              <h1 className="lead">
                YOUR ENTRY INTO THE WORLD OF GAMES STARTS HERE!!!!
              </h1>
              <p>
                Play basic games like tic-tac-toe and rock paper scissors like
                you have never experienced. Provided with the best UI .<br />
                Even a 3 year old can get how to play
              </p>
            </div>
          </section>
          <div className="inst">
            <center>
              <h3>PLAY THE GAMES OF UR CHOICE BY CLICKING ON THE GAME</h3>
            </center>
          </div>
          <div className="grid">
            <section className="list" id="ttt" onClick={this.mount}>
              <div className="image">
                <img
                  src={Ttt}
                  alt="tic tac toe"
                  id="ttt"
                  onClick={this.mount}
                />
              </div>
              <div className="bio" id="ttt" onClick={this.mount}>
                <h2 id="ttt" onClick={this.mount}>
                  𝙏𝙄𝘾-𝙏𝘼𝘾-𝙏𝙊𝙀
                </h2>
                <p id="ttt" onClick={this.mount}>
                  𝕋𝕚𝕔-𝕥𝕒𝕔-𝕥𝕠𝕖 𝕚𝕤 𝕒 𝕘𝕒𝕞𝕖 𝕚𝕟 𝕨𝕙𝕚𝕔𝕙 𝕥𝕨𝕠 𝕡𝕝𝕒𝕪𝕖𝕣𝕤 𝕥𝕒𝕜𝕖 𝕥𝕦𝕣𝕟𝕤 𝕚𝕟
                  �𝕣𝕒𝕨𝕚𝕟𝕘 �𝕖𝕚𝕥𝕙𝕖𝕣 𝕒𝕟 ` 𝕆' 𝕠𝕣 𝕒𝕟 ` 𝕏' 𝕚𝕟 𝕠𝕟𝕖 𝕤𝕢𝕦𝕒𝕣𝕖 𝕠𝕗 𝕒 𝕘𝕣𝕚𝕕
                  𝕔𝕠𝕟𝕤𝕚𝕤𝕥𝕚𝕟𝕘 𝕠𝕗 𝕟𝕚𝕟𝕖 𝕤𝕢𝕦𝕒𝕣𝕖𝕤. 𝕋𝕙𝕖 𝕨𝕚𝕟𝕟𝕖𝕣 𝕚𝕤 𝕥𝕙𝕖 𝕗𝕚𝕣𝕤𝕥 𝕡𝕝𝕒𝕪𝕖𝕣 𝕥𝕠
                  𝕘𝕖𝕥 𝕥𝕙𝕣𝕖𝕖 𝕠𝕗 𝕥𝕙𝕖 𝕤𝕒𝕞𝕖 𝕤𝕪𝕞𝕓𝕠𝕝𝕤 𝕚𝕟 𝕒 𝕣𝕠𝕨.
                </p>
              </div>
            </section>
            <section className="list" id="rps" onClick={this.mount}>
              <div className="image">
                <img
                  src={Rps}
                  alt="tic tac toe"
                  id="rps"
                  onClick={this.mount}
                />
              </div>
              <div className="bio" id="rps" onClick={this.mount}>
                <h2 id="rps" onClick={this.mount}>
                  𝙍𝙊𝘾𝙆 𝙋𝘼𝙋𝙀𝙍 𝙎𝘾𝙄𝙎𝙎𝙊𝙍𝙎
                </h2>
                <p id="rps" onClick={this.mount}>
                  𝔸 𝕔𝕝𝕒𝕤𝕤𝕚𝕔 𝕥𝕨𝕠-𝕡𝕖𝕣𝕤𝕠𝕟 𝕘𝕒𝕞𝕖. ℙ𝕝𝕒𝕪𝕖𝕣𝕤 𝕤𝕥𝕒𝕣𝕥 𝕖𝕒𝕔𝕙 𝕣𝕠𝕦𝕟𝕕 𝕓𝕪 𝕤𝕒𝕪𝕚𝕟𝕘,
                  “𝕣𝕠𝕔𝕜, 𝕡𝕒𝕡𝕖𝕣, 𝕤𝕔𝕚𝕤𝕤𝕠𝕣𝕤, 𝕤𝕙𝕠𝕠𝕥!” 𝕆𝕟 “𝕤𝕙𝕠𝕠𝕥,” 𝕖𝕒𝕔𝕙 𝕡𝕝𝕒𝕪𝕖𝕣 𝕙𝕠𝕝𝕕𝕤
                  𝕠𝕦𝕥 𝕥𝕙𝕖𝕚𝕣 𝕗𝕚𝕤𝕥 𝕗𝕠𝕣 𝕣𝕠𝕔𝕜, 𝕗𝕝𝕒𝕥 𝕙𝕒𝕟𝕕 𝕗𝕠𝕣 𝕡𝕒𝕡𝕖𝕣, 𝕠𝕣 𝕥𝕙𝕖𝕚𝕣 𝕚𝕟𝕕𝕖𝕩
                  �𝕟𝕕 �𝕞𝕚𝕕𝕕𝕝𝕖 𝕗𝕚𝕟𝕘𝕖𝕣 𝕗𝕠𝕣 𝕤𝕔𝕚𝕤𝕤𝕠𝕣𝕤. ℝ𝕠𝕔𝕜 𝕔𝕣𝕦𝕤𝕙𝕖𝕤 𝕤𝕔𝕚𝕤𝕤𝕠𝕣𝕤,
                  𝕤𝕔𝕚𝕤𝕤𝕠𝕣𝕤 𝕔𝕦𝕥 𝕡𝕒𝕡𝕖𝕣, 𝕒𝕟𝕕 𝕡𝕒𝕡𝕖𝕣 𝕔𝕠𝕧𝕖𝕣𝕤 𝕣𝕠𝕔𝕜.
                </p>
              </div>
            </section>
            <section className="list" id="ggg">
              <div className="image">
                <img src={Gtn} alt="tic tac toe" />
              </div>
              <div className="bio">
                <h2>
                  𝙂𝙐𝙀𝙎𝙎 𝙏𝙃𝙀 𝙉𝙐𝙈𝘽𝙀𝙍
                  <br />
                  (ᴄᴏᴍɪɴɢ ꜱᴏᴏɴ)
                </h2>
                <p>
                  𝕋𝕙𝕖 𝕒𝕚𝕞 𝕠𝕗 𝕠𝕦𝕣 𝕟𝕦𝕞𝕓𝕖𝕣 𝕘𝕦𝕖𝕤𝕤 𝕘𝕒𝕞𝕖 𝕚𝕤 𝕥𝕠 𝕘𝕦𝕖𝕤𝕤 𝕥𝕙𝕖 𝕟𝕦𝕞𝕓𝕖𝕣 𝕥𝕙𝕒𝕥
                  𝕥𝕙𝕖 𝕡𝕣𝕠𝕘𝕣𝕒𝕞 𝕙𝕒𝕤 𝕔𝕠𝕞𝕖 𝕦𝕡 𝕨𝕚𝕥𝕙. 𝕋𝕙𝕖 𝕡𝕣𝕠𝕘𝕣𝕒𝕞 𝕣𝕒𝕟𝕕𝕠𝕞𝕝𝕪 𝕤𝕖𝕝𝕖𝕔𝕥𝕤 𝕒
                  𝕟𝕦𝕞𝕓𝕖𝕣 𝕓𝕖𝕥𝕨𝕖𝕖𝕟 𝟙 𝕒𝕟𝕕 𝟚𝟘. 𝕀𝕥 𝕨𝕚𝕝𝕝 𝕥𝕙𝕖𝕟 𝕒𝕤𝕜 𝕥𝕙𝕖 𝕡𝕝𝕒𝕪𝕖𝕣 𝕥𝕠 𝕖𝕟𝕥𝕖𝕣
                  𝕥𝕙𝕖𝕚𝕣 𝕘𝕦𝕖𝕤𝕤.
                </p>
              </div>
            </section>
          </div>
          <div className="bg2">
            <div className="iframe">
              <iframe id="iframe" src="tic_tac_toe.html"></iframe>
            </div>
            <div className="comment">
              <form action="http://localhost:4000/comment" method="POST">
                <h3 className="ComHead">Give Us your review on the Game</h3>
                Comment:
                <br />
                <textarea
                  placeholder="Add your Comment"
                  className="TextBox"
                  name="comment"
                  id="comment"
                ></textarea>
                <br />
                <br />
                Name:
                <br />
                <input
                  type="text"
                  className="box"
                  name="name"
                  id="name"
                  size="30px"
                  placeholder="Enter your Name"
                />
                <br />
                <br />
                Email:
                <br />
                <input
                  type="email"
                  className="box"
                  name="email"
                  id="email"
                  size="30"
                  placeholder="Enter Your email"
                  required
                />
                <br />
                <br />
                <br />
                <br />
                <input
                  type="submit"
                  className="submit"
                  name="submit"
                  value="SUBMIT"
                  onClick={this.submit}
                ></input>
                <br />
                <br />
                <input
                  type="reset"
                  className="reset"
                  name="reset"
                  value="RESET"
                ></input>
              </form>
            </div>
            <article className="article">
              <center>
                <h2 className="abt">About the webpage</h2>
              </center>
              <h3>Why this page?</h3>
              <p>
                This webpage provides you all the beginner friendly games with
                high quality GUI and user friendly controls. Even a 3 year old
                can easily make out how to play
              </p>
              <h3>Variety of games?</h3>
              <p>
                At the moment the webpage holds only three games as in the end
                of the day its only a mini project with a given small time
                constraint but rest assured you will enjoy all the games
                provided at the fullest. In the future we will bring more games
                for you all to enjoy
              </p>
              <p>
                The three games we have at the moment are
                <ul className="points">
                  <li>Tic Tac Toe </li>
                  <li>Guess The Number </li>
                  <li>Rock Paper Scissors </li>
                </ul>
              </p>
              <h3>About Developers and queries</h3>
              <p>
                The developers of this webpage are all 2nd year students of PES
                UNIVERSITY in Bengaluru. If you want to give a review or a
                complaint mail us. Link is provided at the end of webpage
              </p>
            </article>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
