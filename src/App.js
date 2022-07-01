/* eslint-disable no-template-curly-in-string */
import "./App.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import otter from "./data/Otter.png";

function App() {
  const [boards, setBoards] = useState([]);

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

  return (
    <div className="App">
      <img src={otter} alt={"otterspace"} cache={false} className="Otter"></img>
      <h1>Inspiration from the OtterSpace</h1>
      <ul className="list">
        {boards.map((item) => (
          <li key={item.id} className="list-item">
            <Link to={`${item.id}`} style={{ cursor: "pointer" }}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/new">Add new Board</Link>
      <footer>
        &copy; 2022 Ada Developers Academy ✨ by Coders from the OtterSpace ✨
        Doina ✨ Fena ✨ Marlyn ✨ Nina ✨
      </footer>
    </div>
  );
}

export default App;
