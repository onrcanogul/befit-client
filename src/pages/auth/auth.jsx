import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { Login } from '../../components/auth/login';
import { Register } from '../../components/auth/register';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { isAuthenticated } from '../../services/authService';

export const Auth = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            {isAuthenticated() ? <><Tabs value={value} color={"success"} onChange={handleChange}>
                <Tab label="Login" icon={<LoginIcon />} color={"success"} />
                <Tab label="Register" icon={<HowToRegIcon />} color={"success"} />
            </Tabs>
                {value === 0 && <Login />}
                {value === 1 && <Register />} </> : <Typography>You already logged in</Typography>} //will be styling

        </div>
    );
}