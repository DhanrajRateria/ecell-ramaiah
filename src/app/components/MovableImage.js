import Image from 'next/image';
import { useState, useEffect } from "react";

const MovableImage = ({ src, initialX, initialY }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: initialX, y: initialY });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setPosition({ x: e.clientX - initialX, y: e.clientY - initialY });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="cursor-move ml-4"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        zIndex: isDragging ? 9999 : 1,
        transition: "top 0.3s ease, left 0.3s ease",
      }}
    >
      <Image
        src={src}
        alt="Movable Image"
        width={200}
        height={200}
        className="rotate-[-38deg] rounded-[240.5px]"
        layout="responsive"
      />
    </div>
  );
};

export default MovableImage;