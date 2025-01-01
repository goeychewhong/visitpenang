import React from 'react';
import '../styles/styles.css';
import image1 from '../assets/Home/image1.jpg';
import Card from '../components/Homecard'; // Ensure you have this component

const Accommodations = () => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-r from-gray-200 to-gray-400 flex flex-col items-center justify-center p-6">
                <h1 className="mt-32 text-justify text-gray-800">Accommodations in Penang</h1>
                <p className="text-justify text-gray-800">Discover the best resorts and hotels around Penang for a perfect stay.</p>
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