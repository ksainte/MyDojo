"use client";

import React from "react";
import "./Class.css";
import Image from "next/image";
import Link from "next/link";
// import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
// import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useState } from "react";
import images from "../images";


export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className=" w-screen z-1000" id="navbar ">
      

      <div className="justify-between flex lg:grid grid-cols-12 xl:px-28 lg:p-10 px-6 py-2">

        <div className="col-span-3 max-xs:hidden">

          <Link href="/">
            <Image className=" md:w-80  my-auto -mx-4 w-56"src={images.logo2} alt="ShidoStudio" />
            </Link>          
        </div>

        <div className="justify-end lg:col-span-9 flex">

          <ul className=" lg:text-lg xl:text:xl 2xl:text-2xl flex lg:gap-3 xl:gap-7 my-auto max-lg:hidden space-x-3.5">

            <li>
              <Link href="/" className="links">
                ACCUEIL
              </Link>
            </li>
            <li>
              <Link href="/#blog" className="links">
                BLOG
              </Link>
            </li>
            <li>
              <Link href="/#disciplines" className="links">
                DISCIPLINES
              </Link>
            </li>
            <li>
              <Link href="/#horaires" className="links">
                HORAIRES
              </Link>
            </li>
            <li>
              <Link href="/#cotisations" className="links">
                COTISATIONS
              </Link>
            </li>
            <li>
              <Link href="/#profs" className="links">
                PROFESSEURS
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="links">
                {" "}
                CONTACT
              </Link>
            </li>

          </ul>
        </div>


        <div className="lg:hidden my-auto ">
          <GiHamburgerMenu
            className=""
            color="black"
            fontSize={36}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex flex-col">
              <div className="flex justify-end p-4">
                <IoMdClose 
                  fontSize={38}
                  className=""
                  onClick={() => setToggleMenu(false)}
                />
              </div>
              <ul className="app__navbar-smallscreen_links flex-grow max-lg:text-lg">
                <li>
                  <Link
                    href="/"
                    className="links"
                    onClick={() => setToggleMenu(false)}
                  >
                    ACCUEIL
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#blog"
                    className="links"
                    onClick={() => setToggleMenu(false)}
                  >
                    BLOG
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#disciplines"
                    className="links"
                    onClick={() => setToggleMenu(false)}
                  >
                    DISCIPLINES
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#horaires"
                    className="links"
                    onClick={() => setToggleMenu(false)}
                  >
                    HORAIRES
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#cotisations"
                    className="links"
                    onClick={() => setToggleMenu(false)}
                  >
                    COTISATIONS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#profs"
                    className="links"
                    onClick={() => setToggleMenu(false)}
                  >
                    PROFESSEURS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="links"
                    onClick={() => setToggleMenu(false)}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          )}

        </div>
      </div>


    </div>

    
  );
}
