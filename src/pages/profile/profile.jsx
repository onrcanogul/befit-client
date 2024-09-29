import react from 'react'
import { Avatar } from '@mui/material';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const Profile = () => {
    return(
        <>
        <div className='quote' style={{flexDirection:'column', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Grid container>
                <Grid item xs={12} s={4} md={4}>
                <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: '10em', height:'6em'  }}
                />
                </Grid>
                <Grid item xs={12} s={4} md={4} style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                        <Typography variant='h6' fontFamily={'monospace'} color='success'>Onurcan Oğul</Typography>
                        <br />
                        <Link style={{textDecoration:'none', color:'black', fontFamily:'monospace'}}>Takipçi Sayısı : 300</Link> <br />
                        <Link style={{textDecoration:'none', color:'black',fontFamily:'monospace'}}>Takip Edilen Sayısı : 300</Link>
                </Grid>
                <Grid item xs={12} s={4} md={4} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <Button color='success' variant='contained' style={{width:'40%', marginBottom:'5px'}}>Düzenle</Button>
                    <Button color='success' variant='outlined' style={{width:'40%'}}>Arkadaş Ekle</Button>
                </Grid>
            </Grid>


                
                
        </div>
        </>
    )
}


export default Profile;