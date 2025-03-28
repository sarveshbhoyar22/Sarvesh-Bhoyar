import React from 'react'
import Card from '../components/SocialMedia'
import CardSlider from '../components/CardSlider'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import LetsConnect from '../components/LetsConnect'




const SocialMedia = () => {
  return (
    <div
      id="socialMedia"
      className="flex flex-col items-center border-2 border-gray-700 p-10 sm:w-[70%] w-[95%] rounded-3xl m-auto"
    >
      <div className="flex flex-col items-center m-10 p-2 gap-10">
        <Card />
        <CardSlider />
        <div className="flex flex-row gap-5">
          <a href="https://github.com/sarveshbhoyar22 ">
            <FaGithub className="text-3xl" />
          </a>
          <a href="https://www.linkedin.com/in/sarvesh-bhoyar-711818239/">
            <FaLinkedin className="text-3xl" />
          </a>
          <a href="https://www.instagram.com/sarvesh_bhoyar_/profilecard/?igsh=MXExd3I1enNkcXloNQ==">
            <LuInstagram className="text-3xl" />
          </a>
        </div>
        <LetsConnect/>
      </div>
    </div>
  );
}

export default SocialMedia