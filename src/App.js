import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProfilePage from "./components/ProfilePage";
import Projects from './components/Projects';
import LittleProject1 from './components/projects/LittleProject1';

const App = () => {
    return (
        <>
            <Navbar />
            
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/projects/:id' element={<Projects />} />
                <Route path='/profile' element={<ProfilePage />} />
            </Routes>
        </>
    );
};

export default App;