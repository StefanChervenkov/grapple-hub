import { useState, useEffect } from "react";
import { deleteStudent, editStudent } from "../api/studentApi";
import Spinner from "./Spinner";
import AddStudentModal from "./addStudentModal";

const StudentsTable = () => {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const  [isModalOpen, setIsModalOpen] = useState(false); // Track modal state

    useEffect(() => {
        fetch("http://localhost:3030/jsonstore/students")
            .then((res) => res.json())
            .then((data) => {
                setStudents(Object.values(data));
            })
            .catch((error) => {
                console.error("Error fetching students:", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const handleAddStudent = (newStudent) => {
        // Logic to add the new student (e.g., send to API)
        console.log("Adding student:", newStudent);

        // Update students state with the new student
        setStudents((prevStudents) => [...prevStudents, newStudent]);
    };

    return (
        <>
            {isLoading && <Spinner />}

            {isModalOpen && (
                <AddStudentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddStudent={handleAddStudent}
            />
            )}

            <div className="overflow-x-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-gray-700">Students</h2>
                    <button
                        className="px-6 py-2 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600 transition"
                        onClick={() => setIsModalOpen(true)} // Open the modal when clicked
                    >
                        + Add Student
                    </button>
                </div>
                <table className="min-w-full bg-white rounded-lg shadow-md">
                    <thead className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-900">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-medium">First Name</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Last Name</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Email</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Phone Number</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {students.map((student) => (
                            <tr
                                key={student.id}
                                className="hover:bg-gray-100 transition duration-200 ease-in-out"
                            >
                                <td className="px-6 py-4 text-sm text-gray-700">{student.firstName}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{student.lastName}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{student.email}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{student.phone}</td>
                                <td className="px-6 py-4 flex space-x-4">
                                    <button
                                        className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 transition"
                                        onClick={() => editStudent(student.id, student)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition"
                                        onClick={() => deleteStudent(student.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default StudentsTable;
