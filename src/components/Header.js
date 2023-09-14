import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/Logo-F-site.png"

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
      <a href="/" className="logo">
        <img src={logo} alt="Florian" className="logo-image w-10" />
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#about">A Propos</a>
          </li>
          <li>
            <a href="/#projects">Projets</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a
              href="CV F.LUSSON.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Mon CV
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
          <li>
            <a href="/#about">A Propos</a>
          </li>
          <li>
            <a href="/#projects">Projets</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
          <a
              href="CV Florian LUSSON.pdf"
              target="_blank"
              without
              rel="noreferrer"
            >
              Mon CV
            </a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
