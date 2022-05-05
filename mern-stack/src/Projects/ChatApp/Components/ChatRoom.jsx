import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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

                <div className="row">
                    <div className="align-items">
                        <div>
                            <strong>Prince</strong>
                            <small>2 minutes to go</small>
                        </div>
                        <h4>Hello there</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="align-items">
                        <div>
                            <strong>Prince</strong>
                            <small>2 minutes to go</small>
                        </div>
                        <h4>Hello there</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="align-items">
                        <div>
                            <strong>Prince</strong>
                            <small>2 minutes to go</small>
                        </div>
                        <h4>Hello there</h4>
                    </div>
                </div>

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

// 