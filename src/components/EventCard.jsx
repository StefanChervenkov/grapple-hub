export default function EventCard({ event }) {
    return (
      <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-5 flex flex-col space-y-4">
        {/* Event Title */}
        <h2 className="text-xl font-semibold">{event.title}</h2>
  
        {/* Event Date & Location */}
        <div className="flex justify-between text-gray-400 text-sm">
          <span>{event.date}</span>
          <span>{event.location}</span>
        </div>
  
        {/* Event Description */}
        <p className="text-gray-300 text-sm line-clamp-3">{event.description}</p>
  
        {/* Apply Button */}
        <button className="mt-auto bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded-xl transition">
          Apply
        </button>
      </div>
    );
  }
  