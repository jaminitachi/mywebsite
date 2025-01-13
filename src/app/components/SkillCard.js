import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className="group relative overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
      <div className="relative p-4 flex items-center justify-center h-full">
        <span className="text-lg font-medium text-gray-800 group-hover:text-white transition-colors duration-300 ease-in-out">
          {skill}
        </span>
      </div>
    </div>
  );
};

export default SkillCard;
