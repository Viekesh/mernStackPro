import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className='navigation'>
            <nav className="nav y-axis-center">
                <div className="landing-page-link">
                    <NavLink to='/'><h5>Home</h5></NavLink>
                </div>
                <div className="input-search">
                    <input type="text" className='search' />
                    <NavLink to='/'>
                        <button type='button' className='button search-btn'>Search</button>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navigation; 