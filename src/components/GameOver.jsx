const GameOver = ({ winner, ...props }) => {
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw</p>}
      <p>
        <button {...props}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
