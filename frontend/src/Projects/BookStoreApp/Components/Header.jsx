import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [value, setValue] = useState();

    return (
        <div className='header'>
            <AppBar position='sticky' sx={{ backgroundColor: 'red' }}>
                <Toolbar>
                    <Typography>
                        <LibraryBooksIcon />
                    </Typography>
                    <Tabs
                        sx={{ ml: 'auto' }}
                        textColor='inherit'
                        indicatorColor='primary'
                        value={value}
                        onChange={(event, value) => setValue(value)}>
                        <Tab LinkComponent={NavLink} to="/AddBook" label="Add Product" />
                        <Tab LinkComponent={NavLink} to="/BooksContainer" label="Books" />
                        <Tab LinkComponent={NavLink} to="/About" label="About Us" />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;