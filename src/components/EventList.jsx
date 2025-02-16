import { Link } from 'react-router-dom';
import EventCard from './EventCard';

export default function EventList({ events }) {
  return (
    <div className="p-6">
      {/* Create Event Link */}
      <div className="flex justify-end mb-6">
        <Link
          to="/add-event"
          className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-xl text-lg transition shadow-lg"
        >
          + Create Event
        </Link>
      </div>

      {/* Event Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      
     
    </div>
  );
}
