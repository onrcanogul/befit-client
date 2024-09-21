import React from "react";
import CustomCard from '../../components/Home/card/Card';
import image from '../../images/GettyImages-1301412050.webp'
import { Grid } from '@mui/material';
import { Alert } from '@mui/material';

const CardNutrients = () => {
    return <Grid container spacing={2} alignItems="center" justifyContent={'center'}>
        
    <Grid item xs={12} sm={2} margin={2}>
        <CustomCard src={image}
            buttonText={"Detail"}
            buttonColor={"success"}
            title={"Fish"}
            description={"Super burger to eat"} 
            />
    </Grid>
    <Grid item xs={12} sm={2} margin={2}>
        <CustomCard src={image}
            buttonText={"Detail"}
            buttonColor={"success"}
            title={"Fish"}
            description={"Super burger to eat"} />
    </Grid>
    <Grid item xs={12} sm={2} margin={2}>
        <CustomCard src={image}
            buttonText={"Detail"}
            buttonColor={"success"}
            title={"Fish"}
            description={"Super burger to eat"} />
    </Grid>
    <Grid item xs={12} sm={2} margin={2}>
        <CustomCard src={image}
            buttonText={"Detail"}
            buttonColor={"success"}
            title={"Fish"}
            description={"Super burger to eat"} />
    </Grid>
    <Grid item xs={12} sm={2} margin={2}>
        <CustomCard src={image}
            buttonText={"Detail"}
            buttonColor={"success"}
            title={"Fish"}
            description={"Super burger to eat"} />
    </Grid>
    <Grid item xs={12} sm={2} margin={2}>
        <CustomCard src={image}
            buttonText={"Detail"}
            buttonColor={"success"}
            title={"Fish"}
            description={"Super burger to eat"} />
    </Grid>
    
</Grid>

}


export default CardNutrients;