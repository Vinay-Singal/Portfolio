import React from "react";

function Experiance() {
  const cardItems = [
    { id: 1, logo: "/HTML5.png", name: "HTML5" },
    { id: 2, logo: "/css.png", name: "CSS3" },
    { id: 3, logo: "/JavaScript.png", name: "JavaScript" },
    { id: 4, logo: "/nosql.png", name: "NoSql" },
    { id: 5, logo: "/MySql.jpg", name: "MySql" },
    { id: 6, logo: "/mongodb-compass.png", name: "MongoDBCompass" },
    { id: 7, logo: "/PostgreSQL.png", name: "PostgreSQL" },
    { id: 8, logo: "/daisyui.png", name: "DaisyUI" },
    { id: 9, logo: "/sql-logo.png", name: "SQL" },
    { id: 10, logo: "/postman.jpg", name: "Postman" },
    { id: 11, logo: "/msoffice.png", name: "Microsoft Office" },
    { id: 12, logo: "/react-logo.jpg", name: "React" },
    { id: 13, logo: "/mongodb-logo.png", name: "MongoDB" },
  ];

  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
      <div>
        <h1 className="text-3xl font-bold mb-2">Hands-On Experience</h1>
        <p>
          I have gained practical experience with the following technologies during my internship.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-3">
          {cardItems.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-2 rounded-full shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} alt={name} className="w-[150px] p-1 rounded-lg" />
              <div className="font-semibold text-xl mb-2 text-center">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
