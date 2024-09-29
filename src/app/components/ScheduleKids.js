import React from 'react';

const Schedule = () => {
  const hours = Array.from({ length: 9 }, (_, i) => 10 + i * 1); // Hours from 10 to 20
  const days = ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI','DIMANCHE'];

  const events = [
    { day: 'MARDI', startHour: 17, endHour: 18, time: '17:00-18:00', label: 'JUDO KIDS', color: 'bg-green-300' },
    { day: 'MERCREDI', startHour: 15, endHour: 16, time: '15:00-16:00', label: 'M.A MINI', color: 'bg-fuchsia-300' },
    { day: 'MERCREDI', startHour: 16, endHour: 17, time: '16:00-17:00', label: 'KARATE KIDS', color: 'bg-green-300' },
    { day: 'MERCREDI', startHour: 17, endHour: 18, time: '17:00-18:00', label: 'KARATE JUNIOR', color: 'bg-blue-300' },
    { day: 'JEUDI', startHour: 17, endHour: 18, time: '17:00-18:00', label: 'JUDO KIDS', color: 'bg-green-300' },   
    { day: 'SAMEDI', startHour: 10, endHour: 11, time: '10:00-11:00', label: 'M.A MINI', color: 'bg-fuchsia-300' },
    { day: 'SAMEDI', startHour: 11, endHour: 12, time: '11:00-12:00', label: 'KARATE KIDS', color: 'bg-green-300' },
    { day: 'SAMEDI', startHour: 12, endHour: 13, time: '12:00-13:00', label: 'KARATE JUNIOR', color: 'bg-blue-300' },
  ];

  const getEventStyle = (event, hour) => {
    const duration = (event.endHour - event.startHour) * 100; // Duration based on hours
    return {
      top: 0,
      height: `${duration}%`,
      width: '100%',
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100, // Ensure it appears above the slot borders
    };
  };

  return (
    <div className="grid grid-cols-8 gap-0 max-xs:py-5 py-10 ">
      {/* Header row with days */}
      <div className="col-span-1 max-xs:py-2 max-lg:py-3 max-xl:py-4 py-6"></div>
      {days.map((day) => (
        <div
          key={day}
          className="max-xs:text-[0.4rem] xs:text-[0.6rem] sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl font-mono flex justify-center items-center font-bold bg-gray-200 border border-gray-300 "
        >
          {day}
        </div>
      ))}

      {/* Time rows */}
      {hours.map((hour) => (
        <React.Fragment key={hour}>
          {/* Time label on the left side */}
          <div className="max-xs:text-[0.40rem] xs:text-[0.6rem] sm:text-[0.65rem] md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-mono italic flex items-center justify-center border border-gray-300 max-xs:py-[0.2rem] max-md:py-1 max-lg:py-[0.35rem] lg:py-2 xl:py-3 2xl:py-4 bg-gray-100">
            {`${hour}:00`}
          </div>
          {/* Time slots for each day */}
          {days.map((day) => (
            <div key={`${hour}-${day}`} className="relative border border-gray-300">
              {/* Display events */}
              {events
                .filter((event) => event.day === day && event.startHour === hour)
                .map((event, index) => (
                  <div
                    key={index}
                    className={`absolute ${event.color} opacity-70`}
                    style={getEventStyle(event)}
                  >
                    <div className="flex flex-col text-center">
                      <span className="text-black max-xxs:text-[0.20rem] max-xs:text-[0.25rem] xs:text-[0.4rem] sm:text-[0.5rem] md:text-[0.6rem] lg:text-xs xl:text-lg 2xl:text-xl font-mono">
                        {event.time}
                      </span>
                      <span className="text-black font-bold max-xxs:text-[0.25rem] max-xs:text-[0.30rem] xs:text-[0.4rem] sm:text-[0.5rem] md:text-[0.6rem] lg:text-xs xl:text-base 2xl:text-xl font-mono">
                        {event.label}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Schedule;
