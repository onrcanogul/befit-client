import React from 'react'
import NutrientFilter from '../../components/nutrients/filter';
import CardNutrients from '../../components/nutrients/cardNutrients';
import { Grid } from '@mui/material';
import { Alert } from '@mui/material';
import { getNutrients } from '../../services/nutrientService';
const Nutrients = () => {

    const [nutrients, setNutrients] = React.useState([]);
    React.useEffect(() => {
        const fetchData = async () => {
            const nutrients = await getNutrients(1, 50);
            setNutrients(nutrients.data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <NutrientFilter selectLabel={'Category'} textLabel={'Nutrient'} />
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} sm={12} margin={2}>
                    <Alert severity="info">Özelliklerini kıyaslamak istediğiniz ürünleri aşağıdan görebilirsiniz, günlük kalorinizle karşılaştırmak istiyorsanız, detay butonuna basıp günlük kalorilere ekle butonuna basınız.</Alert>
                </Grid>
            </Grid>
            {/* iterate array */}
            <Grid container spacing={2} alignItems="center" justifyContent={'center'}>
                {nutrients.map((n, index) => {
                    console.log(n);
                    return <CardNutrients name={n.name} description={n.description} />
                })}
            </Grid>
        </div>
    )


}


export default Nutrients;