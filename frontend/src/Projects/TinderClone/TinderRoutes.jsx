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



// Add this code just below private in the package.json
// "proxy": "http://localhost:3003",