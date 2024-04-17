const EndGame = ({ numCorrect, numAsked }) => {
  return (
    <div className="end-game">
      <h2>Game Over</h2>
      <p>
        You scored {numCorrect} out of {numAsked}.
      </p>
    </div>
  );
};

export default EndGame;
