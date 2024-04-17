const Score = ({ numCorrect, numAsked }) => {
  return (
    <h3>
      Score: {numCorrect} / {numAsked}
    </h3>
  );
};
export default Score;
