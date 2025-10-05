import "./gameOver.css";

const GameOver = ({ onResetar }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={onResetar}>Voltar para o jogo</button>
    </div>
  );
};
export default GameOver;
