import React from 'react';
import { Link } from 'react-router-dom';

function TravelCard({ trav }) {
  return (
    <div className="card h-100">
      <div className="card-img-container">
        <img src={trav.photo} alt={trav.city} className="card-img" />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{trav.city}</h5>
        <p className="card-price">${trav.price}</p>
        <p className="card-description">{trav.description}</p>
        <div className="mt-auto">
          <Link to={`/ViewTravel/${trav.id}`} className="btn btn-outline-secondary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TravelCard;
