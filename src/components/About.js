import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            A Propos
          </h2>

          <p className="pb-5">
            Je m'appelle Florian LUSSON.<br />
            Je suis un développeur junior Full-Stack en formation à la recherche d'une alternance.
          </p>

          <p className="pb-5">
            Actuellement à Ada Tech School pour préparer le titre RNCP de concepteur développeur d'application de niveau 6. Je sors d'un BTS en électronique et communication où j'ai pu créer une carte électronique avant de me mettre à coder dessus en C.
          </p>

          <p className="pb-5">
            Dans ma formation, j'ai pu aborder plusieurs langages et frameworks tels que :<br />
            HTML, CSS, JavaScript, C, React, Python, Kotlin, PHP, Tailwind...
          </p>

          <p className="pb-5">En termes de backend, je connais Node.js, Express.js, MongoDB et Mongoose.</p>

          <p>
            Dans mon temps libre, j'ai créé un site web en rapport avec ma passion pour l'univers Pokémon.
            Ce site sert à présenter une guilde sur un serveur Pixelmon 
            et introduit un système pour que les joueurs puissent passer des commandes. 
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto mr-[15%]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
