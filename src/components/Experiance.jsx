import React from "react";
import mongodbLogo from "../../public/mongodb-logo.png";
import daisyui from "../../public/daisyui.png";
import reactLogo from "../../public/react-logo.jpg";
import msoffice from "../../public/msoffice.png";
import sql from "../../public/sql-logo.png";
import html from "../../public/HTML5.png"
import css from "../../public/css.png"
import JavaScript from "../../public/JavaScript.png"
import mongodbCompass from "../../public/mongodb-compass.png"
import nosql from "../../public/nosql.png"
import postman from "../../public/postman.jpg"
import postgresql from "../../public/PostgreSQL.png"
import mysql from "../../public/MySql.jpg"


function Experiance() {
  const cardItems = [
    {
      id: 1,
      logo: html,
      name: "HTML5",
    },
    {
      id: 2,
      logo: css,
      name: "CSS3",
    },
    {
      id: 3,
      logo: JavaScript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: nosql,
      name: "NoSql",
    },
    {
      id: 5,
      logo: mysql,
      name: "MySql",
    },
    {
      id: 6,
      logo: mongodbCompass,
      name: "MongoDBCompass",
    },
    {
      id: 7,
      logo: postgresql,
      name: "PostgreSQL",
    },
    {
      id: 8,
      logo: daisyui,
      name: "DaisyUI",
    },
    {
      id: 9,
      logo: sql,
      name: "SQL",
    },
    {
      id: 10,
      logo: postman,
      name: "Postman",
    },
    {
      id: 11,
      logo: msoffice,
      name: "MicroSoft Office",
    },
  ];
  return (
    <div name="Experience" className="max-w screen-2xl container mx-auto px-4 md:px-20 my-10">
      <div>
        <h1 className="text-3xl font-bold mb-2 ">Hands-On Experience</h1>
        <p className="">I have gained practical experience with the following technologies during my internship</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-3 ">
          {cardItems.map(({ id, logo, name }) => (
            <div className="flex flex-col items-center justify-center border-2px rounded-full shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 " key={id}>
              <img src={logo} className="w-[150px] p-1 rounded-lg border-[0px]" alt="" />
              <div>
                <div className="font-semibold text-xl mb-2 text-center">
                  {name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
