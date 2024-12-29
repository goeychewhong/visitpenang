import React from 'react';

function TouristSpotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex flex-col items-center justify-center p-6">
      <div className="w-full bg-white shadow-2xl rounded-lg p-8">
        <h1 className="text-5xl font-extrabold mb-6 text-center text-blue-700">Explore Penang</h1>
        <p className="text-gray-800 mb-8 text-center">
          Discover the beautiful tourist spots in Penang. From historical sites to stunning beaches, Penang has it all.
        </p>
        <div className="flex justify-center">
          <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default TouristSpotPage;