import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { get, post } from "../api/requestApi";
import DeleteModal from "../components/DeleteEventModal";
import Spinner from "../components/Spinner";
import ApplyModal from "../components/ApplyModal";

export default function EventDetailsPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [currentApplication, setCurrentApplication] = useState(null);
  const { user } = useAuth();

  const isOwner = user && user._id === event?._ownerId;

  useEffect(() => {
    async function fetchEvent() {
      try {
        const data = await get(`/data/events/${eventId}`);
        setEvent(data);

        const eventApplications = await get(`/jsonstore/eventApplications`);
        const eventApplication = Object.values(eventApplications).some(app => app.userId === user._id && app.eventId === eventId);
       
        if (eventApplication) {
          setCurrentApplication(Object.values(eventApplications).find(app => app.userId === user._id && app.eventId === eventId));

        }




      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchEvent();
  }, [eventId]);

  const handleApply = async () => {
    try {
      const currentApllication = {
        userId: user._id,
        email: user.email,
        eventId: event._id,
        confirmed: false
      };

      await post('/jsonstore/eventApplications', currentApllication);

      setIsApplyModalOpen(false);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setCurrentApplication(currentApllication);
         
      }, 2000);
      
    } catch (error) {
      console.error("Error applying for event:", error);
    }
  };

  if (isLoading) return <Spinner />;
  if (!event) return <p className="text-center text-red-500">Event not found</p>;

  return (
    <div className="max-w-3xl mx-auto bg-gray-800 text-white p-6 rounded-xl shadow-lg mt-6 space-y-6">
      {/* Event Image */}
      {event.eventImageUrl && (
        <img src={event.eventImageUrl} alt={event.title} className="rounded-lg w-full object-cover max-h-80 md:max-h-96 lg:max-h-128" style={{ objectFit: 'contain' }} />
      )}

      {/* Event Title */}
      <h1 className="text-3xl font-bold">{event.title}</h1>

      {/* Date & Time */}
      <div className="text-gray-400 text-sm flex space-x-4">
        <span>📅 <strong>Start:</strong> {new Date(event.startDate).toLocaleDateString()} ⏰ {event.startTime} - <strong>End:</strong> {new Date(event.endDate).toLocaleDateString()} ⏰ {event.endTime}</span>
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
      {event.priceBGN ? (
        <p className="text-gray-300"><strong>💰 Price:</strong> {event.priceBGN} BGN</p>
      ) : (
        <p className="text-green-400"><strong>🎉 Free Event</strong></p>
      )}

      {/* More Info */}
      {event.moreInfo && (
        <div className="text-gray-300">
          <strong>ℹ️ More Info:</strong>
          <p>{event.moreInfo}</p>
        </div>
      )}

      {/* Application Status */}
      {currentApplication && (
        <div className="text-gray-300">
          <strong>📝 Application Status:</strong>
          <p>{currentApplication.confirmed ? "Approved" : "Pending Approval"}</p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex space-x-3 mt-4">
        {user && !currentApplication && (
          <button
            onClick={() => setIsApplyModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-lg transition"
          >
            Apply
          </button>
        )}

        {isOwner && (
          <>
            <Link
              to={`/events/${event._id}/edit/`}
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

      {/* Apply Confirmation Modal */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        onApply={handleApply}
      />

      {/* Delete Confirmation Modal */}
      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDelete={() => console.log("Delete event logic here")} // Placeholder, should be replaced with actual delete logic
      />
    </div>
  );
}