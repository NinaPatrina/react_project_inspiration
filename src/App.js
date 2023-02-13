/* eslint-disable no-template-curly-in-string */
import "./App.css";
import useSound from "use-sound";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Otter from "./data/Otter.png";
import BoardList from "./components/BoardList";
import laugh from "./data/Laugh.wav";
import Story from "./components/Story";

function App() {
  const [showBoardList, setShowResults] = useState(false);
  // to play sound we import sound from folder
  const [play] = useSound(laugh);
  // Here is the function we use to toggle the boardList
  const onClickShowBoardlist = () => setShowResults(!showBoardList);
  // from false to true (the above)

  return (
    <div className="App">
      {/* to use photo we import image from folder */}
      <img
        src={Otter}
        alt={"otterspace"}
        className="Otter"
        onClick={play}
      ></img>
      <h1>Universal Odyssey: </h1>
      <h1>Record Your Adventures</h1>
      {/* a button for the story/mulitverse toggle */}
      <input
        type="submit"
        value="Story / Multiverse"
        onClick={onClickShowBoardlist}
      />
      {/* Toggle to display boardlist when clicked, otherwise it will show the story */}
      {showBoardList ? <BoardList /> : <Story />}
      {/* if false will render story, if true will render board list */}
      {/* Code that links to page where we create a new world(board) */}
      <Link to="/new">
        <div id="add-new-space">Create Gateway</div>
      </Link>
      <footer>&copy; 2023 Ada Developers Academy ✨ Nina Patrina ✨</footer>
    </div>
  );
}

export default App;
