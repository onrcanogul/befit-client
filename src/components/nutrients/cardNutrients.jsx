import React, { useEffect, useState } from "react";
import CustomCard from '../../components/Home/card/Card';
import image from '../../images/GettyImages-1301412050.webp'
import { Grid } from '@mui/material';
const CardNutrients = ({ name, description, nutrient }) => {
    return <Grid item xs={12} sm={2} margin={2}>
        <CustomCard src={image}
            buttonText={"Detail"}
            buttonColor={"success"}
            title={name}
            description={description}
            openModal={true}
            nutrient={nutrient}
        />
    </Grid>

}


export default CardNutrients;