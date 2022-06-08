import React from 'react';
import "./Header.css";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const Header = () => {
    return (
        <AppBar
            position='sticky'
            sx={{ background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)' }
            }
        >
            <Toolbar>
                <Typography variant='h4'>header</Typography>

                <Box display='flex'></Box>

                <Box display='flex' marginLeft='auto'>
                    <Button color='warning' sx={{ margin: 1, borderRadius: 10 }} variant='contained'>Login</Button>
                    <Button color='warning' sx={{ margin: 1, borderRadius: 10 }} variant='contained'>SignUp</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;



// In the material ui it has a AppBar it acts like a nav tag in the html.