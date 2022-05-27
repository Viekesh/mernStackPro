import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';

const BARoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<LandingPage />}></Route>
            </Routes>
        </>
    )
}

export default BARoutes;