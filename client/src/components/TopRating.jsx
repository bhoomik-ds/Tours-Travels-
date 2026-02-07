import React from 'react'

const TopRating = () => {

  // Data for the cards (Easy to edit)
  const cardData = [
    {
      id: 1,
      title: "Sunrise",
      desc: "“At Girnar, every sunrise feels like a spiritual awakening”",
      img: "https://images.unsplash.com/photo-1685132213084-927d705da971?w=600&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      title: "Midday",
      desc: "“Midday at Girnar, the hills echo with history and divine energy”",
      img: "https://images.unsplash.com/photo-1626274308937-ae5af094a9e0?w=600&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      title: "Sunset",
      desc: "“Girnar’s sunset paints the sky with devotion and serenity”",
      img: "https://images.unsplash.com/photo-1675999620426-394d0f866519?w=600&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <div className='w-full'>
      
      {/* Main Background Section */}
      <div
        className="relative min-h-screen w-full bg-cover bg-center bg-fixed flex items-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dd4lbhc8g/image/upload/v1770269969/a14_nsnpwb.jpg')" }}
      >
        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
          
          {/* CHANGED: Grid layout adjusted to give cards more width (lg:grid-cols-5) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

            {/* LEFT SIDE: Title & Quote (Occupies 2/5 columns now) */}
            <div className='text-center lg:text-left lg:col-span-2'>
              <h1 
                className="text-6xl md:text-7xl font-extrabold text-yellow-500 mb-6"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
              >
                Girnar Hills
              </h1>
              
              <p 
                className="text-2xl md:text-4xl font-bold text-yellow-400 leading-snug"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
              >
                “Where sacred temples meet breathtaking trails and panoramic views”
              </p>
            </div>

            {/* RIGHT SIDE: Cards List (Occupies 3/5 columns now - Wider!) */}
            <div className="flex flex-col gap-8 lg:col-span-3">
              {cardData.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                  
                  {/* Card Image - Increased height */}
                  <div className="w-full sm:w-2/5 h-64 sm:h-auto min-h-[250px]">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="h-full w-full object-cover" 
                    />
                  </div>

                  {/* Card Content - Increased padding and font sizes */}
                  <div className="w-full sm:w-3/5 p-8 flex flex-col justify-center gap-4">
                    {/* Bigger Title */}
                    <h2 className="text-3xl font-bold text-gray-800">{item.title}</h2>
                    
                    {/* Bigger Text */}
                    <p className="text-gray-600 italic text-xl leading-relaxed">{item.desc}</p>
                    
                    {/* Bigger Button */}
                    <button className="bg-red-600 text-white font-semibold py-3 px-8 text-lg rounded-full hover:bg-red-700 active:scale-95 transition-all shadow-md w-fit mt-2">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default TopRating