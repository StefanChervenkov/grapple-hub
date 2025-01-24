import React, { useState } from "react";

const WeeklyCalendar = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const handlePrevWeek = () => {
    setCurrentWeek((prev) => new Date(prev.setDate(prev.getDate() - 7)));
  };

  const handleNextWeek = () => {
    setCurrentWeek((prev) => new Date(prev.setDate(prev.getDate() + 7)));
  };

  const getWeekDates = (startDate) => {
    const weekDates = [];
    const start = new Date(startDate);
    const dayIndex = start.getDay();
    const weekStart = new Date(start.setDate(start.getDate() - dayIndex + 1)); // Monday
    for (let i = 0; i < 7; i++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      weekDates.push(date);
    }
    return weekDates;
  };

  const weekDates = getWeekDates(currentWeek);
  console.log(weekDates);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      {/* Navigation */}
      <div className="flex justify-between items-center mb-4 sticky top-0 bg-gray-100 p-2 z-10 shadow">
        <button
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
          onClick={handlePrevWeek}
        >
          Previous Week
        </button>
        <div className="text-lg font-semibold text-gray-700 text-center">
          Week of {weekDates[0].toDateString()} - {weekDates[6].toDateString()}
        </div>
        <button
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
          onClick={handleNextWeek}
        >
          Next Week
        </button>
      </div>

      {/* Weekly Calendar */}
      <div className="hidden md:grid md:grid-cols-7 gap-4 text-center">
        {weekDates.map((date) => (
          <div
            key={date}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            {/* Day and Date */}
            <div className="text-sm text-gray-500 font-medium">
              {date.toLocaleDateString("en-US", { weekday: "short" })}
            </div>
            <div className="text-xl font-bold text-gray-800">
              {`${date.getDate()} ${date.toLocaleDateString("en-US", { month: "short" })}`}

            </div>

            {/* Classes */}
            <div className="mt-2 space-y-2">
              <div className="bg-green-100 text-green-800 text-sm rounded px-2 py-1">
                Yoga (10:00 AM)
              </div>
              <div className="bg-blue-100 text-blue-800 text-sm rounded px-2 py-1">
                Jiu-Jitsu (6:00 PM)
              </div>
            </div>

            {/* Booking Button */}
            <button
              className="mt-2 px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600 transition w-full"
              disabled={false}
            >
              Book Class
            </button>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="grid md:hidden gap-4 text-center overflow-x-auto flex flex-row">
        {weekDates.map((date) => (
          <div
            key={date}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition w-48 flex-shrink-0"
          >
            {/* Day and Date */}
            <div className="text-sm text-gray-500 font-medium">
              {date.toLocaleDateString("en-US", { weekday: "short" })}
            </div>
            <div className="text-xl font-bold text-gray-800">
              {date.getDate()}
            </div>

            {/* Classes */}
            <div className="mt-2 space-y-2">
              <div className="bg-green-100 text-green-800 text-sm rounded px-2 py-1">
                Yoga (10:00 AM)
              </div>
              <div className="bg-blue-100 text-blue-800 text-sm rounded px-2 py-1">
                Jiu-Jitsu (6:00 PM)
              </div>
            </div>

            {/* Booking Button */}
            <button
              className="mt-2 px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600 transition w-full"
              disabled={false}
            >
              Book Class
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;
