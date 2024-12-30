import React, { useState } from "react";
import "../styles/TouristLongCard.css";

const TouristLongCard = ({ image, title, description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card2">
      <img src={image} alt={title} />
      <div className="card2-body">
        <div className="card2-title">{title}</div>
        <div className={`card2-description ${expanded ? "expanded" : ""}`}>
          {description}
        </div>
        <button className="toggle-button" onClick={toggleDescription}>
          {expanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default TouristLongCard;

