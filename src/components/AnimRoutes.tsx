import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';

import { Routes, Route, useLocation } from 'react-router-dom';

const AnimRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} ></Route>
                <Route path='/about' element={<About />} ></Route>
                <Route path='/contact' element={<Contact />} ></Route>
                <Route path='/portfolio' element={<Portfolio />} ></Route>
            </Routes>
        </>
    )
    
};

export default AnimRoutes;
