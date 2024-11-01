import React from 'react'
import { Button, Dialog, DialogContent, DialogTitle, DialogActions, Typography, Grid, Paper } from '@mui/material'
import CalorieBasketTable from './CalorieBasketTable';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { getBasket } from '../../../services/basketService';
import { currentUserId } from '../../../services/authService';


const CalorieBasketDialog = ({ open, onClose }) => {
  const [data, setData] = React.useState(null);
  const [basket, setBasket] = React.useState({ createdDate: new Date(), id: "", nutrients: [], totalCalorie: 0, totalCarb: 0, totalCholesterol: 0, totalFat: 0, totalMagnesium: 0, totalProtein: 0, totalSalt: 0, totalSodium: 0, totalSugar: 0, updatedDate: new Date(), userId: "" });
  const [userProperties, setUserProperties] = React.useState({ weight: 0, height: 0, fatRate: 0, suggestedFatRate: 0, suggestedWeight: 0, dailyCalories: 0, fatBurnCalories: 0, weightGainCalories: 0, maintenanceCalories: 0, activity: {}, bodyDecision: 0, neededProtein: 0, neededCarbohydrate: 0, neededFat: 0, userId: "" });
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await getBasket(currentUserId());
      setBasket(response.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Dialog open={open} onClose={onClose} maxWidth={'xl'} fullWidth>
        <DialogTitle>
          Günlük Kalori Miktarınızı Görebilirsiniz.
        </DialogTitle>
        <DialogContent>
          <CalorieBasketTable nutrients={basket.nutrients} />
          <br />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper style={{ padding: 16, textAlign: 'center' }}>
                <div>
                  <Typography fontSize={'0.8em'}>Toplam Kalori : {basket.totalCalorie} </Typography>
                  <Typography fontSize={'0.8em'}>Toplam Karbonhidrat : {basket.totalCarb} </Typography>
                  <Typography fontSize={'0.8em'}>Toplam Yağ : {basket.totalFat} </Typography>
                  <Typography fontSize={'0.8em'}>Toplam Protein : {basket.totalProtein} </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={{ padding: 16, textAlign: 'center' }}>
                <div>
                  <Typography fontSize={'0.8em'}>Alınması Gereken Kalori : </Typography>
                  <Typography fontSize={'0.8em'}>Alınması Gereken Karbonhidrat : </Typography>
                  <Typography fontSize={'0.8em'}>Alınması Gereken Yağ : </Typography>
                  <Typography fontSize={'0.8em'}>Alınması Gereken Protein : </Typography>
                </div></Paper>
            </Grid>
          </Grid>

          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" style={{ marginTop: '20px' }}>
            Kaydettikten sonra ilgili alanlar güncellenecektir :)
          </Alert>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color='success' autoFocus>
            Kaydet
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default CalorieBasketDialog;
