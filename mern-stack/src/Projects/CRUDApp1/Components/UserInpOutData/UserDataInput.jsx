import React, { useState } from 'react';
import './UserDataInput.css';

const UserDataInput = () => {

    const [inpValue, setInpValue] = useState({
        name: "",
        email: "",
        job: "",
        mobile: "",
        age: "",
        decription: "",
    })

    // inpValue : It is a current value
    // setInputValue : It is a updated value
    // useState : Inside of this is our initial state
    // The value of our initial state is equal to the name we type in the input field "name = value"
    // The value of the name is very important because of this we store data in the backend

    const setData = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setInpValue((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    // Now when user clicks on input bar entered value become the current value of "inpValue"
    // Then we update the "setInpValue" with the help of "inpValue"
    // Let's take a look in above code we use a spread operator

    return (
        <div className='user-data-input'>
            <div className="form">
                <form action="input-data">
                    <input onChange={setData} value={inpValue.name} type="text" name='name' placeholder='User Name' className='form-control' />
                    <input onChange={setData} value={inpValue.email} type="email" name='email' placeholder='Email' className='form-control' />
                    <input onChange={setData} value={inpValue.job} type="text" name='job' placeholder='Job' className='form-control' />
                    <input onChange={setData} value={inpValue.mobile} type="number" name='mobile' placeholder='Mobile No' className='form-control' />
                    <input onChange={setData} value={inpValue.age} type="number" name='age' placeholder='Age' className='form-control' />
                    <textarea onChange={setData} value={inpValue.description} name="description" id="" cols="30" rows="6" className='form-control' placeholder='Write Here'></textarea>
                </form>
            </div>
        </div>
    )
}

export default UserDataInput;