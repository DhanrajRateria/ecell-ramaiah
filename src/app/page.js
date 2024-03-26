import Image from "next/image";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <div className="mt-24 ml-4 text-8xl font-bold text-center text-white leading-[88px] tracking-[4.7px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
      We’re Ecell Ramaiah
      </div>
      <div className="mt-14 ml-5 text-xl leading-6 text-center text-white text-opacity-60 max-md:mt-10 max-md:max-w-full">
      At Ramaiah Institute of Technology, we are the catalysts of tomorrow's entrepreneurs. Welcome to a realm where visionaries thrive. Discover our
      dynamic network, signature events, and the relentless pursuit of innovation that defines our journey forward.
      </div>
      <div className=" text-white">Get started</div>
      <div className="self-center mt-2.5 text-5xl font-bold  text-white text-justify bg-clip-text leading-[66px] max-md:max-w-full">
      Our Mission Statement
      </div>
      <div className="self-center mt-16 text-xl font-bold leading-9 text-center text-white w-[904px] max-md:mt-10 max-md:max-w-full">
      Our mission at Ecell is to foster a culture of innovation and
      entrepreneurship in the college community. We aim to inspire, educate, and
      empower students to think outside the box, transform their ideas into
      viable business ventures, and make a meaningful impact in the
      entrepreneurial world.
      </div>
      <div className="mt-3.5 text-5xl text-justify bg-clip-text  text-white leading-[66px]">
      The Departments
      </div>
      <div className="mt-24 text-xl leading-9 text-center text-white w-[904px] max-md:mt-10 max-md:max-w-full">
      The E-Cell is divided into 10 departments, each of which is responsible
      for a specific aspect of the club. The departments are as follows:
    </div>
    </main>
  );
}
