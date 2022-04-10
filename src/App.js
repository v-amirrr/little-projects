import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Projects from './components/Projects';

const App = () => {
    return (
        <>
            <Navbar />
            
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/projects/:id' element={<Projects />} />
            </Routes>
        </>
    );
};

export default App;