import React, { useState, useEffect } from 'react'
const API_URL = import.meta.env.VITE_API_URL;

const OurTour = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/tours`)
      .then(res => res.json())
      .then(data => setTours(data))
      .catch(err => console.error("Error fetching tours:", err));
  }, []);

  return (
    <div>
      <div className='border-2 m-5 h-auto'>
        <p className='flex justify-center text-3xl font-extrabold mb-6'>Our Tour</p>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {/* Map through the LIVE database data */}
          {tours.map((tour) => (
            <div key={tour._id} className='relative m-2 h-auto overflow-hidden border rounded-lg shadow-md bg-white'>
              <img 
                className='w-full h-64 object-cover hover:scale-105 transition duration-300' 
                src={tour.image} 
                alt={tour.title} 
              />
              <div className="p-4">
                <p className='flex justify-center text-2xl font-bold mb-3'>{tour.title}</p>
                {/* Clamp text to 3 lines so cards stay even size */}
                <p className='text-gray-600 text-sm line-clamp-3 mb-4'>
                    {tour.description}
                </p>
                <div className='flex justify-center'>
                  <button className='bg-red-600 px-6 py-2 text-white text-lg rounded-full font-semibold cursor-pointer active:scale-95 hover:bg-red-700 transition'>
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurTour