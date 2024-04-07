"use client"

import Layout from "./layout";
import { Member } from "../components/Member";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Teams = () => {
  const members = [
    // Add 30 members here
    // { name: "John Doe", image: "/images/members/john.jpg", designation: "CEO", link: "#" },
    // { name: "Jane Doe", image: "/images/members/jane.jpg", designation: "CTO", link: "#" },
    // Add more members as needed
  ];

  return (
    <Layout>
      <Navbar />
      <div className="grid grid-cols-3 gap-8">
        {members.map((member, index) => (
          <Member key={index} {...member} />
        ))}
      </div>
      <Footer />
    </Layout>
  );
};

export default Teams;
