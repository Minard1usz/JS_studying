import React, { useState } from 'react';

function SmileyVote({ name, imageUrl, vote, onClick }) {
  return (
    <div className="smiley">
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
      <p>Голосів: {vote}</p>
      <button onClick={onClick}>Проголосувати</button>
    </div>
  );
}

function App() {
  const [smilies, setSmilies] = useState([
    { name: 'Smile №1', imageUrl: 'images/cool.png', vote: 0 },
    { name: 'Smile №2', imageUrl: 'images/bored.png', vote: 0 },
    { name: 'Smile №3', imageUrl: 'images/angry.png', vote: 0 },
  ]);

  const [showResults, setShowResults] = useState(false);

  const handleVote = (index) => {
    const updatedSmilies = [...smilies];
    updatedSmilies[index].vote += 1;
    setSmilies(updatedSmilies);
  };

  const getWinner = () => {
    const maxVotes = Math.max(...smilies.map((smiley) => smiley.vote));
    const winner = smilies.find((smiley) => smiley.vote === maxVotes);
    return winner;
  };

  return (
    <div className="app">
      <div className="smiley-container">
        {smilies.map((smiley, index) => (
          <SmileyVote
            key={index}
            name={smiley.name}
            imageUrl={smiley.imageUrl}
            vote={smiley.vote}
            onClick={() => handleVote(index)}
          />
        ))}
      </div>
      <button onClick={() => setShowResults(true)}>Show Results</button>
      {showResults && (
        <div className="results">
          <h2>Переможець:</h2>
          {getWinner() && (
            <SmileyVote
              name={getWinner().name}
              imageUrl={getWinner().imageUrl}
              vote={getWinner().vote}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
