import Header from './Components/Header/Header';
import SwipeButton from './Components/SwipeButton/SwipeButton';
import TinderCards from './Components/TinderCards/TinderCards';
import("../Common.css");

const LandingPage = () => {
    return (
        <div>
            <Header />
            <TinderCards />
            <SwipeButton />
        </div>
    )
}

export default LandingPage;