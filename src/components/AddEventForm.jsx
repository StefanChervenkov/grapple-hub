
import { useState } from "react";
import { post } from "../api/requestApi";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";



const AddEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });
  const [errorMessage, setErrorMessage] = useState();

  const url = "/data/events";
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some(field => field === '')) {
      setErrorMessage('Please fill out all fields');
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
            placeholder="Enter location"
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
            placeholder="Enter a short description"
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