import React from "react";
import { Grid, Button, Typography } from '@mui/material';
import { currentUsername, isAuthenticated } from "../../../services/authService";

const Quote = () => {
    return (
        <div className='quote'>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={9}>
                    <Typography variant="h6" fontFamily={"monospace"} fontSize={25}>Eğer bu sayfadaysanız bazı şeyler değişecek demektir...</Typography>
                </Grid>
                {isAuthenticated() === false ? <Grid item xs={12} sm={3}>
                    <Button color='success' variant='contained' style={{ width: '48%', marginRight: '5px', height: '50px' }} >Giriş Yap</Button>
                    <Button color='info' variant='contained' style={{ width: '48%', height: '50px' }} >Kayıt Ol</Button>
                </Grid> : <Grid item xs={12} sm={3}>
                    <Typography variant="h6" fontFamily={"monospace"} fontSize={25}>Merhaba {currentUsername()}</Typography>
                </Grid>}
            </Grid>
        </div>
    )
}
export default Quote;