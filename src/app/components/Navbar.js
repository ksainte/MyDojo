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
      

      <div className="justify-between flex lg:grid grid-cols-12 xl:px-24 lg:px-16 lg:p-8 fixed top-0 w-screen bg-white z-40">

        <div className="col-span-3 max-xxs:hidden">

          <Link href="/" className="flex gap-2">
            <Image className="max-lg:hidden lg:w-20 xl:w-20 my-auto  "src={images.logo_off} alt="ShidoStudio" />
            <Image className="max-xs:w-52 xs:w-56 sm:w-64 md:w-72 lg:w-48  my-auto  xl:w-52 max-lg:p-4"src={images.logo4} alt="ShidoStudio" />
            </Link>          
        </div>

        <div className="justify-end lg:col-span-9 flex">

          <ul className=" lg:text-base xl:text-base 2xl:text-2xl flex lg:gap-4 xl:gap-10 my-auto max-lg:hidden  ">

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


        <div className="lg:hidden my-auto p-4">
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
