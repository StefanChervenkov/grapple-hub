import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

import WeeklyCalendar from '../components/WeeklyCalendar';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import StudentsTablePaginated from '../components/StudentsTablePaginated';


const AppRoutes = () => {
    return (


        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/classes" element={<WeeklyCalendar />} />
            <Route path="/students" element={<StudentsTablePaginated />} />
            <Route path="/login" element={<LoginForm />}/>
            <Route path="/register" element={<RegisterForm />}/>

        </Routes>

    );

}

export default AppRoutes;