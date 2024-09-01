import React from 'react';
import Schedule from './components/Schedule';

const SchedulePage = () => {
    return (
        <div className="flex-col" id="horaires">
            <div className="bg-black w-full text-white flex items-center flex-col py-10 gap-4 max-md:py-6">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-mono text-black ">
                <span className="stroke-white stroke-2 text-stroke">HORAIRE</span>
                </div>
                <div className="max-lg:text-center xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl xs:text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-mono font-family: ui-monospace italic max-lg:px-4">
                Schedule for each respective discipline.
                </div>
            </div>
            <div className="max-sm:hidden mx-auto max-md:px-5 xs:max-w-screen-md sm:max-w-screen-md md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
            <Schedule/>
            </div>
            {/* Welcome Section for Mobile */}
            <div className="sm:hidden flex flex-col items-center border border-green-500">
                <div className="mt-10 mb-10 xxxs:max-w-screen-xxxs xxs:max-w-screen-xxs xs:max-w-screen-xs">
                    <div className="border background p-3 flex flex-col gap-4">
                        <div className="flex flex-col text-center">
                            <div className="bg-purple-500 p-3">
                                <div className="border border-black flex flex-col gap-2 p-8 bg-white items-center">
                                    <div className="flex flex-col gap-2 items-center font-mono">
                                        <div className="underline font-bold xxxs:text-xl xxs:text-xl xs:text-2xl">KARATE SHIDOKAN</div>
                                        <div className="xxxs:text-md xxs:text-lg xs:text-xl">MARDI:</div>
                                        <div className="xxxs:text-md xxs:text-lg xs:text-xl">18:00-19:30</div>
                                        <div className="xxxs:text-md xxs:text-lg xs:text-xl">JEUDI:</div>
                                        <div className="xxxs:text-md xxs:text-lg xs:text-xl">18:00-19:30</div>
                                        <div className="xxxs:text-md xxs:text-lg xs:text-xl">SAMEDI:</div>
                                        <div className="xxxs:text-md xxs:text-lg xs:text-xl">18:00-19:30</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col text-center">
                            <div className="bg-green-400 p-3">
                                <div className="border border-black flex flex-col gap-2 p-8 bg-white items-center">
                                    <div className="flex flex-col gap-2 items-center font-mono">
                                            <div className="underline font-bold xxxs:text-xl xxs:text-xl xs:text-2xl">SHIDOKAN KIDS</div>
                                            <div className="xxxs:text-md xxs:text-lg xs:text-xl">MERCREDI:</div>
                                            <div className="xxxs:text-md xxs:text-lg xs:text-xl">14:00-15:00</div>
                                            <div className="xxxs:text-md xxs:text-lg xs:text-xl">SAMEDI:</div>
                                            <div className="xxxs:text-md xxs:text-lg xs:text-xl">17:00-18:00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col text-center">
                            <div className="bg-yellow-500 p-3">
                                <div className="border border-black flex flex-col gap-2 p-8 bg-white items-center">
                                        <div className="flex flex-col gap-2 items-center font-mono">
                                                <div className="underline font-bold xxxs:text-xl xxs:text-xl xs:text-2xl">JUDO</div>
                                                <div className="xxxs:text-md xxs:text-lg xs:text-xl">LUNDI:</div>
                                                <div className="xxxs:text-md xxs:text-lg xs:text-xl">16:30-17:30</div>
                                                <div className="xxxs:text-md xxs:text-lg xs:text-xl">MERCREDI:</div>
                                                <div className="xxxs:text-md xxs:text-lg xs:text-xl">16:30-17:30</div>
                                                <div className="xxxs:text-md xxs:text-lg xs:text-xl">VENDREDI:</div>
                                                <div className="xxxs:text-md xxs:text-lg xs:text-xl">16:30-17:30</div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col text-center">
                            <div className="bg-blue-500 p-3">
                                <div className="border border-black flex flex-col gap-2 p-8 bg-white items-center">
                                        <div className="flex flex-col gap-2 items-center font-mono">
                                                <div className="underline font-bold xxxs:text-xl xxs:text-xl xs:text-2xl">K1 KICKBOXING</div>
                                                <div className="xxxs:text-md xxs:text-lg xs:text-xl">LUNDI:</div>
                                                <div className="xxxs:text-md xxs:text-lg xs:text-xl">18:00-19:30</div>
                                                <div className="xxxs:text-md xxs:text-lg xs:text-xl">MERCREDI:</div>
                                                <div className="xxxs:text-md xxs:text-lg xs:text-xl">18:00-19:30</div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col text-center">
                            <div className="bg-red-400 p-3">
                                <div className="border border-black flex flex-col gap-2 p-8 bg-white items-center">
                                        <div className="flex flex-col gap-2 items-center font-mono">
                                                <div className="underline font-bold xxxs:text-xl xxs:text-xl xs:text-2xl">MIXED MARTIAL ARTS</div>
                                                <div className="xxxs:text-md xxs:text-lg xs:text-xl">VENDREDI:</div>
                                                <div className="xxxs:text-md xxs:text-lg xs:text-xl">18:00-19:30</div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SchedulePage;