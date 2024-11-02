import React from 'react'
import { Button, Dialog, DialogContent, DialogTitle, DialogActions, Typography, Grid, Paper } from '@mui/material'
import CalorieBasketTable from './CalorieBasketTable';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { getBasket } from '../../../services/basketService';
import { currentUserId } from '../../../services/authService';


const CalorieBasketDialog = ({ open, onClose }) => {
  const [basket, setBasket] = React.useState({});
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await getBasket(currentUserId());
      console.log(response);
      setBasket(response.data);
    };
    if (open) {
      fetchData();
    }
  }, [open]);
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
