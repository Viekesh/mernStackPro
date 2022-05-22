import React from 'react';
import './UserDataOutput.css';

const UserDataOutput = () => {
    return (
        <div className='user-data-output'>
            <div className="user-data">
                <table className="table">
                    <thead className="thead">
                        <tr>
                            <th>ID</th>
                            <th>User Name</th>
                            <th>E-Mail</th>
                            <th>Job</th>
                            <th>Mobile No.</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>01</th>
                            <td>abc</td>
                            <td>abc@def.com</td>
                            <td>atoz</td>
                            <td>0123456789</td>
                            <td className='x-axis-center rud-btn'>
                                <button className='crud-btn'>Read</button>
                                <button className='crud-btn'>Update</button>
                                <button className='crud-btn'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserDataOutput;