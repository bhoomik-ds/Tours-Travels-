import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Contact Info */}
        <div className="bg-blue-600 text-white p-8 md:w-1/3 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6 text-blue-100">Have questions about your next trip? We'd love to hear from you.</p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span>📍</span>
              <p>Junagadh, Gujarat</p>
            </div>
            <div className="flex items-center gap-3">
              <span>📞</span>
              <p>+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-3">
              <span>✉️</span>
              <p>support@travelbrand.com</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 md:w-2/3">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="First Name" 
                className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <textarea 
              rows="4" 
              placeholder="Your Message..." 
              className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            
            <button 
              type="button" 
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;