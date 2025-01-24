import { useState, useEffect } from "react";
import { deleteStudent, editStudent } from "../api/studentApi";
import Spinner from "./Spinner";
import AddStudentModal from "./addStudentModal";

const StudentsTable = () => {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state
    const [sortState, setSortState] = useState({ firstName: 'asc', lastName: 'asc', email: 'asc' });
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

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

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentStudents = students.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(students.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleAddStudent = (newStudent) => {
        // Update students state with the new student
        setStudents((prevStudents) => [...prevStudents, newStudent]);
    };

    const handleFilterClick = (filterBy) => {
        const sortOrder = sortState[filterBy] === 'asc' ? 'desc' : 'asc';
        const sortedStudents = [...students].sort((a, b) => {
            return sortOrder === 'asc'
                ? a[filterBy].localeCompare(b[filterBy])
                : b[filterBy].localeCompare(a[filterBy]);
        });

        setStudents(sortedStudents);
        setSortState({ ...sortState, [filterBy]: sortOrder });
    };

    return (
        <>
            {isLoading && <Spinner />}

            {isModalOpen && (
                <AddStudentModal
                    isOpen={isModalOpen}
                    closeModal={() => setIsModalOpen(false)}
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
                            <th className="px-6 py-3 text-left text-sm font-medium">
                                First Name
                                <button
                                    className="ml-2 text-gray-500 hover:text-gray-700"
                                    title="Filter by First Name"
                                    onClick={() => handleFilterClick('firstName')}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L14 12v6a1 1 0 01-.553.894l-4 2A1 1 0 019 20v-8L3.293 6.707A1 1 0 013 6V4z"
                                        />
                                    </svg>
                                </button>
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium">
                                Last Name
                                <button
                                    className="ml-2 text-gray-500 hover:text-gray-700"
                                    title="Filter by Last Name"
                                    onClick={() => handleFilterClick('lastName')}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L14 12v6a1 1 0 01-.553.894l-4 2A1 1 0 019 20v-8L3.293 6.707A1 1 0 013 6V4z"
                                        />
                                    </svg>
                                </button>
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium">
                                Email
                                <button
                                    className="ml-2 text-gray-500 hover:text-gray-700"
                                    title="Filter by Email"
                                    onClick={() => handleFilterClick('email')}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L14 12v6a1 1 0 01-.553.894l-4 2A1 1 0 019 20v-8L3.293 6.707A1 1 0 013 6V4z"
                                        />
                                    </svg>
                                </button>
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Phone Number</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {currentStudents.map((student) => (
                            <tr
                                key={student._id}
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

                {/* Pagination Controls */}
                <div className="flex justify-center mt-4">
                    <button
                        className="px-4 py-2 mx-1 text-sm font-medium text-white bg-gray-500 rounded hover:bg-gray-600"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Prev
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 mx-1 text-sm font-medium ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} rounded`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        className="px-4 py-2 mx-1 text-sm font-medium text-white bg-gray-500 rounded hover:bg-gray-600"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};

export default StudentsTable;
