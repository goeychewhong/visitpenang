import React from 'react';

const Accommodations = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-200 to-gray-400 flex flex-col items-center justify-center p-6">
            <header className="mb-8 text-center w-full">
                <h1 className="text-4xl font-bold text-blue-600">Accommodations in Penang</h1>
                <p className="text-gray-700 mt-4">Discover the best resorts and hotels around Penang for a perfect stay.</p>
            </header>
            <section className="mb-8 w-full">
                <h2 className="text-3xl font-semibold text-green-600 mb-4">Resorts</h2>
                <div className="resort bg-white shadow-lg rounded-lg p-6 mb-6">
                    <h3 className="text-2xl font-bold text-orange-500">Penang Beach Resort</h3>
                    <p className="text-gray-700 mt-2">Experience luxury and comfort at Penang Beach Resort, located right on the beach with stunning ocean views.</p>
                </div>
                <div className="resort bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-orange-500">Island Paradise Resort</h3>
                    <p className="text-gray-700 mt-2">Enjoy a tropical paradise at Island Paradise Resort, featuring beautiful gardens and top-notch amenities.</p>
                </div>
            </section>
            <section className="w-full">
                <h2 className="text-3xl font-semibold text-green-600 mb-4">Hotels</h2>
                <div className="hotel bg-white shadow-lg rounded-lg p-6 mb-6">
                    <h3 className="text-2xl font-bold text-orange-500">Penang City Hotel</h3>
                    <p className="text-gray-700 mt-2">Stay in the heart of the city at Penang City Hotel, offering modern rooms and convenient access to local attractions.</p>
                </div>
                <div className="hotel bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-orange-500">Heritage Hotel Penang</h3>
                    <p className="text-gray-700 mt-2">Experience the charm of Penang's heritage at Heritage Hotel, with its classic architecture and elegant interiors.</p>
                </div>
            </section>
        </div>
    );
};

export default Accommodations;