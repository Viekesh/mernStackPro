import { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

const TinderCards = () => {

    const [people, setPeople] = useState([
        {
            "id": "01",
            "name": "MongoDB",
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1920px-MongoDB_Logo.svg.png"
        },
        {
            "id": "02",
            "name": "Express",
            "url": "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
        },
        {
            "id": "03",
            "name": "React",
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png"
        },
        {
            "id": "04",
            "name": "Node",
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png"
        },
        {
            "id": "05",
            "name": "Firebase",
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1920px-Firebase_Logo.svg.png"
        },
        {
            "id": "06",
            "name": "Postman",
            "url": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png"
        },
        {
            "id": "07",
            "name": "Figma",
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/800px-Figma-logo.svg.png"
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    }

    return (
        <div className='tinder-cards'>
            <div className="tinder-cards__card-container">
                {
                    people.map((person) => (
                        <TinderCard
                            className='swipe'
                            key={person.name}
                            preventSwipe={["up", "down"]}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div
                                style={{ backgroundImage: `url(${person.url})` }}
                                className="card"
                            >
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
        </div>
    )
}

export default TinderCards;