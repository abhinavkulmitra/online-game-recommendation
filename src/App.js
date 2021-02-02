import React, { useState } from "react";
import "./styles.css";

// database
const listOfGames = {
  adventure: [
    ["Cube escape", "4.8 / 5", "single player, offline"],
    ["Duskwood- Crime & Invesigation", "4.5 / 5", "single player, offline"],
    ["Crime Case", "4.5 / 5", "casual, offline"]
  ],
  action: [
    ["Orbia: Tap and Relax", "4.6 / 5", "single player, offline, Arcade"],
    ["Walk Master", "4.2 / 5", "single player, stylised"],
    ["Sniper 3D", "4.4 / 5", "shooter, offline"],
    ["Cube escape", "4.8 / 5", "single player, offline"]
  ],
  "Board games": [
    ["Chess- Class of Kings", "4.6 / 5", "Board, offline"],
    [
      "Ludo Club - Fun Dice Game",
      "4.3 / 5",
      "single player, offline, Realistic"
    ]
  ],
  "Cartoony games": [
    ["Golf Battle", "4.2 / 5", "Sports, Golf"],
    ["Plants vs Zombies 2", "4.4 / 5", "Casual, strategy"]
  ]
};

export default function App() {
  const [clickedGameGenre, setGameGenre] = useState("adventure");

  function genreListHandler(el) {
    
    setGameGenre(el);
  }

  const genreListofGames = Object.keys(listOfGames);

  return (
    <div className="App">
      <div className="heading">
        <h1>🎮Best games to play</h1>
        <h2>Select a genre below 👇</h2>
      </div>

      <ul className="genre">
        {genreListofGames.map((item) => {
          return (
            <li key={item} onClick={ () => genreListHandler(item)}>
              {item}
            </li>
          );
        })}
      </ul>
      <ul className="list">
        {listOfGames[clickedGameGenre].map((cur) => {
          return (
            <li>
              {cur[0]} | Rating: {cur[1]} | Type: {cur[2]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
