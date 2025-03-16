import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

import WeeklyCalendar from '../components/WeeklyCalendar';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import StudentsTablePaginated from '../components/StudentsTablePaginated';
import Logout from '../components/Logout';
import PrivateRoute from '../components/PrivateRoute';
import EventList from '../components/EventList';
import AddEvent from '../components/AddEventForm';
import EditEventForm from '../components/EditEventForm';
import DeleteEventModal from '../components/DeleteEventModal';
import EventDetailsPage from '../pages/EventDetailsPage';
import EventApplicationsPage from '../pages/EventApplicationsPage';
import EventForumPage from '../pages/EventForumPage';



const AppRoutes = () => {
    return (


        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/add-event" element={<PrivateRoute> <AddEvent /></PrivateRoute>} />
            <Route path="events/:eventId/edit" element={<PrivateRoute> <EditEventForm /> </PrivateRoute>} />
            <Route path="events/:eventId/details" element={<PrivateRoute> <EventDetailsPage /> </PrivateRoute>} />
            <Route path="events/:eventId/applications" element={<PrivateRoute> <EventApplicationsPage /> </PrivateRoute>} />
            <Route path="/events/:eventId/forum" element={<PrivateRoute> <EventForumPage />  </PrivateRoute>} />
            <Route path="/delete" element={<DeleteEventModal />} />
            <Route path="/students" element={<PrivateRoute> <StudentsTablePaginated /> </PrivateRoute>} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<HomePage />} />

        </Routes>

    );

}

export default AppRoutes;