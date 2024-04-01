import React from 'react';
import Image from 'next/image'

const Event = ({ imageUrl, title, objective, activities, description }) => {
  return (
    <div className="flex items-start justify-start relative bg-white rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-md mb-6">
      <div className="flex-grow px-12 py-12 w-full text-justify">
        <div className="text-4xl font-semibold bg-clip-text leading-15">
          {title}
        </div>
        <div className="mt-14 text-2xl leading-10 bg-clip-text">
          <p className="font-bold">Objective:</p>
          <p>{objective}</p>
        </div>
        <div className="mt-4 text-2xl leading-10 bg-clip-text">
          <p className="font-bold">Activities:</p>
          <p>{activities}</p>
        </div>
        <div className="mt-4 text-2xl leading-10 bg-clip-text">
          <p className="font-bold">Description:</p>
          <p>{description}</p>
        </div>
      </div>
      <div className="relative w-1/3">
        <Image src={imageUrl} alt="Event" width={400} height={400} />
        <div className="absolute bottom-0 left-0 bg-white border-t-2 border-r-2 border-gray-300 w-6 h-6 transform rotate-180"></div>
      </div>
    </div>
  );
};

export default Event;