import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbMailFilled } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";


function Footer() {
  return (
    <>
    <footer className="justify-around px-4 md:px-20 my-20 ">
        <div className="flex flex-cols space-x-4 justify-center">
                  <a href="https://www.facebook.com/profile.php?id=100024456287914" target="_blank" rel="noopener noreferrer">
                  <FaFacebook
                    className="text-xl md:text-3xl hover:scale-110 duration-200 text-blue-700"
                    size={24}
                  />
                  </a>
                  <a href="https://www.instagram.com/singal_jaat_000/" target="_blank" rel="noopener noreferrer">
                  <FaSquareInstagram
                    className="text-xl md:text-3xl hover:scale-110 duration-200 text-[#E1306C]"
                    size={24}
                  /></a>
                  <a href="https://www.linkedin.com/in/singalvinay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <FaLinkedin
                    className="text-xl md:text-3xl hover:scale-110 duration-200 text-[#0077B5]"
                    size={24}
                    />
                    </a>
                  <a href="mailto:vinaysingal123ghn@gmail.com" target="_blank" rel="noopener noreferrer">
                  <TbMailFilled
                    size={32}
                    className="mt-[-4px] text-xl md:text-3xl hover:scale-110 duration-200 "
                  /> </a>
        </div>
        <div className='grid grid-cols gap-4 place-items-center '>
        <hr className="md:w-1/5 w-1/2 h-[2px] bg-slate-700 mt-4"/>
        <p className='text-sm text-center'> &copy; 2024 Vinay Singal. All rights reserved <br />
        Designed and Developed ❤️ Vinay Singal
        </p>
        </div>
    </footer>
    </>
  )
}

export default Footer
