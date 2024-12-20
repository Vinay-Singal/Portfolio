import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { ReactTyped, Typed } from "react-typed";
import profile from "../../public/profile.png";
import { Link } from "react-scroll";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w screen-2xl container mx-auto px-4 md:px-20 my-20 "
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 md:order-1 order-2">
            <span className="text-xl">Welcome To My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl ">
              <h1 className="">Hello, I'm a</h1>
              {/* <span className="text-red-700">Developer</span> */}
              <ReactTyped
                // typedRef={setTyped}
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
                className="text-red-700"
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              As a passionate Web Developer, I specialize in crafting dynamic,
              responsive websites and applications that deliver exceptional user
              experiences. With expertise in both front-end and back-end
              technologies, including React, Node.js, MongoDB, and more, I excel
              at transforming innovative concepts into intuitive,
              high-performing digital solutions. Whether you are looking to
              develop a new project or enhance an existing one, I am committed
              to delivering solutions that not only meet but exceed your
              expectations. Explore my work and let's collaborate to bring your
              vision to life.
            </p>
            <br />
            {/* social media icons */}
            <div className="md:flex items-center justify-center md:justify-between space-y-6 md:space-y-0 ">
              <div className="space-y-1 ">
                <h1 className="font-bold md:text-left text-center">
                  Available on
                </h1>
                <span className="flex space-x-4 justify-center">
                  <a href="https://www.linkedin.com/in/singalvinay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <FaLinkedin
                    className="text-xl md:text-3xl hover:scale-110 duration-200 text-[#0077B5]"
                    size={24}
                  />
                  </a>
                  <a href="https://www.instagram.com/singal_jaat_000/" target="_blank" rel="noopener noreferrer">
                  <FaSquareInstagram
                    className="text-xl md:text-3xl hover:scale-110 duration-200 text-[#E1306C]"
                    size={24}
                  />
                  </a>
                  <a href="https://github.com/Vinay-Singal" target="_blank" rel="noopener noreferrer">
                  <FaGithub
                    className="text-xl md:text-3xl hover:scale-110 duration-200"
                    size={24}
                  />
                  </a>
                  <a href="mailto:vinaysingal123ghn@gmail.com" target="_blank" rel="noopener noreferrer">
                    <TbMailFilled
                    size={32}
                    className="mt-[-4px] text-xl md:text-3xl hover:scale-110 duration-200"
                  />
                  </a>
                </span>
              </div>
              <div className="space-y-1 text-center ">
                <h1 className="font-bold ">Currently working on</h1>
                <span className="flex space-x-4 justify-center">
                  <SiMongodb
                    className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]  text-lime-700"
                    size={24}
                  />
                  <SiExpress
                    className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"
                    size={24}
                  />
                  <FaReact
                    className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] text-blue-700"
                    size={24}
                  />
                  <FaNodeJs
                    className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] mt-[-4px] text-lime-800"
                    size={30}
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 md:order-2 order-1">
            <img
              src={profile}
              className="rounded-full md:w-[450px] md:h-[450px] hover:shadow-2xl"
              alt=""
            />
          </div>
        </div>
        <br />
        <hr />
      </div>
    </>
  );
}

export default Home;
