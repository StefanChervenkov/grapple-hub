import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

import WeeklyCalendar from '../components/WeeklyCalendar';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import StudentsTablePaginated from '../components/StudentsTablePaginated';
import Logout from '../components/Logout';


const AppRoutes = () => {
    return (


        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/classes" element={<WeeklyCalendar />} />
            <Route path="/students" element={<StudentsTablePaginated />} />
            <Route path="/login" element={<LoginForm />}/>
            <Route path="/register" element={<RegisterForm />}/>
            <Route path="/logout" element={<Logout />}/>

        </Routes>

    );

}

export default AppRoutes;