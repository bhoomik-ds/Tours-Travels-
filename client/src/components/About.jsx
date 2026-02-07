import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL

const About = () => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/about`)
      .then(res => res.json())
      .then(data => setAboutData(data))
      .catch(err => console.error("Error fetching about data:", err));
  }, []);

  // If no data is loaded yet, show a loading text or simpler placeholder
  if (aboutData.length === 0) return <div></div>; 

  return (
    <div>
      {aboutData.map((item) => (
        <div key={item._id} className='grid grid-cols-1 md:grid-cols-2 border-2 m-5 min-h-[500px]'>
          
          {/* Left Side: Image */}
          <div className='m-5 md:mr-10 overflow-hidden  flex items-center justify-center'>
            <img 
              className="w-full h-full  object-cover" 
              src={item.image} 
              alt={item.title} 
            />
          </div>

          {/* Right Side: Text */}
          <div className='m-5 flex flex-col justify-center'>
             <p className='text-5xl font-extrabold text-zinc-800 ml-10 mt-5'>{item.title}</p>
             
             {/* Handling the line break in subtitle if needed, or just displaying it */}
             <p className='text-4xl font-extrabold text-zinc-800 ml-10 mt-8 leading-tight'>
               {item.subtitle}
             </p>

             <p className='m-5 ml-10 text-xl text-gray-500 leading-relaxed'>
               {item.description}
             </p>
             
             <div className='ml-5 mt-5'>
               <Link 
                 to="/about" 
                 className='bg-red-600 rounded-full px-6 py-3 text-white text-xl font-bold ml-5 hover:bg-red-700 transition active:scale-95 inline-block text-center'
               >
                 About More
               </Link>
             </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default About