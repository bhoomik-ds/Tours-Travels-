import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-20
               bg-white/20 backdrop-blur-xl text-white
               hover:bg-white/40 transition-all duration-300
               w-12 h-12 rounded-full shadow-xl
               active:scale-75 active:bg-white/60
               flex items-center justify-center"
  >
    <span className="text-2xl font-bold">&lt;</span>
  </button>
);



// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-20
               bg-white/20 backdrop-blur-xl text-white
               hover:bg-white/40 transition-all duration-300
               w-12 h-12 rounded-full shadow-xl
               active:scale-75 active:bg-white/60
               flex items-center justify-center"
  >
    <span className="text-2xl font-bold">&gt;</span>
  </button>
);


const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slick-dots custom-dots",
  };

  const images = [
    
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1685132213084-927d705da971?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1706163903474-dfa8697c0134?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",     
    "https://www.indiatravel.app/wp-content/uploads/2024/03/Uperkot-Fort-1024x585.jpg",
    "https://discoverindiabyroad.com/wp-content/uploads/2020/06/Sakkarbaug-Zoo-Ticket-window.jpg",
    "https://uparkotfort.com/wp-content/uploads/2024/01/R-1024x640.jpg",
    "https://tripmusing.com/wp-content/uploads/2025/03/Gir-National-Park-and-Santuary.webp",
    "https://images.unsplash.com/photo-1570605505301-0f713202ca7a?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://t4.ftcdn.net/jpg/03/02/88/31/360_F_302883197_UvUR7GVgDZxTSpDA5QauVNJ9yoyXXpwr.jpg", 
    "https://iasbaba.com/wp-content/uploads/2022/07/sun.jpg",
    "https://www.shadowsgalore.com/wp-content/uploads/2016/10/Laxmi_Vilas_Palace.jpg"
  ];



const pname = [
  "Junagadh Fort",
  "Girnar Hills",
  "Mahabat Maqbara",
  "Uperkot Fort",
  "Sakkarbaug Zoo",
  "Ashoka Rock Edicts",
  "Gir National Park",
  "Adalaj Stepwell",
  "Rani ki Vav",
  "Modhera SunTemple",
  "Laxmi Vilas Palace",
  "Somnath Temple"
]

const sname = [
  "Ancient | Stronghold | Heritage",
  "Sacred | Mountain | Pilgrimage",
  "Ornate | Islamic | Architecture",
  "Historic | Fortification | Views",
  "Wildlife | Conservation | Family",
  "Edicts | History | Inscriptions",
  "Wildlife | Sanctuary | Lions",
  "Scenic | Waterfall | Nature",
  "Cultural | Poet | Legacy",
  "Intricate | Stepwell | Architecture",
  "Sun | Temple | Architecture",
  "Historic | Stepwell | UNESCO",
  "Ancient | Temple | Sun",
  "Royal | Palace | Grandeur",
  "Architectural | Mosque | History",
  "Historic | Mosque | Heritage",
  "Sacred | Temple | Pilgrimage"
]

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index} className="relative object-cover">
            {/* <img
  src={url}
  alt={`Slide ${index + 1}`}
  className="w-full h-[500px] object-contain rounded-xl"
/> */}

            <img
              src={url}
              alt={`Slide ${index + 1}`}
              className="w-full h-screen object-cover rounded-xl"
            />

            {/* Optional overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>

            {/* Optional text overlay */}
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
                {pname[index]}
              </h2>
              <p className="text-lg md:text-xl mt-2 opacity-90">
                {sname[index]}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Dots Styling */}
      <style>{`
        .custom-dots li button:before {
          font-size: 12px;
          color: white;
          opacity: 0.6;
        }
        .custom-dots li.slick-active button:before {
          color: #ffffff;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Hero;
