
import { useState } from "react";
import { addNewStudent } from "../api/studentApi";

const AddStudentModal = ({ isOpen, closeModal, onAddStudent }) => {
    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            !student.firstName ||
            !student.lastName ||
            !student.email ||
            !student.phone
        ) {
            alert("Please fill out all fields");
            return;
        }
        const result = await addNewStudent(student); // Call the addNewStudent function from the API
        onAddStudent(result); // Pass the new student data to the parent component
        closeModal(); // Closing the modal after submission
    };

    if (!isOpen) return null; // Don't render if modal is not open

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Add New Student</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            value={student.firstName}
                            onChange={(e) => setStudent({ ...student, firstName: e.target.value })}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            value={student.lastName}
                            onChange={(e) => setStudent({ ...student, lastName: e.target.value })}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={student.email}
                            onChange={(e) => setStudent({ ...student, email: e.target.value })}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            value={student.phone}
                            onChange={(e) => setStudent({ ...student, phone: e.target.value })}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={() => closeModal()}
                            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                            Add Student
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddStudentModal;
