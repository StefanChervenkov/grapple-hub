import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { get, put } from "../api/requestApi";
import ErrorMessage from "./ErrorMessage";

const EditEventForm = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);

  // Fetch event data
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await get(`/data/events/${eventId}`);
        setFormData(data);
      } catch (error) {
        setErrorMessage("Failed to load event details.");
      }
    };
    fetchEvent();
  }, [eventId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some(field => field === '')) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    try {
      await put(`/data/events/${eventId}`, formData);
      navigate("/events"); // Redirect to event list after update
    } catch (error) {
      setErrorMessage("Failed to update event.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Edit Event</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {errorMessage && <ErrorMessage message={errorMessage} />}

        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Event Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Event Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-500 text-white font-medium py-3 rounded-lg text-lg transition shadow-lg"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditEventForm;
