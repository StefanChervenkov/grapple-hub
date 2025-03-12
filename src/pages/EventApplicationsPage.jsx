import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { get, put } from '../api/requestApi';
import Spinner from '../components/Spinner';

const EventApplicationsPage = () => {
  const { eventId } = useParams();
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const data = await get(`/jsonstore/eventApplications`);
        const eventApplications = Object.values(data).filter(app => app.eventId === eventId);
        setApplications(eventApplications);
      } catch (error) {
        console.error('Error fetching applications:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplications();
  }, [eventId]);

  const handleApprove = async (applicationId) => {
    try {
      const application = applications.find(app => app.id === applicationId);
      const updatedApplication = { ...application, confirmed: true };
      await put(`/jsonstore/eventApplications/${applicationId}`, updatedApplication);
      setApplications(applications.map(app => app.id === applicationId ? updatedApplication : app));
    } catch (error) {
      console.error('Error approving application:', error);
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="max-w-3xl mx-auto bg-gray-800 text-white p-6 rounded-xl shadow-lg mt-6 space-y-6">
      <h1 className="text-3xl font-bold">Event Applications</h1>
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
          {applications.map(app => (
            <tr key={app.id}>
              <td className="py-2 px-4 border-b border-gray-700">{app.userId}</td>
              <td className="py-2 px-4 border-b border-gray-700">{app.email}</td>
              <td className="py-2 px-4 border-b border-gray-700">{app.confirmed ? 'Approved' : 'Pending'}</td>
              <td className="py-2 px-4 border-b border-gray-700">
                {!app.confirmed && (
                  <button
                    onClick={() => handleApprove(app.id)}
                    className="bg-green-600 hover:bg-green-500 text-white font-medium px-4 py-2 rounded-lg transition"
                  >
                    Approve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventApplicationsPage;