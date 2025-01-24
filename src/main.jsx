
import ReactDOM from 'react-dom/client';
import NavBar3 from './components/NavBar3';

import './index.css';
import StudentsTable from './components/StudentsTable';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import WeeklyCalendar from './components/WeeklyCalendar';




ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <NavBar3/>
  <StudentsTable/>
 <LoginForm />
 <RegisterForm />
 <WeeklyCalendar />
  
  </>,
)
