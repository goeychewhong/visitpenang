import React from 'react';

function FnBPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-300 flex flex-col items-center justify-center p-6">
      <div className="w-full bg-white shadow-2xl rounded-lg p-8">
        <h1 className="text-5xl font-extrabold mb-6 text-center text-green-700">Beverages and Food</h1>
        <p className="text-gray-800 mb-8 text-center">
          Indulge in the diverse and delicious food scene in Penang. From street food to fine dining, there's something for everyone.
        </p>
        <div className="flex justify-center">
          <button className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
}

export default FnBPage;
