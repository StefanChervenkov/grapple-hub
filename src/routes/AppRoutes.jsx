import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Contact from '../pages/Contact';
import About from '../pages/About';


const AppRoutes = () => {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contacts" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );

}

export default AppRoutes;