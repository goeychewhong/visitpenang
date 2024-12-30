import React from 'react';
import '../styles/TouristCard.css';

function TouristCard({ imageSrc, name, description, location, timeOpen, rating }) {
    return (
        <div className="tourism-card">
            <div className="tourism-card-image" style={{ backgroundImage: `url(${imageSrc})` }}></div>
            <div className="tourism-card-content">
                <h2 className="tourism-card-name">{name}</h2>
                <p className="tourism-card-description">{description}</p>
                <p className="tourism-card-location"><strong>Location:</strong> {location}</p>
                <p className="tourism-card-time-open"><strong>Time Open:</strong> {timeOpen}</p>
                <p className="tourism-card-rating"><strong>Rating:</strong> {rating}</p>
            </div>
        </div>
    );
}

export default TouristCard;
