import React, { useState } from 'react';

const RoomCard = ({ images, title, description, location, priceRange, ratings }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const nextImage = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFade(false);
        }, 300);
    };

    const prevImage = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setFade(false);
        }, 300);
    };

    return (
        <div className="room-card bg-white shadow-lg rounded-lg overflow-hidden w-[380px] h-[420px]">
            <div className="relative h-[240px]">
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
                <div className="absolute bottom-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                    {currentImageIndex + 1} / {images.length}
                </div>
            </div>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-gray-900">{title}</h2>
                <p className="text-gray-700 text-sm text-justify">{description}</p>
                <p className="text-gray-700 text-sm text-justify"><strong>Location:</strong> {location}</p>
                <p className="text-gray-700 text-sm text-justify"><strong>Price Range:</strong> {priceRange}</p>
                <p className="text-gray-700 text-sm text-justify"><strong>Ratings:</strong> {ratings}</p>
            </div>
        </div>
    );
};

export default RoomCard;