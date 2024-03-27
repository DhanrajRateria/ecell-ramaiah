"use client"

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Department from "./components/Department";

export default function Home() {
  const departmentsData = [
    { name: "Upstarters", image: "/images/Departments/upstarters.png" },
    { name: "Event Management", image: "/images/Departments/eventmanage.png" },
    { name: "PR and Sponsorship", image: "/images/Departments/prands.png" },
    { name: "Publicity", image: "/images/Departments/publicity.png" },
    { name: "Design", image: "/images/Departments/design.png" },
  ];
  return (
    <main className="flex flex-col items-center justify-between p-24 min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-24 text-center text-white max-md:mt-10 max-md:max-w-full">
        <h1 className="text-8xl font-bold leading-[88px] tracking-[4.7px]">
          We’re Ecell Ramaiah
        </h1>
        <p className="mt-14 text-xl leading-6">
          At Ramaiah Institute of Technology, we are the catalysts of tomorrow's entrepreneurs. Welcome to a realm where visionaries thrive. Discover our dynamic network, signature events, and the relentless pursuit of innovation that defines our journey forward.
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
      It's a club for MSRIT students which is dedicated to the development of multidimensional skills. EDC serves as a forum to bring together the heterogeneous culture of students from various disciplines.
    </p>
  </div>
  <div className="w-full max-w-[836.10px] bg-zinc-900 rounded-[18.79px] border border-zinc-700 mb-4 relative">
    <p className="p-8 text-lg leading-7">
      EDC invites various eminent entrepreneurs to deliver lectures in order to educate students about the joys and hardships of entrepreneurship. 
    </p>
    <div className="absolute inset-y-0 left-0 flex items-center ml-4">
      <img src="/images/vector.png" alt="Vector" className="mt-[-50px] z-20 relative transform -translate-y-1/2" />
    </div>
    <div className="absolute inset-y-0 right-0 flex items-center mr-4">
      <img src="/images/vector.png" alt="Vector" className="mt-[-50px] z-20 relative transform -translate-y-1/2" />
    </div>
  </div>
  <div className="w-full max-w-[836.10px] bg-zinc-900 rounded-[18.79px] border border-zinc-700 mb-4 relative">
    <p className="p-8 text-lg leading-7">
      Guest lectures, workshops, case studies and group discussions are conducted throughout the year to involve students in activities that are essential to be an entrepreneur.
    </p>
    <div className="absolute inset-y-0 left-0 flex items-center ml-4">
      <img src="/images/vector.png" alt="Vector" className="mt-[-50px] z-20 relative transform -translate-y-1/2" />
    </div>
    <div className="absolute inset-y-0 right-0 flex items-center mr-4">
      <img src="/images/vector.png" alt="Vector" className="mt-[-50px] z-20 relative transform -translate-y-1/2" />
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
    </main>
  );
}
