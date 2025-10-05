//Css
import "./App.css";

//React
import { useCallback, useEffect, useState } from "react";

//Data
import { wordsLista } from "./Projeto/Word";

//componente
import StartScren from "./Components/startScren";
import Game from "./Components/game";
import GameOver from "./Components/gameOver";

//Estados do jogo
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [word] = useState(wordsLista);
  console.log(word);

  //Start de secret word
  const startGame = () => {
    setGameStage(stages[1].name);
  };

  // process the latter input game
  const verifyLatter = () => {
    console.log("Dentro de verifylatter");
    setGameStage(stages[2].name);
  };

  //restart the game
  const resetar = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScren startGame={startGame} />}
      {gameStage === "game" && <Game verifyLatter={verifyLatter} />}
      {gameStage === "end" && <GameOver onResetar={resetar} />}
    </div>
  );
}

export default App;
