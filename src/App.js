import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProfilePage from "./components/ProfilePage";

const App = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/profile' element={<ProfilePage />} />
            </Routes>
        </>
    );
};

export default App;