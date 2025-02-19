import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { get } from "../api/requestApi"; 
import DeleteModal from "../components/DeleteEventModal";
import Spinner from "../components/Spinner";

export default function EventDetailsPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {user} = useAuth(); 

  useEffect(() => {
    async function fetchEvent() {
      try {
        const data = await get(`/data/events/${eventId}`);
        setEvent(data);
        
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchEvent();
  }, [eventId]);

  if (isLoading) return <Spinner/>;
  if (!event) return <p className="text-center text-red-500">Event not found</p>;

  return (
    <div className="max-w-3xl mx-auto bg-gray-800 text-white p-6 rounded-xl shadow-lg mt-6 space-y-6">
      {/* Event Image */}
      {event.eventImageUrl && (
        <img src={event.eventImageUrl} alt={event.title} className="rounded-lg w-full object-cover max-h-80" />
      )}

      {/* Event Title */}
      <h1 className="text-3xl font-bold">{event.title}</h1>

      {/* Date & Time */}
      <div className="text-gray-400 text-sm flex space-x-4">
        <span>📅 {event.date} </span>
        {event.time && <span>⏰ {event.time}</span>}
        {event.timezone && <span>🌍 {event.timezone}</span>}
      </div>

      {/* Location */}
      {event.location && (
        <p className="text-gray-300"><strong>📍 Location:</strong> {event.location}</p>
      )}
      {event.onlineLink && (
        <p className="text-blue-400 underline"><a href={event.onlineLink} target="_blank" rel="noopener noreferrer">Join Online</a></p>
      )}

      {/* Description */}
      <p className="text-gray-300">{event.description}</p>

      {/* Category & Tags */}
      <div className="flex flex-wrap gap-2 mt-2">
        {event.category && <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">{event.category}</span>}
        {event.tags?.map(tag => (
          <span key={tag} className="bg-gray-700 px-3 py-1 rounded-full text-sm">{tag}</span>
        ))}
      </div>

      {/* Organizer */}
      {event.organizer && (
        <p className="text-gray-300"><strong>👤 Organizer:</strong> {event.organizer}</p>
      )}

      {/* Capacity & Attendees */}
      {event.capacity && (
        <p className="text-gray-300"><strong>🎟 Capacity:</strong> {event.capacity} spots</p>
      )}
      {event.attendees?.length > 0 && (
        <p className="text-gray-300"><strong>👥 Attendees:</strong> {event.attendees.length}</p>
      )}

      {/* Price / Fee */}
      {event.price ? (
        <p className="text-gray-300"><strong>💰 Price:</strong> ${event.price}</p>
      ) : (
        <p className="text-green-400"><strong>🎉 Free Event</strong></p>
      )}

      {/* Action Buttons */}
      <div className="flex space-x-3 mt-4">
        {user && (
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-lg transition">
            Apply
          </button>
        )}

        {user?.id === event.ownerId && (
          <>
            <Link
              to={`/events/edit/${event.id}`}
              className="bg-yellow-500 hover:bg-yellow-400 text-white font-medium px-4 py-2 rounded-lg transition"
            >
              Edit
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-red-600 hover:bg-red-500 text-white font-medium px-4 py-2 rounded-lg transition"
            >
              Delete
            </button>
          </>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDelete={() => console.log("Delete event logic here")} // Placeholder, should be replaced with actual delete logic
      />
    </div>
  );
}
