import React, { useState } from 'react';
import StarRating from './StarRating';
import '../styles/RoomCard.css';

const RoomCard = ({ images, title, description, location, priceRange, rating }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const nextImage = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFade(false);
        }, 150);
    };

    const prevImage = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setFade(false);
        }, 150);
    };

    return (
        <div className="room-card shadow-lg rounded-1g overflow-hidden w-[325px] bg-white">
            <h2 className="room-card-title text-xl font-bold mb-2 text-gray-900">{title}</h2>
            <div className="relative h-[350px]">
                <img
                    src={images[currentImageIndex]}
                    alt={`Room image ${currentImageIndex + 1}`}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
                />
                <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition duration-300">
                    &lt;
                </button>
                <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition duration-300">
                    &gt;
                </button>
                <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                    {currentImageIndex + 1} / {images.length}
                </div>
            </div>
            <div className="room-card-body p-4">
                <div className="room-card-details">
                    <p className="room-card-description text-gray-700 text-base text-justify">{description}</p>
                    <p className="room-card-location text-gray-700 text-base text-center"><strong>Location:</strong> {location}</p>
                    <p className="room-card-price text-gray-700 text-base text-center"><strong>Price Range:</strong> {priceRange}</p>
                    <div className="room-card-rating text-gray-700 text-base text-center">
                        <strong>Rating:</strong> <StarRating rating={rating} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;