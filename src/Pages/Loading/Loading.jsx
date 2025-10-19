import React from 'react';

const Loading = () => {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
          <div className="relative flex justify-center items-center mb-6">
            {/* Outer metallic ring */}
            <div className="w-20 h-20 border-8 border-t-transparent border-b-transparent border-l-red-600 border-r-blue-600 rounded-full animate-spin-fast shadow-[0_0_30px_rgba(0,0,0,0.8)]"></div>

            {/* Inner glowing core */}
            <div className="absolute w-10 h-10 bg-gradient-to-r from-red-700 to-blue-700 rounded-full animate-pulse shadow-[0_0_30px_rgba(59,130,246,0.6)]"></div>

            {/* Energy spark dots */}
            <div className="absolute w-3 h-3 bg-yellow-400 rounded-full animate-ping top-0 left-1/2 transform -translate-x-1/2"></div>
            <div className="absolute w-3 h-3 bg-yellow-400 rounded-full animate-ping bottom-0 left-1/2 transform -translate-x-1/2"></div>
          </div>

          {/* Loading text */}
          <h1 className="text-2xl font-bold tracking-widest animate-pulse uppercase text-red-500 drop-shadow-[0_0_10px_#ef4444]">
            Loading...
          </h1>
        </div>
      </div>
    );
};

export default Loading;