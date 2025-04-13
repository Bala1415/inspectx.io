// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="font-bold text-xl mb-4">INSPECTX Pro</h3>
          <p className="text-gray-300 mb-4">
            Revolutionizing industrial inspections with AI-powered technology.
          </p>
          <div className="flex space-x-4">
            <a href="https://twitter.com" className="text-gray-300 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://linkedin.com" className="text-gray-300 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
            <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
            <li><Link to="/features" className="text-gray-300 hover:text-white">Features</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li><a href="/services" className="text-gray-300 hover:text-white">Visual AI Inspection</a></li>
            <li><a href="/services" className="text-gray-300 hover:text-white">Thermal Imaging</a></li>
            <li><a href="/services" className="text-gray-300 hover:text-white">Defect Detection</a></li>
            <li><a href="/services" className="text-gray-300 hover:text-white">Custom AI Models</a></li>
            <li><a href="/services" className="text-gray-300 hover:text-white">Performance Analytics</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <address className="not-italic text-gray-300">
            <p>123 Tech Park Avenue</p>
            <p>Sector 4, Bangalore</p>
            <p>Karnataka – 560103, India</p>
            <p className="mt-3">support@inspectxpro.com</p>
            <p>+91 98765 43210</p>
          </address>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; {currentYear} INSPECTX Pro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;