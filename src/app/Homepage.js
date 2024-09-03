import React from 'react';
import './components/Class.css';
import images from "./images";
import Gallery from "./Gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";


import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faEtsy
} from "@fortawesome/free-brands-svg-icons";

function Homepage() {
  return (
    <div className=" background grid grid-cols-12">

      <div className="max-lg:hidden max-2xl:col-span-1 col-span-3 flex flex-col items-center justify-center">
        <div className="xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
          F<br />O<br />L<br />L<br />O<br />W<br /><br />U<br />S <br /><br />O<br />N
        </div>
        <div className="list-none mt-4">
          <li>
            <FontAwesomeIcon icon={faYoutube} className="w-8 h-8 " />
            <a href="https://www.facebook.com/"></a>
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} className="w-8 h-8 mt-2" />
            <a href="https://www.instagram.com/"></a>
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} className="w-8 h-8 mt-2" />
            <a href="https://www.etsy.com/"></a>
          </li>
        </div>

      </div>
      <div className="max-lg:hidden col-span-9 max-2xl:col-span-11 ">
        <Gallery 
          images={[images.homepage2, images.homepage1, images.homepage3]} 
          heightClass="xs:h-[21rem] sm:h-[24rem] md:h-[28rem] lg:h-[34rem] xl:h-[38rem] 2xl:h-[42rem]" 
          minWidthClass="xs:min-w-[26rem] sm:min-w-[34rem] md:min-w-[42rem] lg:min-w-[49rem] xl:min-w-[57rem] 2xl:min-w-[65rem]"
          display="none"
          marginTop="2rem"
          marginLeft="2rem"
          marginRight="0rem"


        />
      </div>

{/* Welcome Section for Mobile */}
      <div className="lg:hidden">
        <div className="flex items-center relative min-h-screen w-screen">
          <div className="background-layer"></div>
          <div className="flex flex-col  items-center justify-evenly h-screen text-center relative  p-1">
          <Image className="max-w-[90%] xs:max-w-[70%]" src={images.logo} alt="ShidoStudio" />
          <div className="text-black text-2xl xs:text-3xl  font-bold font-mono">
            A MARTIAL ARTS AND FIGHTING SPORTS CLUB
            </div>
          </div>
        </div>
      </div>


      <div className=" bg-black col-span-12 flex flex-col items-center gap-4  text-white font-mono py-10 max-sm:py-6">
          <div className="flex max-lg:hidden max-sm:flex-col items-center">
              <div className="font-bold xxxs:text-lg xxs:text-lg xs:text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mr-5">
              SHIDOSTUDIO
              </div>
              <div className="xxxs:text-md xxs:text-lg xs:text-xl sm:text-md md:text-lg  lg:text-xl xl:text-2xl 2xl:text-3xl italic">
                  A MARTIAL ARTS AND FIGHTING SPORTS CLUB
              </div>
            </div>
            <div className="flex max-sm:flex-col items-center">
              <div className=" font-bold xxxs:text-lg xxs:text-lg xs:text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mr-5">
              WE PRACTICE
              </div>
              <div className="xxxs:text-md xxs:text-lg xs:text-xl sm:text-md md:text-lg  lg:text-xl xl:text-2xl 2xl:text-3xl italic">
              STRIKING WRESTLING GRAPLING
              </div>
            </div>
            <div className="flex max-sm:flex-col items-center">
              <div className="font-bold xxxs:text-lg xxs:text-lg xs:text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mr-5">
              ALL LEVELS
              </div>
              <div className="xxxs:text-md xxs:text-lg xs:text-xl sm:text-md md:text-lg  lg:text-xl xl:text-2xl 2xl:text-3xl italic">
                  FOR ADULTS AND FOR KIDS
              </div>
            </div>
      </div>
    </div>
  );
}

export default Homepage;
