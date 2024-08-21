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
    <div className=" w-screen  " id="navbar ">
      

      <div className="justify-between lg:justify-center flex lg:grid grid-cols-12 xl:px-28  lg:p-10 px-6 py-2  w-full">

        <div className="navbar_left col-span-3 ">

          <Link href="/">
            <Image className=" justify-end items-end md:w-80  my-auto -mx-4 w-56"src={images.logo2} alt="ShidoStudio" />
            </Link>          
          </div>

        <div className="navbar_right justify-end items-end lg:col-span-9 xl-col  flex">

          <ul className="xl:text-xl navbar_links grid grid-cols-7 lg:gap-4 xl:gap-7 justify-end items-end my-auto">

            <li>
              <Link href="/" className="links">
                ACCEUIL
              </Link>
            </li>
            <li>
              <Link href="/restaurant_page" className="links">
                BLOG
              </Link>
            </li>
            <li>
              <Link href="/restaurant_page" className="links">
                DISCIPLINES
              </Link>
            </li>
            <li>
              <Link href="/restaurant_page" className="links">
                HORAIRES
              </Link>
            </li>
            <li>
              <Link href="/restaurant_page" className="links">
                COTISATION
              </Link>
            </li>
            <li>
              <Link href="/restaurant_page" className="links">
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
            className="ham"
            color="black"
            fontSize={36}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay">
              <IoMdClose 
                fontSize={38}
                className="fixed right-6 top-2 my-auto flex"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen_links">
                <li>
                  <Link
                    href="/"
                    className="links"
                    onClick={() => setToggleMenu(false)}
                  >
                  ACCEUIL
                </Link>
                </li>
                
                <li>

                  <Link href="/services/art" 
                  className="links">
                BLOG
                </Link>

                </li>

                <li>
                  <Link
                    href="/restaurant_page"
                    className="links"
                    onClick={() => setToggleMenu(false)}
                  >
                DISCIPLINES
                </Link>

                </li>
                <li>
                  <Link
                    href="/restaurant_page"
                    className="links"
                    onClick={() => setToggleMenu(false)}
                  >
                HORAIRES
                </Link>

                </li>
                <li>
                  <Link
                    href="/restaurant_page"
                    className="links"
                    onClick={() => setToggleMenu(false)}
                  >
                COTISATION
                </Link>

                </li>
                <li>
                  <Link
                    href="/restaurant_page"
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
                    {" "}
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
