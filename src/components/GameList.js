import React, { useEffect, useState } from 'react';

function GameList({ addToCart }) {
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    fetch('/api/games')
      .then((response) => response.json())
      .then((data) => setGamesData(data))
      .catch((error) => console.error('Error fetching games:', error));
  }, []);

  if (!Array.isArray(gamesData)) {
    return <div>Error: games data is not available</div>;
  }

  return (
    <div>
      <h2>Game List</h2>
      {gamesData.length === 0 ? (
        <p>Loading games...</p>
      ) : (
        gamesData.map((game) => (
          <div key={game.id} className="game-item">
            <h3>{game.name}</h3>
            <p>{game.description}</p>
            <button onClick={() => addToCart(game)}>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  );
}

export default GameList;
