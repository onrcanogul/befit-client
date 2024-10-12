import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import {Login} from './login';
import {Register} from './register';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
export const Auth = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Tabs value={value} color={"success"} onChange={handleChange}>
                <Tab label="Login" icon={<LoginIcon />} color={"success"} />
                <Tab label="Register" icon={<HowToRegIcon />} color={"success"} />
            </Tabs>
            {value === 0 && <Login />}
            {value === 1 && <Register />}
        </div>
    );
}