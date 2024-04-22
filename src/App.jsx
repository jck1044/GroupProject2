import React, { useEffect, useState } from "react";

import "./styles.css";
import Quote from "./Quote";
import Score from "./Score";
import EndGame from "./EndGame";
import Button from "./Button";
import Leaderboard from "./Leaderboard";

export default function App() {
  const [numCorrect, setNumCorrect] = useState(0);
  const [numAsked, setNumAsked] = useState(0);

  const updateScore = (isCorrect) => {
    setNumAsked(numAsked + 1);
    if (isCorrect) {
      setNumCorrect(numCorrect + 1);
    }
  };

  if (numAsked < 10) {
    return (
      <div className="App">
        <Quote updateScore={updateScore} />
        <Score numCorrect={numCorrect} numAsked={numAsked} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <EndGame numCorrect={numCorrect} numAsked={numAsked} />
        <Leaderboard numCorrect={numCorrect} numAsked={numAsked} />
        <Button
          handler={() => {
            setNumCorrect(0), setNumAsked(0);
          }}
          text="Play Again"
        />
      </div>
    );
  }
}
