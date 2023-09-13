import React from "react";
import HeroImg from "../assets/hero-img.png";

import {
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hey, <br />Je suis <span className="text-accent">F</span>lorian <br />
            Full-Stack Developer
          </h1>

          <p className="py-5">
            Je suis à la recherche d'une alternance d'une durée d'1 an à partir d'octobre.
          </p>

          <div className="flex py-5 ">
            <a
              href="https://www.linkedin.com/in/florianlusson/" target="_blank" rel="noreferrer"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
            
            <a
              href="https://github.com/FlorianLUSSON" target="_blank" rel="noreferrer"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto mr-[15%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
