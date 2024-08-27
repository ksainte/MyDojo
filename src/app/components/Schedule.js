import React from 'react';

const Schedule = () => {
  const hours = Array.from({ length: 12 }, (_, i) => 12 + i); // Hours from 12 to 23
  const days = ['Mon 4', 'Tue 5', 'Wed 6', 'Thu 7', 'Fri 8', 'Sat 9', 'Sun 10'];

  const events = [
    { day: 'Fri 8', startHour: 18, endHour: 20, label: 'Event 1', color: 'bg-blue-500' },
    { day: 'Fri 8', startHour: 10, endHour: 12, label: 'Event 2', color: 'bg-green-500' },
    // Add more events here
  ];

  return (
    <div className="grid grid-cols-8 grid-rows-24 gap-0 p-4">
      {/* Header row with days */}
      <div className="col-span-8"></div>
      {days.map((day, index) => (
        <div key={day} className={`text-center font-bold ${index >= 6 ? 'bg-gray-200' : 'bg-gray-300'}`}>
          {day}
        </div>
      ))}

      {/* Time rows */}
      {hours.map((hour, index) => (
        <React.Fragment key={hour}>
          <div className="flex items-center justify-center border border-gray-300">
            {`${hour}:00`}
          </div>
          {days.map((day) => (
            <div key={`${hour}-${day}`} className="relative border border-gray-300">
              {/* Display events */}
              {events
                .filter((event) => event.day === day && event.startHour <= hour && hour < event.endHour)
                .map((event, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 ${event.color} opacity-70`}
                    style={{ top: `${(hour - event.startHour) * 100 / (event.endHour - event.startHour)}%`, height: `${100 / (event.endHour - event.startHour)}%` }}
                  >
                    <span className="text-white text-xs p-1">{event.label}</span>
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
