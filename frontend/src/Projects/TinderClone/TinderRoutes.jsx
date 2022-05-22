import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';

const TinderRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<LandingPage />}></Route>
            </Routes>
        </>
    )
}

export default TinderRoutes;