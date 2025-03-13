import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { get, put } from '../api/requestApi';
import Spinner from '../components/Spinner';

const EventApplicationsPage = () => {
    const { eventId } = useParams();
    const [applications, setApplications] = useState([]);
    const [currentEvent, setCurrentEvent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const event = await get(`/data/events/${eventId}`);
                setCurrentEvent(event);

                if (user._id !== event._ownerId) {
                    console.log('You are not the owner of this event');
                    navigate('/');
                    return;
                }

                const data = await get(`/jsonstore/eventApplications`);
                const eventApplications = Object.values(data).filter(app => app.eventId === eventId);
                setApplications(eventApplications);
            } catch (error) {
                console.error('Error fetching event or applications:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEvent();
    }, [eventId, user._id, navigate]);

    const handleApplicationStatusChange = async (applicationId) => {
        try {
            const application = applications.find(app => app._id === applicationId);
            const updatedApplication = { ...application, confirmed: !application.confirmed };
            await put(`/jsonstore/eventApplications/${applicationId}`, updatedApplication);
            setApplications(applications.map(app => app._id === applicationId ? updatedApplication : app));
        } catch (error) {
            console.error('Error approving application:', error);
        }
    };

    const deleteApplication = async (applicationId) => {
        try {
            await put(`/jsonstore/eventApplications/${applicationId}`);
            setApplications(applications.filter(app => app._id !== applicationId));
        } catch (error) {
            console.error('Error deleting application:', error);
        }
    };

    if (isLoading) return <Spinner />;

    return (
        <div className="max-w-3xl mx-auto bg-gray-800 text-white p-6 rounded-xl shadow-lg mt-6 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Event Applications</h1>
                <Link
                    to={`/events/${eventId}/details`}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-lg transition"
                >
                    Back to Event Details
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-800">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-700">User</th>
                            <th className="py-2 px-4 border-b border-gray-700">Email</th>
                            <th className="py-2 px-4 border-b border-gray-700">Status</th>
                            <th className="py-2 px-4 border-b border-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map(application => (
                            <tr key={application.userId}>
                                <td className="py-2 px-4 border-b border-gray-700">{`${application.firstName} ${application.lastName}`}</td>
                                <td className="py-2 px-4 border-b border-gray-700">{application.email}</td>
                                <td className="py-2 px-4 border-b border-gray-700">{application.confirmed ? 'Approved' : 'Pending'}</td>
                                <td className="py-2 px-4 flex space-x-2 border-b border-gray-700">
                                    {!application.confirmed ? (
                                        <button
                                            onClick={() => handleApplicationStatusChange(application._id)}
                                            className="bg-green-600 hover:bg-green-300 text-white font-medium px-4 py-2 rounded-lg transition"
                                        >
                                            Approve
                                        </button>
                                    ) :
                                        <button
                                            onClick={() => handleApplicationStatusChange(application._id, 'rejected')}
                                            className="bg-red-600 hover:bg-red-500 text-white font-medium px-4 py-2 rounded-lg transition ml-2"
                                        >
                                            Reject
                                        </button>
                                    }

                                    {
                                        <button
                                            className="bg-red-700 hover:bg-red-300 text-white font-medium px-4 py-2 rounded-lg transition"
                                            onClick={() => deleteApplication(application._id)}
                                        >
                                            Delete
                                        </button>
                                    }

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EventApplicationsPage;