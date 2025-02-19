
import { useState } from "react";
import { post } from "../api/requestApi";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";



const AddEvent = () => {
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
    price: "",
    capacity: "",
    attendees: [],

  });
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();

  const url = "/data/events";

  const fieldLabels = {
    title: "Event Title",
    startDate: "Start Date",
    endDate: "End Date",
    location: "Location",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = Object.keys(fieldLabels);
    const emptyRequiredFields = requiredFields.filter(field => formData[field].trim() === '');


    if (emptyRequiredFields.length > 0) {
      const formattedFields = emptyRequiredFields.map(field => fieldLabels[field]).join(', ');
      setErrorMessage(`Please fill out the following mandatory fields: ${formattedFields}`);

      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }


    try {
      const result = await post(url, formData);

      if (result) {
        navigate("/events");
      }

    } catch (error) {

      setErrorMessage(error.message);
    }

  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create New Event</h2>

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
            placeholder="Enter event title"
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
            placeholder="Enter location"
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
          </select>
        </div>



        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a short description"
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
            placeholder="Enter image URL"
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
            placeholder="Enter additional information about the event"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg text-lg transition shadow-lg"
        >
          Create Event
        </button>
      </form>
    </div>
  );
}

export default AddEvent;