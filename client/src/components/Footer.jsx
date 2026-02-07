import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-10">
      
      {/* Top Gradient Line */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Incredible Gujarat
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            Discover the beauty, culture, and heritage of Gujarat.  
            Explore destinations, plan your journey, and experience unforgettable moments.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Explore</h3>
          <ul className="space-y-2">
            <li className="hover:text-white transition">Home</li>
            <li className="hover:text-white transition">About Us</li>
            <li className="hover:text-white transition">Top Destinations</li>
            <li className="hover:text-white transition">Travel Guides</li>
          </ul>
        </div>

        {/* Popular Destinations */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Destinations</h3>
          <ul className="space-y-2">
            <li className="hover:text-white transition">Girnar Hills (Junagadh)</li>
            <li className="hover:text-white transition">Rani ki Vav (Patan)</li>
            <li className="hover:text-white transition">Somnath Temple</li>
            <li className="hover:text-white transition">Dwarka Temple</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2">
            <li>Email: info@tourismGujarat.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Junagadh, Gujarat</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition">
              <i className="fa-brands fa-facebook-f">
                <img src="/img/instagram.png" alt="" />
              </i>
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition">
              <i className="fa-brands fa-instagram">
                <img src="/img/youtube.png" alt="" />
              </i>
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition">
              <i className="fa-brands fa-twitter">
                <img src="/img/facebook.png" alt="" />
              </i>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Incredible India Tourism. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
