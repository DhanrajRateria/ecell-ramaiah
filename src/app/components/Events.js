import React, { useState } from 'react';
import Image from "next/image";

const Event = ({ imageUrl, title, objective, activities, description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="event-container w-full mb-8">
      <div className="event-content bg-gray-800 border border-gray-400 rounded-lg overflow-hidden">
        <div className="relative aspect-w-16 aspect-h-9">
          <Image
            src={imageUrl}
            alt="Event"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h2 className="text-white text-2xl font-semibold mb-2">{title}</h2>
          <div className="text-gray-300 mb-4">
            <p className="font-bold">Objective:</p>
            <p>{objective}</p>
          </div>
          <div className="text-gray-300 mb-4">
            <p className="font-bold">Activities:</p>
            <p>{activities}</p>
          </div>
          <div className="text-gray-300 mb-4">
            <p className="font-bold">Description:</p>
            {expanded ? (
              <p>{description}</p>
            ) : (
              <p className="truncate">{description}</p>
            )}
            <button className="read-more" onClick={toggleDescription}>
              {expanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;