import React from 'react'
import NutrientFilter from '../../components/nutrients/filter';
import CardNutrients from '../../components/nutrients/cardNutrients';
import { Grid } from '@mui/material';
import { Alert } from '@mui/material';
const Nutrients = () => {
    // var nutrients an array
    return (
        <div>
            <NutrientFilter selectLabel={'Category'} textLabel={'Nutrient'} />
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} sm={12} margin={2}>
                    <Alert severity="info">Özelliklerini kıyaslamak istediğiniz ürünleri aşağıdan görebilirsiniz, günlük kalorinizle karşılaştırmak istiyorsanız, detay butonuna basıp günlük kalorilere ekle butonuna basınız.</Alert>
                </Grid>
            </Grid>
            {/* iterate array */}
            <CardNutrients />

        </div>
    )


}


export default Nutrients;