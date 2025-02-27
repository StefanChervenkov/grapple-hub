import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { get, put } from "../api/requestApi";
import ErrorMessage from "./ErrorMessage";



const EditEventForm = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    location: "",
    description: "",
    eventImageUrl: "",
    moreInfo: "",
    category: "",
    organizer: "",
    priceBGN: "",
    capacity: "",
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
    console.log("Form data:", formData);

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

        {/* Start Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* End Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Start Time */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Start Time</label>
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* End Time */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">End Time</label>
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
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

        {/* Category */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a category</option>
            <option value="Camp">Camp</option>
            <option value="Workshop">Workshop</option>
            <option value="Tournament">Tournament</option>
            <option value="Networking">Networking</option>
            <option value="Seminar">Seminar</option>
          </select>
        </div>

        {/* Organizer */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Organizer</label>
          <input
            type="text"
            name="organizer"
            value={formData.organizer}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Price */}
        <div className="border border-gray-300 rounded-lg p-4">
          <div className="flex items-center mt-4">
            <label className="block text-gray-700 font-medium mb-1">Price BGN</label>
            <input
              type="number"
              name="priceBGN"
              value={formData.priceBGN}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center mt-4">
            <label className="block text-gray-700 font-medium mb-1 mr-4">Price EUR</label>
            <input
              type="number"
              name="priceEUR"
              value={(Number(formData.priceBGN) / 1.95).toFixed(2)}
              disabled
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-400"
            />
          </div>
        </div>

        {/* Capacity */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Capacity</label>
          <input
            type="number"
            name="capacity"
            value={formData.capacity}
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

        {/* Event Image URL */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Event Image URL</label>
          <input
            type="text"
            name="eventImageUrl"
            value={formData.eventImageUrl}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* More Info */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">More Info</label>
          <textarea
            name="moreInfo"
            value={formData.moreInfo}
            onChange={handleChange}
            className="w-full p-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
