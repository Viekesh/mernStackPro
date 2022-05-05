import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import '../Common.css';
import ChatRoom from './Components/ChatRoom';

const ChatRoutes = () => {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<LandingPage />}></Route>
                <Route exact path='/chat/:roomName' element={<ChatRoom />}></Route>
            </Routes>
        </div>
    )
}

export default ChatRoutes;