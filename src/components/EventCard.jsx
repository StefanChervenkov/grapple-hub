export default function EventCard({ event, user }) {
  const isOwner = user && user._id === event._ownerId;
  const isLoggedIn = !!user; // Checks if user exists

  return (
    <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-5 flex flex-col space-y-4">
      {/* Event Title */}
      <h2 className="text-lg font-semibold">{event.title}</h2>

      {/* Event Date & Location */}
      <div className="flex justify-between text-gray-400 text-xs">
        <span>{event.date}</span>
        <span>{event.location}</span>
      </div>

      {/* Event Description */}
      <p className="text-gray-300 text-sm line-clamp-3">{event.description}</p>

      {/* Buttons (Conditionally Rendered) */}
      <div className="flex gap-2 mt-auto">
        {isLoggedIn && (
          <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-medium py-1.5 text-sm rounded-lg transition">
            Apply
          </button>
        )}

        {isOwner && (
          <>
            <button className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-white font-medium py-1.5 text-sm rounded-lg transition">
              Edit
            </button>
            <button className="flex-1 bg-red-600 hover:bg-red-500 text-white font-medium py-1.5 text-sm rounded-lg transition">
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}
