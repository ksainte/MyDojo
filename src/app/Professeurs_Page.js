import React from 'react';
import Schedule from './components/Schedule';
import images from "./images";
import Image from "next/image";

const DisciplineStyle = {
    objectFit: 'cover',
    width: '100%',  // Equivalent to `w-full`
//   height: '35rem', // Equivalent to `h-60` (Tailwind's `h-60` is typically `15rem`)
  };

  //Shidostudio's professors.
  //PROFESSEURS
const ProfesseursPage = () => {
    return (
        <div className="flex-col pb-10" id="profs">
            <div className="bg-black w-full text-white flex items-center flex-col py-10 gap-4 max-md:py-6">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-mono text-black ">
                <span className="stroke-white stroke-2 text-stroke">PROFESSEURS</span>
                </div>
                <div className="max-lg:text-center xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl xs:text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-mono font-family: ui-monospace italic max-lg:px-4">
                Our professors.
                </div>
            </div>
    
            <div className="flex justify-center w-full mt-10 px-2">
                <div className="flex max-md:flex-col justify-evenly items-center w-full xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl gap-4 xl:gap-10 ">
                    <div className="flex flex-col max-md:w-3/4 w-1/3 xs:h-[50rem]  2xl:h-[55rem]">
                        <Image src={images.Yuli3}  className="max-xs:h-[25rem] h-full" style={DisciplineStyle} alt="gallery_image"/>
                        <div className=" bg-purple-700 flex flex-col gap-2 p-8 max-md:p-8 text-white items-center">
                            <div className="xxxs:text-xl xxs:text-2xl xl:text-2xl 2xl:text-3xl font-bold font-mono	font-family: ui-monospace text-center">YULI NAGATA</div>
                            <div className="xxxs:text-lg xxs:text-lg xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">professeur karate, K1, MMA</div>
                            <div className="xxxs:text-sm xxs:text-base xs:text-base sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-mono	font-family: ui-monospace">
                            3rd Dan Shidokan Karate, 2019 World Champion, fights in Karate-K1-MMA, passionate by Martial Arts, he teaches for 8 years and now struggles with learning Jiu-Jitsu.
                            </div>
                            <div className="w-full h-px bg-white mt-3"></div> 
                        </div>
                    </div>
                    <div className="flex flex-col max-md:w-3/4 w-1/3 xs:h-[50rem] 2xl:h-[55rem]">
                        <Image src={images.Arthur} className="max-xs:h-[25rem] h-full " style={DisciplineStyle} alt="gallery_image"/>
                        <div className="bg-purple-700 flex flex-col gap-2 p-8 max-lg:p-8 text-white items-center">
                            <div className="xxxs:text-xl xxs:text-2xl xl:text-2xl 2xl:text-3xl font-bold font-mono	font-family: ui-monospace text-center">ARTHUR BUYSSENS</div>
                            <div className="xxxs:text-lg xxs:text-lg xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">professeur karate, K1, MMA </div>
                            <div className="xxxs:text-sm xxs:text-base xs:text-base sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-mono	font-family: ui-monospace">
                            2nd Dan Shidokan Karate, competes in multiple tournaments all over the world, he now brings his expertise in diverse classes at Shidostudio.
                            </div>
                            <div className="w-full h-px bg-white mt-3"></div> 
                        </div>
                    </div>
                    <div className="flex flex-col max-md:w-3/4 w-1/3  xs:h-[50rem] 2xl:h-[55rem]">
                        <Image src={images.Tiago}  className="max-xs:h-[25rem] h-full" style={DisciplineStyle} alt="gallery_image"/>   
                        <div className="bg-purple-700 flex flex-col gap-2 p-8 max-lg:p-8 text-white items-center">
                            <div className="xxxs:text-xl xxs:text-2xl xl:text-2xl 2xl:text-3xl font-bold font-mono	font-family: ui-monospace text-center">TIAGO OLIVEIRA</div>
                            <div className="xxxs:text-lg xxs:text-lg xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">professeur karate, K1, MMA</div>
                            <div className="xxxs:text-sm xxs:text-base xs:text-base sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-mono	font-family: ui-monospace">
                            2nd Dan Shidokan Karate, started young with Kung-Fu and masters now different disciplines, still competing, though he's heavyweight, he shows patience with beginners.
                            </div>
                            <div className="w-full h-px bg-white mt-3"></div> 
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center w-full mt-10 px-2">
                <div className="flex max-md:flex-col justify-evenly items-center w-full xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl gap-4 xl:gap-10">
                    <div className="flex flex-col max-md:w-3/4 w-1/3   xs:h-[50rem] 2xl:h-[55rem]">
                        <Image src={images.Said}  className="max-xs:h-[25rem] h-full" style={DisciplineStyle} alt="gallery_image"/>
                        <div className=" bg-purple-700 flex flex-col gap-2 p-8 max-lg:p-8 text-white items-center">
                            <div className="xxxs:text-xl xxs:text-2xl xl:text-2xl 2xl:text-3xl font-bold font-mono	font-family: ui-monospace text-center">SAID CHAABI</div>
                            <div className="xxxs:text-lg xxs:text-lg xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">professeur grappling</div>
                            <div className="xxxs:text-sm xxs:text-base xs:text-base sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-mono	font-family: ui-monospace ">
                            He learned Jiu-Jitsu in Brazil as there were no classes in Belgium yet at the time. He is a Black belt as long as we can remember.
                            </div>
                            <div className="w-full h-px bg-white mt-3"></div> 
                        </div>
                    </div>
                    <div className="flex flex-col max-md:w-3/4 w-1/3   xs:h-[50rem] 2xl:h-[55rem]">
                        <Image src={images.Mubarak} className="max-xs:h-[25rem] h-full" style={DisciplineStyle} alt="gallery_image"/>
                        <div className="bg-purple-700 flex flex-col gap-2 p-8 max-lg:p-8 text-white items-center">
                            <div className="xxxs:text-xl xxs:text-2xl xl:text-2xl 2xl:text-3xl font-bold font-mono	font-family: ui-monospace text-center">MOUBARAK BOULAICH</div>
                            <div className="xxxs:text-lg xxs:text-lg xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">professeur judo </div>
                            <div className="xxxs:text-sm xxs:text-base xs:text-base sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-mono	font-family: ui-monospace">
                            Long time teacher, he now represents Marocco at the international stage. Don't try to catch him he is too agile.
                            </div>
                            <div className="w-full h-px bg-white mt-3"></div> 
                        </div>
                    </div>
                    <div className="flex flex-col max-md:w-3/4 w-1/3   xs:h-[50rem] 2xl:h-[55rem]">
                        <Image src={images.Saber}  className="max-xs:h-[25rem] h-full" style={DisciplineStyle} alt="gallery_image"/>   
                        <div className="bg-purple-700 flex flex-col gap-2 p-8 max-lg:p-8 text-white items-center">
                            <div className="xxxs:text-xl xxs:text-2xl xl:text-2xl 2xl:text-3xl font-bold font-mono	font-family: ui-monospace text-center">SABER EL MOUDNI</div>
                            <div className="xxxs:text-lg xxs:text-lg xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-mono	font-family: ui-monospace">professeur judo</div>
                            <div className="xxxs:text-sm xxs:text-base xs:text-base sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-mono	font-family: ui-monospace">
                            Competitor, teacher, referee, he is so involved that he even works at the Judo Federation. 
                            </div>
                            <div className="w-full h-px bg-white mt-3"></div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfesseursPage;
