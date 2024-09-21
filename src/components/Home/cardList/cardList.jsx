import react from 'react'
import CustomCard from "../../Home/card/Card";
import { Grid } from '@mui/material';
import image1 from '../../../images/GettyImages-1301412050.webp';
import image2 from '../../../images/unnamed.png';
import Alert from '@mui/material/Alert';


const CardList = () => {
    return <div className='quote category-card'>
    <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={12}>
            <Alert severity="info">Gitmek istediğiniz kısıma aşağıdan erişebilirsiniz.</Alert>
        </Grid>
        <Grid item xs={12} sm={3}>
            <CustomCard src={image1} alt={"Category"} title={"Foods"} description={"Foods are so good"} buttonText={"Details"} buttonColor={"success"} />
        </Grid>
        <Grid item xs={12} sm={3}>
            <CustomCard src={image2} alt={"Category"} title={"Foods"} description={"Foods are so good"} buttonText={"Details"} buttonColor={"success"} />
        </Grid>
        <Grid item xs={12} sm={3}>
            <CustomCard src={image1} alt={"Category"} title={"Foods"} description={"Foods are so good"} buttonText={"Details"} buttonColor={"success"} />
        </Grid>
        <Grid item xs={12} sm={3}>
            <CustomCard src={image2} alt={"Category"} title={"Foods"} description={"Foods are so good"} buttonText={"Details"} buttonColor={"success"} />
        </Grid>
    </Grid>        
   </div>


}


export default CardList;