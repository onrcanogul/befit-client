import React from 'react'
import { Button, Dialog, DialogContent, DialogTitle, DialogActions, Typography, Grid, Paper } from '@mui/material'
import CalorieBasketTable from './CalorieBasketTable';
import Alert from '@mui/material/Alert';
import { getBasket, saveBasket } from '../../../services/basketService';
import { currentUserId } from '../../../services/authService';
import { removeBasketItem } from '../../../services/basketItemService';
import InfoIcon from '@mui/icons-material/Info';


const CalorieBasketDialog = ({ open, onClose }) => {
  const [basket, setBasket] = React.useState({});
  const [nutrients, setNutrients] = React.useState([]);



  React.useEffect(() => {
    const fetchData = async () => {
      debugger;
      const response = await getBasket(currentUserId());
      setBasket(response.data);
      setNutrients(response.data.nutrients);
    };
    if (open) {
      fetchData();
    }
  }, [open]);


  const remove = async (id) => {
    const response = await removeBasketItem(id);
    if (response.isSuccessful)
      setBasket((await getBasket(currentUserId())).data)
    return response;
  }

  const save = async () => {
    const response = await saveBasket(basket.id, nutrients);
    setBasket(response.data);
    setNutrients(response.data.nutrients);
    console.log(response.data);
  }

  return (
    <div>
      <Dialog open={open} onClose={onClose} maxWidth={'xl'} fullWidth>
        <DialogTitle>
          Günlük Kalori Miktarınızı Görebilirsiniz.
        </DialogTitle>
        <DialogContent>
          <CalorieBasketTable nutrients={nutrients} setNutrients={setNutrients} remove={remove} />
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


          <Alert icon={<InfoIcon fontSize="inherit" />} severity="info" style={{ marginTop: '20px' }}>
            Values ​​are valid for recorded measurements. After saving, the relevant fields will be updated :)
          </Alert>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color='success' autoFocus onClick={save}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default CalorieBasketDialog;
