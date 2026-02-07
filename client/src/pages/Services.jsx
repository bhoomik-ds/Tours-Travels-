import React, { useState, useEffect } from 'react';
const API_URL = import.meta.env.VITE_API_URL;

const Services = () => {
  // 1. State to hold the data from Backend (Start empty)
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Fetch data when page loads
  useEffect(() => {
    // This URL must match your Backend Route
    fetch(`${API_URL}/api/services`) 
      .then(response => response.json())
      .then(data => {
        console.log("Data from DB:", data); // Check console to see if data arrives
        setServices(data); 
        setLoading(false); 
      })
      .catch(error => {
        console.error("Error fetching services:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-20 text-xl">Loading Services...</div>;

  return (
    <div className="pt-24 px-6 min-h-screen bg-gray-50 pb-12">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We provide end-to-end travel solutions to make your Gujarat trip unforgettable.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        {/* If no services are found in DB, show this message */}
        {services.length === 0 && (
           <p className="text-center col-span-3 text-red-500">No services found in database yet.</p>
        )}

        {/* Map through the LIVE data from MongoDB */}
        {services.map((service) => (
          <div key={service._id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            {/* Display the Icon */}
            <div className="text-4xl mb-4">{service.icon}</div>
            
            {/* Display the Title */}
            <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
            
            {/* Display the Description */}
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Services;