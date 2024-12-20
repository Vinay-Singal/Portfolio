import React from "react";
import mongodbLogo from "../../public/mongodb-logo.png";
import expressLogo from "../../public/express-logo.jpg";
import reactLogo from "../../public/react-logo.jpg";
import nodeLogo from "../../public/node.png";
import phpLogo from "../../public/php-logo.png";

function Portfolio() {
  const cardItems = [
    {
      id: 1,
      logo: mongodbLogo,
      name: "MongoDB",
      details: `MongoDB is a NoSQL database I employed in <strong> Bookstore </strong> and <strong> Credential Management System </strong>. It helped me handle large-scale, unstructured data with high flexibility and efficiency, ensuring secure data storage, seamless querying, and reliable performance.`,
    },
    {
      id: 2,
      logo: expressLogo,
      name: "Express",
      details: `Express.js is a fast and flexible web framework for Node.js. I used it in <strong> Bookstore </strong> and <strong> Credential Management System </strong> to develop RESTful APIs, manage routing, and implement server-side logic, optimizing the overall performance and security of both projects.`,
    },
    {
      id: 3,
      logo: reactLogo,
      name: "ReactJS",
      details: `React.js is my preferred JavaScript library for building dynamic, interactive UIs. In my Personal <strong> Portfolio </strong> and <strong> Bookstore </strong> projects, I leveraged React's component-based architecture to create seamless, responsive user experiences and real-time data updates.`,
    },
    {
      id: 4,
      logo: nodeLogo,
      name: "NodeJS",
      details: `Node.js is essential for building scalable, high-performance backend systems. I utilized it in the <strong> Bookstore </strong> and <strong> Credential Management System </strong> projects to develop efficient APIs, manage asynchronous operations, and handle real-time user interactions.`,
    },
    {
      id: 5,
      logo: phpLogo,
      name: "PHP",
      details: `PHP is central to the backend development of projects like <strong>CarAxia</strong> and <strong>MeTV</strong>. In these projects, I utilized PHP to manage server-side processes, implement user authentication, interact with MySQL databases, and create dynamic, feature-rich web applications.`,
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w screen-2xl container mx-auto px-4 md:px-20 "
    >
      <div>
        <h1 className="text-3xl font-bold mb-2 ">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
          {cardItems.map(({ id, logo, name, details }) => (
            <div
              className="md:w-[300px] md:h-[500px] border-2px rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="font-semibold text-xl mb-2 ">{name}</div>
                <p
                  dangerouslySetInnerHTML={{ __html: details }}
                  className="px-2 text-grey-700 "
                />
                <div className="px-6 py-4 justify-around space-x-3">
                  <button
                    className="bg-blue-500 hover:bg-gray-700 text-white font-bold px-3 py-2 rounded hover:cursor-not-allowed"
                    // onClick={() => window.open('https://your-live-demo-url.com', '_blank')}
                    // disabled
                  >
                    demo
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                    onClick={() =>
                      window.open("https://github.com/Vinay-Singal?tab=repositories", "_blank")
                    }
                  >
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
