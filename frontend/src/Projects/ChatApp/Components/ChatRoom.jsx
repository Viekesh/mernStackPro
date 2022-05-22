import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Moment from 'react-moment';

import './ChatRoom.css';

const ChatRoom = () => {

    const location = useLocation();

    const [data, setData] = useState({});

    const [msg, setMsg] = useState("");

    const [allMessages, setMessages] = useState([]);

    useEffect(() => {
        setData(location.state)
    }, [location]);

    const handleChange = (e) => setMsg(e.target.value);

    const onSubmit = () => {
        const newMessage = { time: new Date(), msg, name: data.name };
        setMessages([...allMessages, newMessage]);
    };

    return (
        <div className='chat-room container'>
            <div className="chat-room-header">
                <h1>{data?.room} Chat Room</h1>
            </div>
            <div className="rounded-box">

                {
                    allMessages.map(msg => {
                        return data.name === msg.name

                            ?

                            <div className="row box-1">
                                <div className="align-items">
                                    <div>
                                        <strong>{msg.name}</strong>
                                        <small><Moment fromNow>{msg.time}</Moment></small>
                                    </div>
                                    <h4>{msg.msg}</h4>
                                </div>
                            </div>

                            :

                            <div className="row box-2">
                                <div className="align-items">
                                    <div>
                                        <strong>{msg.name}</strong>
                                        <small><Moment fromNow>{msg.time}</Moment></small>
                                    </div>
                                    <h4>{msg.msg}</h4>
                                </div>
                            </div>
                    })
                }

            </div>
            <div className="form-group x-y-axis-center">
                <input onChange={handleChange} name="message" value={msg} type="text" className="form-control" placeholder='Enter Your Message Here' />
                <button onClick={onSubmit} type='button' className="send-btn">Send</button>
            </div>
        </div>
    )
}

export default ChatRoom;



// Whatever room the user selects, we should see it here and the name of that user should come to us, so let's set it.

// We import here "useLocation" and "useEffect".

// Here we use "useEffect" hook with the location (const location).

// By using useLocation we made an object, then we use useState hook to make a state it will use user data to show on ChatRoom component with the help of useLocation.

// We create a handleChange function it will get the event as a parameter ("e"), then this function set the value of parameter.

// We initialise a useState with empty message (const [msg, setMsg = useState("")]).

// If user send the msg then handleChange function use event and will save it inside the "setMsg".

// Now we use another useState hook ( const [allMessages, setMessages] = useState([])) and we will define it as an empty array (means by default it will be an empty array).

// When we click on submit button, then submit button store our message in an array by using onSubmit function.

// Those messages which is send by user are stored in an array, But we should see those messages above the screen.

// Users send messages are saved in the "allMessages", we map all those messages, from here it will return our different div.

// Before return the different div, we will check that the user name in the message and the name with which we have logged in is correct or not.

// If the name is correct then we will see it on the right side of the box, if it's incorrect, then it will be visible in the right side in white color.

// The name of the message and the name we entered in the input field is matched then we will render it in box 1 otherwise it will render in box 2, this is called as conditional rendering.

