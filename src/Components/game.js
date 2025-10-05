import "./game.css";

function Game({ veryfyLatter }) {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={() => veryfyLatter()}> Finalizar Jogo</button>
    </div>
  );
}

export default Game;
