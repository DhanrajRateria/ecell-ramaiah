import React from "react";

const Department = ({ image, name }) => {
  return (
    <div className="flex items-center gap-5 px-12 py-10 mt-2 text-3xl leading-6 capitalize whitespace-nowrap rounded-xl shadow-md bg-gray-700 bg-opacity-90 max-md:px-5">
      <img
        loading="lazy"
        src={image}
        alt={name}
        className="w-20 h-20 object-cover rounded-full"
      />
      <div className="text-white">{name}</div>
    </div>
  );
};

export default Department;