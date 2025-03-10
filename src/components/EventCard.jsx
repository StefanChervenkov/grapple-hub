import { useState } from "react";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteEventModal";
import { del } from "../api/requestApi";

export default function EventCard({ isComplete, event, user, onDelete }) {
  const isOwner = user && user._id === event._ownerId;
  const isLoggedIn = !!user; // Checks if user exists
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await del(`/data/events/${event._id}`); // Sends a delete request to the server
      onDelete(event._id); // Remove the event item from the UI
    } catch (error) {
      console.error("Error deleting event:", error);
      alert(`An error occurred while deleting the event. - ${error.message}`);
    }
  };

  if (!isComplete) {
    return (
      <>
        <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-5 flex flex-col space-y-4 opacity-50">
          {/* Event Title */}
          <h2 className="text-lg font-semibold">{event.title}</h2>

          {/* Incomplete Event Message */}
          <p className="text-red-500 text-sm font-bold">INCOMPLETE EVENT</p>

          {/* Buttons (Only for Owner) */}
          {isOwner && (
            <div className="flex gap-2 mt-auto">
              <Link to={`/events/${event._id}/edit`} className="flex-1">
                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-white font-medium py-1.5 text-sm rounded-lg transition">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => { setIsModalOpen(true) }}
                className="flex-1 bg-red-600 hover:bg-red-500 text-white font-medium py-1.5 text-sm rounded-lg transition"
              >
                Delete
              </button>
            </div>
          )}


        </div>

        {/* Delete Modal */}
        <DeleteModal
          isOpen={isModalOpen}
          onClose={() => { setIsModalOpen(false) }}
          onDelete={handleDelete}
        />
      </>
    );
  }

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
          <Link to={`/events/${event._id}/details`} className="flex-1">
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-1.5 text-sm rounded-lg transition">
              Details
            </button>
          </Link>
        )}

        {isOwner && (
          <>
            <Link to={`/events/${event._id}/edit`} className="flex-1">
              <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-white font-medium py-1.5 text-sm rounded-lg transition">
                Edit
              </button>
            </Link>
            <button
              onClick={() => { setIsModalOpen(true) }}
              className="flex-1 bg-red-600 hover:bg-red-500 text-white font-medium py-1.5 text-sm rounded-lg transition"
            >
              Delete
            </button>
          </>
        )}
      </div>

      {/* Delete Modal */}
      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => { setIsModalOpen(false) }}
        onDelete={handleDelete}
      />
    </div>
  );
}