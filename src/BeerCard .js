// BeerCard.js

import React from 'react';

const BeerCard = ({ beer }) => {
  return (
    <div className="beer-card">
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      {/* Add other beer information here */}
    </div>
  );
};

export default BeerCard;
