import React from "react";
import { Grid, Button, Typography } from '@mui/material';

const Quote = () => {
    var isAuth = false;
    return(
        <div className='quote'>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={9}>
                    <Typography variant="h6" fontFamily={"monospace"} fontSize={25}>Eğer bu sayfadaysanız bazı şeyler değişecek demektir...</Typography>
                </Grid>
                {isAuth ? <Grid item xs={12} sm={3}>
                    <Button color='success' variant='contained' style={{ width: '48%', marginRight: '5px', height: '50px' }} >Giriş Yap</Button>
                    <Button color='info' variant='contained' style={{ width: '48%', height: '50px' }} >Kayıt Ol</Button>
                </Grid> : <Grid item xs={12} sm={3}>
                    <Typography variant="h6" fontFamily={"monospace"} fontSize={25}>Merhaba Onurcan Oğul</Typography>
                </Grid>}
            </Grid>
        </div>
    )   
}
export default Quote;