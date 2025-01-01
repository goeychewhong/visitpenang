import React from 'react';
import '../styles/Accomodations.css';
import image1 from '../assets/image1.jpg';
import Card from '../components/HomeCard';

const Accommodations = () => {
    return (
        <>
            <div className="tourist-spot-page mt-24"></div>
            <div className="min-h-screen bg-gradient-to-r from-gray-200 to-gray-400 flex flex-col items-center justify-center p-6">
                <header className="header mt-32 text-justify text-gray-800">
                    <h1>Accommodations in Penang</h1>
                    <p>Discover the best resorts and hotels around Penang for a perfect stay.</p>
                </header>
                <div>
                    <Card
                        imageSrc={image1}
                        imageName="Tourism Image 1"
                        imageDescription="Find the perfect place to stay, whether you prefer luxury hotels or cozy guesthouses."
                    />
                </div>
            </div>
        </>
    );
};

export default Accommodations;