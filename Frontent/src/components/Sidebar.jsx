import React from 'react';

const Sidebar = () => {
  return (
    <>
      <input type="checkbox" id="btn" className="hidden" />
      <div className="fixed top-0 left-0 w-full h-full bg-gray-200 z-10 transform -translate-x-full transition-transform duration-300 md:translate-x-0 md:w-auto md:relative">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <a href="#">CodingLab</a>
          </div>
          <label htmlFor="btn" className="icon cursor-pointer md:hidden text-2xl">
            <span className="fa fa-times"></span>
          </label>
        </div>
        <ul className="flex flex-col items-center space-y-4 mt-4 md:hidden">
          <li><a href="#" className="text-lg text-gray-700 hover:text-blue-500 transition">Home</a></li>
          <li><a href="#" className="text-lg text-gray-700 hover:text-blue-500 transition">About</a></li>
          <li><a href="#" className="text-lg text-gray-700 hover:text-blue-500 transition">Services</a></li>
          <li><a href="#" className="text-lg text-gray-700 hover:text-blue-500 transition">Portfolio</a></li>
          <li><a href="#" className="text-lg text-gray-700 hover:text-blue-500 transition">Contact</a></li>
          <li><a href="#" className="text-lg text-gray-700 hover:text-blue-500 transition">Feedback</a></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
