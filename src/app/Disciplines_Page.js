import React from 'react';
import './components/Class.css';
import images from "./images";
import Image from "next/image";


function Disciplines() {
  return (
    <div className="flex justify-center mt-10 flex-col" id="disciplines">
        <div className="bg-black w-full text-white flex items-center flex-col gap-4 max-md:py-6 py-10">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-mono text-black ">
            <span className="stroke-white stroke-2 text-stroke">DISCIPLINES</span>
            </div>
            <div className="max-lg:text-center xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl xs:text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-mono font-family: ui-monospace italic max-lg:px-4">
                    Everyone is welcome in our club, regardless of your level, physical condition, sex or age.
            </div>
        </div>
        <div className="grid grid-cols-2 max-xs:gap-5 gap-6 2xl:gap-8 xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-10 max-xs:flex max-xs:flex-col">
                 <Image src={images.KARATE} className="max-xs:px-14  object-contain w-full" alt="gallery_image"/>
                 <Image src={images.KID}  className="max-xs:px-14  object-contain w-full" alt="gallery_image"/>
                 <Image src={images.KICK}  className="max-xs:px-14  object-contain w-full" alt="gallery_image"/>
                 <Image src={images.MMA}  className="max-xs:px-14  object-contain w-full" alt="gallery_image"/>
                 <Image src={images.judo} className="max-xs:px-14  object-contain w-full" alt="gallery_image"/>
                 <Image src={images.judokids}  className="max-xs:px-14  object-contain w-full" alt="gallery_image"/>
                 <Image src={images.grappling}  className="max-xs:px-14  object-contain w-full" alt="gallery_image"/>
                 <Image src={images.yoga}  className="max-xs:px-14  object-contain w-full" alt="gallery_image"/>
        </div>
    </div>
  );
}

export default Disciplines;
