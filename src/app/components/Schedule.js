import React from 'react';

const Schedule = () => {
  const hours = Array.from({ length: 13 }, (_, i) => 10 + i * 1); // Hours from 10 to 20
  const days = ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI','DIMANCHE'];

  const events = [
    { day: 'LUNDI', startHour: 19, endHour: 20, time: '16:30-17:30', label: 'KARATE 2', color: 'bg-yellow-500' },
    { day: 'LUNDI', startHour: 20, endHour: 21, time: '16:30-17:30', label: 'KARATE 3', color: 'bg-yellow-500' },
    { day: 'LUNDI', startHour: 18, endHour: 19, time: '18:00-19:30', label: 'KARATE 1', color: 'bg-blue-400' },
    { day: 'MARDI', startHour: 17, endHour: 18, time: '18:00-19:30', label: 'JUDO KIDS', color: 'bg-purple-400' },
    { day: 'MARDI', startHour: 18, endHour: 19, time: '18:00-19:30', label: 'K1-1', color: 'bg-purple-400' },
    { day: 'MARDI', startHour: 19, endHour: 20, time: '18:00-19:30', label: 'JUDO 1', color: 'bg-purple-400' },
    { day: 'MARDI', startHour: 20, endHour: 21.5, time: '18:00-19:30', label: 'JUDO 2', color: 'bg-purple-400' },
    { day: 'MERCREDI', startHour: 15, endHour: 16, time: '18:00-19:30', label: 'M.A MINI', color: 'bg-blue-400' },
    { day: 'MERCREDI', startHour: 16, endHour: 17, time: '18:00-19:30', label: 'KARATE KIDS', color: 'bg-blue-400' },
    { day: 'MERCREDI', startHour: 17, endHour: 18, time: '18:00-19:30', label: 'KARATE JUNIOR', color: 'bg-blue-400' },
    { day: 'MERCREDI', startHour: 18, endHour: 19, time: '18:00-19:30', label: 'K1-1', color: 'bg-blue-400' },
    { day: 'MERCREDI', startHour: 19, endHour: 20, time: '18:00-19:30', label: 'KARATE', color: 'bg-blue-400' },
    { day: 'MERCREDI', startHour: 20, endHour: 21.5, time: '18:00-19:30', label: 'GRAPPLING', color: 'bg-blue-400' },
    { day: 'JEUDI', startHour: 17, endHour: 18, time: '18:00-19:30', label: 'JUDO KIDS', color: 'bg-purple-400' },
    { day: 'JEUDI', startHour: 18, endHour: 19, time: '18:00-19:30', label: 'K1-1', color: 'bg-purple-400' },
    { day: 'JEUDI', startHour: 19, endHour: 20, time: '18:00-19:30', label: 'K1-2', color: 'bg-purple-400' },
    { day: 'JEUDI', startHour: 20, endHour: 21.5, time: '18:00-19:30', label: 'JUDO', color: 'bg-purple-400' },
    { day: 'VENDREDI', startHour: 18, endHour: 19, time: '18:00-19:30', label: 'MIXED MARTIAL ARTS', color: 'bg-red-400' },    
    { day: 'VENDREDI', startHour: 19, endHour: 20, time: '18:00-19:30', label: 'GRAPPLING', color: 'bg-red-400' },    
    { day: 'SAMEDI', startHour: 10, endHour: 11, time: '18:00-19:30', label: 'M.A MINI', color: 'bg-purple-400' },
    { day: 'SAMEDI', startHour: 11, endHour: 12, time: '18:00-19:30', label: 'KARATE KIDS', color: 'bg-purple-400' },
    { day: 'SAMEDI', startHour: 12, endHour: 13, time: '18:00-19:30', label: 'KARATE JUNIOR', color: 'bg-purple-400' },
    { day: 'SAMEDI', startHour: 13, endHour: 15.5, time: '18:00-19:30', label: 'JUDO COMPETITOR', color: 'bg-purple-400' },
    { day: 'SAMEDI', startHour: 17, endHour: 18, time: '18:00-19:30', label: 'K1', color: 'bg-purple-400' },
    { day: 'SAMEDI', startHour: 18, endHour: 19, time: '18:00-19:30', label: 'KARATE', color: 'bg-purple-400' },
    { day: 'DIMANCHE', startHour: 14, endHour: 16, time: '18:00-19:30', label: 'KARATE-K1-COMPETITOR', color: 'bg-purple-400' },

  ];

  const getEventStyle = (event, hour) => {
    const startOffset = (event.startHour - hour) * 50; // Each hour is 50% of the grid row
    const duration = (event.endHour - event.startHour) * 50; // Duration based on hours

    return {
      top: `${startOffset}%`,
      height: `${duration}%`,
      width: '100%',
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
  };

  return (
    <div className="grid grid-cols-8 gap-0 py-10">
      {/* Header row with days */}
      <div className="col-span-1 py-6"></div>
      {days.map((day) => (
        <div
          key={day}
          className="lg:text-lg xl:text-xl 2xl:text-2xl font-mono flex justify-center items-center font-bold bg-gray-200 border border-gray-300"
        >
          {day}
        </div>
      ))}

      {/* Time rows */}
      {hours.map((hour) => (
        <React.Fragment key={hour}>
          {/* Time label on the left side */}
          <div className="lg:text-base xl:text-lg 2xl:text-xl font-mono italic flex items-center justify-center border border-gray-300 p-10 bg-gray-100">
            {`${hour}:00`}
          </div>
          {/* Time slots for each day */}
          {days.map((day) => (
            <div key={`${hour}-${day}`} className="relative border border-gray-300 h-32">
              {/* Display events */}
              {events
                .filter((event) => event.day === day && event.startHour < hour + 2 && event.endHour > hour)
                .map((event, index) => (
                  <div
                    key={index}
                    className={`absolute ${event.color} opacity-70`}
                    style={getEventStyle(event, hour)}
                  >
                    <div className="flex flex-col text-center">
                      <span className="text-black xs:text-xs sm:text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-mono">{event.time}</span>
                      <span className="text-black font-bold xs:text-xs sm:text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-mono">{event.label}</span>
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
