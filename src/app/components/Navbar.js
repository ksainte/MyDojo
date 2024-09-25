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
    <div className=" w-screen" id="navbar ">
      

      <div className="justify-between flex lg:grid grid-cols-12 xl:px-28 lg:p-10 px-6 py-2 fixed top-0 w-screen bg-white z-40">

        <div className="col-span-3 max-xxs:hidden">

          <Link href="/">
            <Image className="max-xs:w-52 xs:w-56 sm:w-64 md:w-72 lg:w-80  my-auto -mx-4 w-60"src={images.logo4} alt="ShidoStudio" />
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
