import React, { useState, useEffect } from "react";

const Leaderboard = ({ numCorrect }) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Retrieve leaderboard from localStorage on component mount
    const savedLeaderboard = localStorage.getItem("leaderboard");
    if (savedLeaderboard) {
      setLeaderboard(JSON.parse(savedLeaderboard));
    }
  }, []);

  // Function to handle submitting the name
  const handleSubmit = (event) => {
    event.preventDefault();
    const playerName = event.target.playerName.value;
    if (playerName !== "") {
      const updatedLeaderboard = [
        ...leaderboard,
        { name: playerName, score: numCorrect },
      ];
      setLeaderboard(updatedLeaderboard);
      setSubmitted(true);
      // Save leaderboard to localStorage
      localStorage.setItem("leaderboard", JSON.stringify(updatedLeaderboard));
    }
  };

  return (
    <div>
      <h2>Leaderboard</h2>
      <ol>
        {leaderboard.map((entry, index) => (
          <li key={index}>
            {entry.name}: {entry.score}
          </li>
        ))}
      </ol>
      {!submitted && (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="playerName" required />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Leaderboard;
