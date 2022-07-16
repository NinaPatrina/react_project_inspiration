/* eslint-disable no-template-curly-in-string */
import "./App.css";
import useSound from "use-sound";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Otter from "./data/Otter.jpg";
import BoardList from "./components/BoardList";
import laugh from "./data/Laugh.mp3";
import Story from "./components/Story";

function App() {
  const [boards, setBoards] = useState([]);
  const [showBoardList, setShowResults] = useState(false);

  const [play] = useSound(laugh);

  const onClickShowBoardlist = () => setShowResults(!showBoardList);

  useEffect(() => {
    getBoardsFromAPI();
  }, []);

  const getBoardsFromAPI = () => {
    axios
      .get("https://inspiration-from-otterspace.herokuapp.com/boards")
      .then((response) => {
        setBoards(response.data);
      })
      .catch((error) => {
        console.log("Oh no!!!");
      });
  };
  const deleteBoard = (boardID) => {
    axios
      .delete(
        `https://inspiration-from-otterspace.herokuapp.com/boards/${boardID}`
      )
      .then((response) => {
        console.log("Deleted board");
        getBoardsFromAPI();
      })
      .catch((error) => {
        console.log("couldn't delete board");
      });
  };

  return (
    <div className="App">
      <img
        src={Otter}
        alt={"otterspace"}
        // cache={"false"}
        className="Otter"
        onClick={play}
      ></img>
      <h1>Inspiration from the OtterSpace</h1>

      <input
        type="submit"
        value="Story / Spaces"
        onClick={onClickShowBoardlist}
      />
      {showBoardList ? (
        <BoardList boards={boards} deleteBoard={deleteBoard} />
      ) : (
        <Story />
      )}

      <Link to="/new">Add New Space</Link>
      <footer>
        &copy; 2022 Ada Developers Academy ✨ by Coders from the OtterSpace ✨
        Doina ✨ Fena ✨ Marlyn ✨ Nina ✨
      </footer>
    </div>
  );
}

export default App;
