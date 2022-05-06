import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import LandingPage from './LandingPage';

const CRUDRoutes = () => {
    return (
        <div className='crud-app'>
            <Navigation />
            <Routes>
                <Route exact path='/' element={<LandingPage />}></Route>
            </Routes>
        </div>
    )
}

export default CRUDRoutes;