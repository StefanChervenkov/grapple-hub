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



const AppRoutes = () => {
    return (


        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/classes" element={<PrivateRoute> <WeeklyCalendar/> </PrivateRoute>} />
            <Route path="/events" element={<PrivateRoute> <EventList  /> </PrivateRoute> }/>
            <Route path="/add-event" element={<PrivateRoute> <AddEvent/></PrivateRoute> }/>
            <Route path="/students" element={<PrivateRoute> <StudentsTablePaginated /> </PrivateRoute> } />
            <Route path="/login" element={<LoginForm />}/>
            <Route path="/register" element={<RegisterForm />}/>
            <Route path="/logout" element={<Logout />}/>
            <Route path="*" element={<HomePage/>} />

        </Routes>

    );

}

export default AppRoutes;