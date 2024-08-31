import React from 'react';
import Schedule from './components/Schedule';

const SchedulePage = () => {
    return (
        <div className="flex-col">
            <div className="bg-black w-full text-white flex items-center flex-col py-10 gap-4 max-md:py-6">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-mono text-black ">
                <span className="stroke-white stroke-2 text-stroke">HORAIRE</span>
                </div>
                <div className="xs:text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-mono font-family: ui-monospace italic max-lg:px-4">
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
                        <div className="flex flex-col ">
                            <div className="bg-red-400 p-3">
                                <div className="border border-black flex flex-col gap-2 p-8 bg-white items-center">
                                    <div className="flex flex-col gap-2 items-center font-mono">
                                        <div className="underline font-bold xxxs:text-xl xxs:text-2xl xs:text-3xl">KARATE SHIDOKAN</div>
                                        <div className="xxxs:text-lg xxs:text-xl xs:text-2xl">MARDI 18:00-19:30</div>
                                        <div className="xxxs:text-lg xxs:text-xl xs:text-2xl">JEUDI 18:00-19:30</div>
                                        <div className="xxxs:text-lg xxs:text-xl xs:text-2xl">SAMEDI 18:00-19:30</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="bg-yellow-500 p-3">
                                <div className="border border-black flex flex-col gap-2 p-8 bg-white items-center">
                                    <div className="flex flex-col gap-2 items-center font-mono">
                                            <div className="underline font-bold xxxs:text-xl xxs:text-2xl xs:text-3xl">KARATE SHIDOKAN</div>
                                            <div className="xxxs:text-lg xxs:text-xl xs:text-2xl">MARDI 18:00-19:30</div>
                                            <div className="xxxs:text-lg xxs:text-xl xs:text-2xl">JEUDI 18:00-19:30</div>
                                            <div className="xxxs:text-lg xxs:text-xl xs:text-2xl">SAMEDI 18:00-19:30</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="bg-white p-3">
                                <div className="border border-black flex flex-col gap-2 p-8 bg-white items-center">
                                        <div className="flex flex-col gap-2 items-center font-mono">
                                                <div className="underline font-bold xxxs:text-xl xxs:text-2xl xs:text-3xl">KARATE SHIDOKAN</div>
                                                <div className="xxxs:text-lg xxs:text-xl xs:text-2xl">MARDI 18:00-19:30</div>
                                                <div className="xxxs:text-lg xxs:text-xl xs:text-2xl">JEUDI 18:00-19:30</div>
                                                <div className="xxxs:text-lg xxs:text-xl xs:text-2xl">SAMEDI 18:00-19:30</div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="bg-white p-3">
                                <div className="border border-black flex flex-col gap-2 p-8 bg-white items-center">
                                        <div className="flex flex-col gap-2 items-center font-mono">
                                                <div className="underline font-bold xxxs:text-xl xxs:text-2xl xs:text-3xl">KARATE SHIDOKAN</div>
                                                <div className="xxxs:text-lg xxs:text-xl xs:text-2xl">MARDI 18:00-19:30</div>
                                                <div className="xxxs:text-lg xxs:text-xl xs:text-2xl">JEUDI 18:00-19:30</div>
                                                <div className="xxxs:text-lg xxs:text-xl xs:text-2xl">SAMEDI 18:00-19:30</div>
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