import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainForm.css';

const MainForm = () => {

    const navigate = useNavigate();

    const [error, setError] = useState("");

    const [data, setData] = useState({ name: "", room: "" });

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value);
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const validation = () => {
        if (!data.name) {
            setError("Please Enter Your Name");
            return false;
        }
        if (!data.room) {
            setError("Please Select Room");
            return false;
        }
        setError("")
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validation();
        if (isValid) {
            navigate(`/chat/${data.room}`, { state: data });
        }
    }

    return (
        <div className='main-form'>
            <form onSubmit={handleSubmit}>
                <div className="greet">
                    <h2>Welcome To ChatHub</h2>
                </div>
                <div className="input-1">
                    <input onChange={handleChange} name='name' type="text" className='input-as-name' placeholder='Enter Name' />
                </div>
                <div className="select-1">
                    <select onChange={handleChange} name="room" className='categories'>
                        <option value="">Select Room</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Coding">Coding</option>
                        <option value="SocialMedia">Social Media</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
                {error ? <small className='text-danger'>{error}</small> : ""}
            </form>
        </div>
    )
}

export default MainForm;



// If user doesn't input the name, then it should not be submitted, for handle the situation or error like this we create a state ("const [error, setError] = useState()")
// Now we create a validation function to check our validation is success or not (means input is got or not)
// Validation checks if in input field user not enter any name or not select a room then it shows a message (given in the parenthesis) then it should return false (means if user does not enter the name or select the room, so we have show the error).
// If validation indicate true, then we submitted the form.

// When our form is submit then we call onSubmit method.

// handleSubmit handles the form submission.

// It is the by default nature of the form if the form is submitted the page is automatically refreshed.

// To solve this problem we type (e.preventDefault) by writing this code then our form is not automatically submitted.

// Now we check our form is valid or not, for that we will create a const "isValid".

// isValid call the validation function we created just before.

// If any error occured during validation (means name error or room error), it will return false and the form is not be submitted but if it return true means there is no error occured in the form and then the form is submitted.

// If our form is valid then we want user go to that selected room.

// If user select coding room then we would like our path is going to the coding route.

// means user select any room then he will be redirect that route.

// Now we want to see the error on the screen.

// So now we code error message below button inside user interface, by this we will see error on screen. ('{error ? <small className='text-danger'>{error}</small> : ""}')

// We will check if there is error then it will show the error.



// Whatever room the user selects, we should see it here and the name of that user should come to us, so let's set it.

// Here we go inside useNavigate in the MainForm component, here we send data by using state, which was user data.

// So now we go into the ChatRoom and get the data from MainForm component.

// To get data from MainForm component we will need to use "useLocation" and "useEffect"  inside the ChatRoom component.
