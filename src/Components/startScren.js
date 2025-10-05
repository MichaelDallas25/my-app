import "./startScren.css";

function StartScren({startGame}) {
  return (
    <div className="start">
      <h1>Secret word</h1>
      <p>Clique no botao abaixo para comecar o jogar</p>
      <button onClick={startGame}>Comecar o jogo</button>
    </div>
  );
}

export default StartScren;
