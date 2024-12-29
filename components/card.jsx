import React, { useState } from 'react';
import './Card.css';

function Card({ imageSrc, imageName, imageDescription }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`card ${isHovered ? 'hovered' : ''}`} // Add hovered class
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="card-image" style={{ backgroundImage: `url(${imageSrc})` }}>
                <h2 className={`card-title ${isHovered ? 'hovered' : ''}` }>{imageName}</h2>
                {isHovered && (
                    <p className="card-description">
                        {imageDescription}
                    </p>
                )}
            </div>
        </div>
    );
}

export default Card;