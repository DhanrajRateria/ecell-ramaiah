import Layout from "./layout";
import { Member } from "../components/Member";

const Teams = () => {
  const members = [
    // Add 30 members here
    { name: "John Doe", image: "/images/members/john.jpg", designation: "CEO", link: "#" },
    { name: "Jane Doe", image: "/images/members/jane.jpg", designation: "CTO", link: "#" },
    // Add more members as needed
  ];

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-8">
        {members.map((member, index) => (
          <Member key={index} {...member} />
        ))}
      </div>
    </Layout>
  );
};

export default Teams;
