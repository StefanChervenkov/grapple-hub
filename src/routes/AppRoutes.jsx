import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

import WeeklyCalendar from '../components/WeeklyCalendar';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import StudentsTablePaginated from '../components/StudentsTablePaginated';
import Logout from '../components/Logout';
import PrivateRoute from '../components/PrivateRoute';
import EventList from '../components/EventList';

const sampleEvents = [
    { id: 1, title: "BJJ Winter Camp", date: "March 15, 2024", location: "Stockholm, Sweden", description: "A weekend full of top-level training and rolling." },
    { id: 2, title: "No-Gi Summer Intensive", date: "July 10, 2024", location: "Berlin, Germany", description: "Train with world-class instructors in this no-gi focused camp." }
  ];

const AppRoutes = () => {
    return (


        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/classes" element={<PrivateRoute> <WeeklyCalendar/> </PrivateRoute>} />
            <Route path="/events" element={<PrivateRoute> <EventList events={sampleEvents} /> </PrivateRoute> } />
            <Route path="/students" element={<PrivateRoute> <StudentsTablePaginated /> </PrivateRoute> } />
            <Route path="/login" element={<LoginForm />}/>
            <Route path="/register" element={<RegisterForm />}/>
            <Route path="/logout" element={<Logout />}/>
            <Route path="*" element={<HomePage/>} />

        </Routes>

    );

}

export default AppRoutes;