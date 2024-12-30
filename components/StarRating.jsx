import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const [rateColor, setRateColor] = useState(rating);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={currentRate}
              onClick={() => setRateColor(currentRate)}
              style={{ display: 'none' }}
            />
            <FaStar
              size={20}
              color={currentRate <= (rateColor || rating) ? "#FFD700" : "#A9A9A9"} 
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
