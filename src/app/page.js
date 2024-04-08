"use client"

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Department from "./components/Department";
import Footer from "./components/Footer";
import Image from "next/image"
import RootLayout from "./layout";
import Link from "next/link";
import Event from "./components/Events";
import MovableImage from "./components/MovableImage";

export default function Home() {
  const departmentsData = [
    { name: "Upstarters", image: "/images/Departments/upstarters.png" },
    { name: "Event Management", image: "/images/Departments/eventmanage.png" },
    { name: "PR and Sponsorship", image: "/images/Departments/prands.png" },
    { name: "Publicity", image: "/images/Departments/publicity.png" },
    { name: "Design", image: "/images/Departments/design.png" },
  ];

  const imageData = [
    { src: "/images/sphere.png", initialX: 0, initialY: 0 },
    { src: "/images/fuller.png", initialX: 1300, initialY: 100 },
    { src: "/images/ring.png", initialX: 200, initialY: 400 },
    { src: "/images/spring.png", initialX: 1100, initialY: 400 },
    { src: "/images/solid.png", initialX: 1300, initialY: 800 },
    { src: "/images/hexagon.png", initialX: 0, initialY: 800 },
  ];

const eventsData = [
    {
      imageUrl: "/images/events/gfc.png",
      title: "Goal for Cause",
      objective: "Fostering team work and spirit.",
      activities: "Football Matches",
      description: "Goal for a Cause was an exciting event organized by E-Cell where different clubs enthusiastically competed with each other in the game of football. The event started with the arrival of Mrs. Ashwini Revanath, w/o Late Dr. Puneet Rajkumar, who lit the lamp and inaugurated the program.",
    },
    {
      imageUrl: "/images/events/pradarshana.png",
      title: "Pradarshana",
      objective: "Showcasing the latest in technology and innovation.",
      activities: "Product demos, workshops, tech talks.",
      description: "Discover cutting-edge technologies and explore how they're shaping the future across various industries.",
    },
    {
      imageUrl: "/images/events/workshop.png",
      title: "Entrepreneurship Workshop",
      objective: "To promote entrepreneurship skills in students.",
      activities: "A workshop on entrepreneurship and the skills required for it was held",
      description: "Students were told what entrepreneurship actually is, how to do it and the various skills required for it.",
    },
  ];


  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setInitialPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - initialPosition.x,
        y: e.clientY - initialPosition.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => {
      setPosition({ x: 0, y: 0 });
    }, 300);
  };

  return (
    
    <RootLayout>
    <main className="flex flex-col items-center justify-between p-24 min-h-screen" onMouseMove={handleMouseMove}
    onMouseUp={handleMouseUp}>
        <Navbar />
        <div className="container">
      {imageData.map((image) => (
        <MovableImage
          key={image.src}
          {...image}
        />
      ))}
    </div>
      <div className="flex flex-col items-center justify-center mt-24 text-center text-white max-md:mt-10 max-md:max-w-full">
        <h1 className="text-8xl font-bold leading-[88px] tracking-[4.7px]">
          We’re Ecell Ramaiah
        </h1>
        <p className="mt-14 text-xl leading-6">
          At Ramaiah Institute of Technology, we are the catalysts of tomorrow&apos;s entrepreneurs. Welcome to a realm where visionaries thrive. Discover our dynamic network, signature events, and the relentless pursuit of innovation that defines our journey forward.
        </p>
        <button className="mt-10 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
          Get started
        </button>
      </div>
      <div className="self-center mt-16 text-5xl font-bold text-white bg-clip-text leading-[66px] max-md:max-w-full">
          About us
      </div>
      <div className="flex flex-col items-center justify-center mt-8 text-center text-white max-md:max-w-full relative space-y-8">
  <div className="w-full max-w-[836.10px] bg-zinc-900 rounded-[18.79px] border border-zinc-700 mb-4 relative">
    <p className="p-8 text-lg leading-7">
      It&apos;s a club for MSRIT students which is dedicated to the development of multidimensional skills. EDC serves as a forum to bring together the heterogeneous culture of students from various disciplines.
    </p>
  </div>
  <div className="w-full max-w-[836.10px] bg-zinc-900 rounded-[18.79px] border border-zinc-700 mb-4 relative">
    <p className="p-8 text-lg leading-7">
      EDC invites various eminent entrepreneurs to deliver lectures in order to educate students about the joys and hardships of entrepreneurship. 
    </p>
    <div className="absolute inset-y-0 left-0 flex items-center ml-4">
            <Image src="/images/vector.png" alt="Vector" className="mt-[-50px] z-20 relative transform -translate-y-1/2" width={15} height = {15} />
    </div>
    <div className="absolute inset-y-0 right-0 flex items-center mr-4">
      <Image src="/images/vector.png" alt="Vector" className="mt-[-50px] z-20 relative transform -translate-y-1/2" width={15} height = {15}/>
    </div>
  </div>
  <div className="w-full max-w-[836.10px] bg-zinc-900 rounded-[18.79px] border border-zinc-700 mb-4 relative">
    <p className="p-8 text-lg leading-7">
      Guest lectures, workshops, case studies and group discussions are conducted throughout the year to involve students in activities that are essential to be an entrepreneur.
    </p>
    <div className="absolute inset-y-0 left-0 flex items-center ml-4">
      <Image src="/images/vector.png" alt="Vector" className="mt-[-50px] z-20 relative transform -translate-y-1/2" width={15} height = {15}/>
    </div>
    <div className="absolute inset-y-0 right-0 flex items-center mr-4">
      <Image src="/images/vector.png" alt="Vector" className="mt-[-50px] z-20 relative transform -translate-y-1/2" width={15} height = {15}/>
    </div>
  </div>
      </div>
      <div className="self-center mt-16 text-5xl font-bold text-white bg-clip-text leading-[66px] max-md:max-w-full">
        Our Mission Statement
      </div>
      <div className="flex flex-col items-center justify-center mt-8 text-center text-white max-md:max-w-full">
        <p className="mt-8 text-xl font-bold leading-9">
          Our mission at Ecell is to foster a culture of innovation and entrepreneurship in the college community. We aim to inspire, educate, and empower students to think outside the box, transform their ideas into viable business ventures, and make a meaningful impact in the entrepreneurial world.
        </p>
      </div>
      <div className="self-center mt-16 text-5xl font-bold text-white bg-clip-text leading-[66px] max-md:max-w-full">
      The Departments
    </div>
    <div className="grid grid-cols-2 gap-8 mt-8 max-md:max-w-full">
      {departmentsData.map((department, index) => (
        <Department key={index} image={department.image} name={department.name} />
      ))}
    </div>
      <Link
        href="/departments"
        className="mt-10 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
  
    Explore
  
</Link>
      <div className="self-center mt-16 text-5xl font-bold text-white bg-clip-text leading-[66px] max-md:max-w-full">
      Events
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {eventsData.map((event, index) => (
            <Event key={index} {...event} />
          ))}
        </div>
        <Link
          href="/events"
          className="mt-10 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Explore More
        </Link>
      <Footer/>
      </main>
      </RootLayout>
  );
}