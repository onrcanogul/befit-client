import react from 'react'
import CustomCard from "../../Home/card/Card";
import { Grid } from '@mui/material';
import image1 from '../../../images/GettyImages-1301412050.webp';
import image3 from '../../../images/indir.png'
import profileImage from '../../../images/profile.png'

import Alert from '@mui/material/Alert';


const CardList = () => {
    return <div className='quote category-card'>
    <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={12}>
            <Alert severity="info">Gitmek istediğiniz kısıma aşağıdan erişebilirsiniz.</Alert>
        </Grid>
        <Grid item xs={12} sm={3}>
            <CustomCard src={image1} alt={"Category"} title={"Nutrients"} description={"You can check nutrients"} buttonText={"Details"} buttonColor={"success"} />
        </Grid>
        <Grid item xs={12} sm={3}>
            <CustomCard src={image1} alt={"Category"} title={"Daily Nutrients"} description={"Your can check your daily metrics"} buttonText={"Details"} buttonColor={"success"} />
        </Grid>
        <Grid item xs={12} sm={3}>
            <CustomCard src={image3} alt={"Category"} title={"Blog"} description={"You can check categories"} buttonText={"Details"} buttonColor={"success"} />
        </Grid>
        <Grid item xs={12} sm={3}>
            <CustomCard src={profileImage} alt={"Category"} title={"Profile"} description={"You can check your profile"} buttonText={"Details"} buttonColor={"success"} />
        </Grid>
    </Grid>        
   </div>


}


export default CardList;