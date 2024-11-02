import React from 'react'
import NutrientFilter from '../../components/nutrients/filter';
import CardNutrients from '../../components/nutrients/cardNutrients';
import { Grid } from '@mui/material';
import { Alert } from '@mui/material';
import { getNutrients } from '../../services/nutrientService';
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from '@mui/material';

const Nutrients = () => {
    const [nutrients, setNutrients] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const nutrients = await getNutrients(1, 50);
                setNutrients(nutrients.data);
            } catch (error) {
                console.error("Veri alınırken hata oluştu:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            {loading && (
                <Backdrop
                    open={loading}
                    style={{ color: '#fff', zIndex: 1300 }}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            )}
            <NutrientFilter selectLabel={'Category'} textLabel={'Nutrient'} />
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} sm={12} margin={2}>
                    <Alert severity="info">Özelliklerini kıyaslamak istediğiniz ürünleri aşağıdan görebilirsiniz, günlük kalorinizle karşılaştırmak istiyorsanız, detay butonuna basıp günlük kalorilere ekle butonuna basınız.</Alert>
                </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center" justifyContent={'center'}>
                {nutrients.map((n, index) => {
                    console.log(n);
                    return <CardNutrients name={n.name} description={n.description} nutrient={n} />
                })}
            </Grid>
        </div>
    )


}


export default Nutrients;