import React from "react";
import Madeleine from "../assets/Madeleine.png";
import Poussin from "../assets/Le-poussin-tueur.png";
import LooseWaves from "../assets/LooseWaves.jpg";
import Dataviz from "../assets/Dataviz.png";
import Vatnsborg from "../assets/Vatnsborg.png"

const Projects = () => {
  const projects = [
    {
      img: Poussin,
      title: "Le Poussin Tueur",
      desc: " Un jeu réaliser sur la plateforme Pico8 en language LUA ",
      code: "https://github.com/FlorianLUSSON/pico8-le-poussin-tueur",
      live: "https://www.lexaloffle.com/bbs/?tid=51819",
    },
    {
      img: Madeleine,
      title: "Réseau Social Php",
      desc: "Site type réseau social réaliser en PHP avec MySQl",
      code: "https://github.com/FlorianLUSSON/reseau-social-php-teammadeleine",
    },
    {
      img: Dataviz,
      title: "Dataviz",
      desc: "Projet de visualisation de donnée récuperer a partir d'une API ( Réseau transport en commun de Nantes )",
      code: "https://github.com/FlorianLUSSON/dataviz-api-TAN",
    },
    {
      img: LooseWaves,
      title: "Projet Mobile Front",
      desc: "Création d'une interface utilisateur sur android avec Kotlin et Jetpack Compose",
      code: "https://github.com/adatechschool/LooseWaves",
    },
    {
      img: Vatnsborg,
      title: "Projet Perso Vatnsborg",
      desc: "Création d'un site internet Full Stack en React pour le Front et MangoDB et Express pour le Back",
      code: "https://github.com/FlorianLUSSON/Vatnsborg",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projets
          </h2>

          <p className="pb-5">
            Voici certains projets que j'ai pù réaliser au cours de la formation.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative " key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-2 text-center font-bold text-white">
                  {project.title}
                </p>
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  {project.live ? (
                    <a href={project.live}
                      target="_blank"
                      className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold mr-4">
                      Live
                    </a>
                  ) : null}

                  <a
                    href={project.code}
                    target="_blank"
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>


              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
