import React from 'react';

function GameCard({ game, addToCart }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{game.name}</h2>
      <p>{game.description}</p>
      <p>Price: ${game.price}</p>
      <button onClick={() => addToCart(game)}>Add to Cart</button>
    </div>
  );
}

export default GameCard;
