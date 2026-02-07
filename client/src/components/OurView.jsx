import React from 'react'
import { Link } from 'react-router-dom';

const OurView = () => {
  return (
    <div className="w-full my-12 px-5">
      
      {/* Container with Parallax Background Image */}
      <div 
        className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center bg-fixed bg-cover bg-center group"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop')" 
        }}
      >
        
        {/* Dark Overlay (Gradient) for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Floating Content Box (Glassmorphism) */}
        <div className="relative z-10 text-center px-8 py-10 max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105">
          
          <span className="text-yellow-400 font-bold tracking-widest text-sm uppercase mb-2 block">
            Discover the Unseen
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg mb-4">
            Your Journey <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Begins Here</span>
          </h1>
          
          <p className="text-gray-200 text-lg md:text-xl font-medium mb-8 max-w-lg mx-auto leading-relaxed">
            Explore breathtaking destinations, ancient temples, and hidden gems with our curated tours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all duration-300">
                Explore Destinations
              </button>
            </Link>
            
            <Link to="/contact">
              <button className="px-8 py-3 bg-white/10 text-white border border-white/30 font-bold text-lg rounded-full backdrop-blur-sm hover:bg-white hover:text-orange-600 transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </div>

        </div>
      </div>

      {/* Optional: Small Info Cards below (to merge into the next section) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-10 relative z-20 px-4 md:px-20">
        {[
          { label: "Happy Travelers", value: "10k+" },
          { label: "Top Destinations", value: "50+" },
          { label: "Years Experience", value: "12+" },
          { label: "Reviews", value: "4.9/5" },
        ].map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-lg text-center border-b-4 border-orange-500">
            <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
            <p className="text-xs text-gray-500 uppercase font-semibold">{stat.label}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default OurView