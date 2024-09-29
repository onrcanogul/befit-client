import React from 'react'
import { Button, Dialog, DialogContent, DialogTitle, DialogActions } from '@mui/material'
import CalorieBasketTable from '../CalorieBasketTable';

const CalorieBasketDialog = ({open, onClose}) => {
  return (
    <div>
      <Dialog open={open} onClose={onClose} maxWidth={'xl'} fullWidth>
        <DialogTitle>
          Günlük Kalori Miktarınızı Görebilirsiniz.
        </DialogTitle>
        <DialogContent>
          <CalorieBasketTable />
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
