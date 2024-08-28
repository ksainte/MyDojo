import React from 'react';

const Schedule = () => {
  const hours = Array.from({ length: 6 }, (_, i) => 10 + i * 2); // Hours from 10 to 20
  const days = ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI', 'DIMANCHE'];

  const events = [
    { day: 'LUNDI', startHour: 16, endHour: 17.5, time: '16:30-17:30', label: 'JUDO', color: 'bg-yellow-500' },
    { day: 'MERCREDI', startHour: 16, endHour: 17.5, time: '16:30-17:30', label: 'JUDO', color: 'bg-yellow-500' },
    { day: 'VENDREDI', startHour: 16, endHour: 17.5, time: '16:30-17:30', label: 'JUDO', color: 'bg-yellow-500' },
    { day: 'LUNDI', startHour: 18, endHour: 19.5, time: '18:00-19:30', label: 'K1 KICKBOXING', color: 'bg-blue-400' },
    { day: 'MERCREDI', startHour: 18, endHour: 19.5, time: '18:00-19:30', label: 'K1 KICKBOXING', color: 'bg-blue-400' },
    { day: 'MARDI', startHour: 18, endHour: 19.5, time: '18:00-19:30', label: 'KARATE SHIDOKAN', color: 'bg-red-500' },
    { day: 'JEUDI', startHour: 18, endHour: 19.5, time: '18:00-19:30', label: 'KARATE SHIDOKAN', color: 'bg-red-500' },
    { day: 'SAMEDI', startHour: 18, endHour: 19.5, time: '18:00-19:30', label: 'KARATE SHIDOKAN', color: 'bg-red-500' },
    { day: 'MERCREDI', startHour: 14, endHour: 15, time: '14:00-15:00', label: 'SHIDOKAN KIDS', color: 'bg-green-400' },
    { day: 'SAMEDI', startHour: 17, endHour: 18, time: '17:00-18:00', label: 'SHIDOKAN KIDS', color: 'bg-green-400' },
    { day: 'VENDREDI', startHour: 18, endHour: 19.5, time: '18-19:30', label: 'MIXED MARTIAL ARTS', color: 'bg-orange-300' },


    // Add more events here
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
      <div className="col-span-1 py-6"></div> {/* Empty cell for alignment */}
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
                      <span className="text-black lg:text-base xl:text-lg 2xl:text-xl font-mono">{event.time}</span>
                      <span className="text-black font-bold lg:text-base xl:text-lg 2xl:text-xl font-mono">{event.label}</span>
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
