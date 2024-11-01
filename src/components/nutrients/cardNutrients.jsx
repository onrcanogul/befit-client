import React, { useEffect, useState } from "react";
import CustomCard from '../../components/Home/card/Card';
import image from '../../images/GettyImages-1301412050.webp'
import { Grid } from '@mui/material';
import NutrientDetailsDialog from '../dialogs/NutrientDetailsDialog/NutrientDetailsDialog'
const CardNutrients = ({ name, description }) => {
    return <Grid item xs={12} sm={2} margin={2}>
        <CustomCard src={image}
            buttonText={"Detail"}
            buttonColor={"success"}
            title={name}
            description={description}
            openModal={true}
        />

    </Grid>

}


export default CardNutrients;