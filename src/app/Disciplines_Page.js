import React from 'react';
import './components/Class.css';
import images from "./images";
import Image from "next/image";


function Disciplines() {
  return (
    <div className="flex justify-center mt-10 flex-col" id="disciplines">
        <div className="bg-black w-full text-white flex items-center flex-col py-10 gap-4 max-md:py-6">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-mono text-black ">
            <span className="stroke-white stroke-2 text-stroke">DISCIPLINES</span>
            </div>
            <div className="max-lg:text-center xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl xs:text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-mono font-family: ui-monospace italic max-lg:px-4">
                    Everyone is welcome in our club, regardless of your level, physical condition, sex or age.
            </div>
        </div>
        <div className="grid grid-cols-2 max-xs:gap-5 max-lg:gap-8 gap-12 xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-10 max-xs:flex max-xs:flex-col">
 
                 <Image src={images.d1} className="max-xs:px-14 max-xs:object-contain xs:h-[23rem] sm:h-[26rem] md:h-[29rem] lg:h-[32rem] xl:h-[35rem] object-cover w-full" alt="gallery_image"/>
                 <Image src={images.d2}  className="max-xs:px-14 max-xs:object-contain xs:h-[23rem] sm:h-[26rem] md:h-[29rem] lg:h-[32rem] xl:h-[35rem] object-cover w-full" alt="gallery_image"/>
                 <Image src={images.d3}  className="max-xs:px-14 max-xs:object-contain xs:h-[23rem] sm:h-[26rem] md:h-[29rem] lg:h-[32rem] xl:h-[35rem] object-cover w-full" alt="gallery_image"/>
                 <Image src={images.d4}  className="max-xs:px-14 max-xs:object-contain xs:h-[23rem] sm:h-[26rem] md:h-[29rem] lg:h-[32rem] xl:h-[35rem] object-cover w-full" alt="gallery_image"/>

        </div>
    </div>
  );
}

export default Disciplines;
