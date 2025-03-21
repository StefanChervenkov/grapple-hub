import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventCard from './EventCard';
import { useAuth } from '../hooks/useAuth';
import { checkEventCompleteness } from '../api/util';


export default function EventList() {
  const [events, setEvents] = useState([]);
  const { user } = useAuth();
  const url = 'http://localhost:3030/data/events';


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setEvents(data));

  }, []);

  const handleDeleteEvent = (deletedId) => {
    setEvents(events.filter(event => event._id !== deletedId));
  };

  return (
    <div className="p-6">
      {user && 
        <div className="flex justify-end mb-6">
          <Link
            to="/add-event"
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-xl text-lg transition shadow-lg"
          >
            + Create Event
          </Link>
        </div>}

      {/* Event Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <EventCard isComplete={checkEventCompleteness(event)} key={event._id} event={event} user={user} onDelete={handleDeleteEvent} />
        ))}
      </div>


    </div>
  );
}
