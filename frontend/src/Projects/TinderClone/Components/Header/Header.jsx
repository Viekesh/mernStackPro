import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ForumIcon from '@mui/icons-material/Forum';
import './Header.css';

const Header = () => {
    return (
        <header className='header y-axis-center'>
            <IconButton>
                <PersonIcon />
            </IconButton>

            <IconButton>
                <AutoAwesomeIcon />
            </IconButton>

            <IconButton>
                <ForumIcon />
            </IconButton>
        </header>
    )
}

export default Header;