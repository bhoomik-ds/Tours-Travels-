import React from 'react';
import AboutComponent from '../components/About'; // Importing your existing component

const About = () => {
  return (
    <div className="pt-20"> 
      {/* Added padding-top (pt-20) so it doesn't hide behind the Navbar */}
      <AboutComponent />
      
      {/* You can add more sections here if you want, like a "Team" section */}
      <div className="bg-blue-50 py-16 px-6 text-center mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We have 10+ years of experience in organizing comfortable and memorable trips across Gujarat.
        </p>
      </div>
    </div>
  )
}

export default About;