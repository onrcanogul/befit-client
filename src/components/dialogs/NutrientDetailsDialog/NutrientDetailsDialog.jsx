import * as React from 'react';
import { Button } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, Grid, List, ListItem, Typography, DialogActions } from '@mui/material';
import { addBasketItem } from '../../../services/basketItemService';
import { currentUserId } from '../../../services/authService';
import { toast } from 'material-react-toastify';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export default function NutrientDetails({ open, onClose, nutrient }) {
    const [grammage, setGrammage] = React.useState(0);
    const image = 'asd';
    const handleAddToDailyClick = async () => {
        if (grammage <= 0) {
            toast.error("Grammage should have greater than 0")
            return null;
        }
        const response = await addBasketItem(nutrient.id, currentUserId(), grammage);
        if (response.isSuccessful) {
            onClose();
        }
    }
    const handleClose = () => {
        setGrammage(0);
        handleClose();
    };
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="md"
            PaperProps={{
                style: {
                    padding: '20px',
                    borderRadius: '15px',
                    backgroundColor: '#f5f5f5',  // Açık gri arka plan
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Hafif gölge
                    width: '100%'
                },
            }}
        >
            <DialogTitle style={{
                fontSize: '1.5em',
                fontWeight: 'bold',
                color: '#333',
                borderBottom: '1px solid #ddd',
                paddingBottom: '10px',
                textAlign: 'center',
            }}>
                Nutrient Details
            </DialogTitle>
            <DialogContent style={{
                padding: '0px',
                fontSize: '1.5em'
            }}>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={4} md={4} lg={6}>
                        <List sx={{ width: '100%' }}>
                            <ListItem disableGutters disablePadding>
                                <img
                                    src={image}
                                    alt="Nutrient"
                                    style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                                />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} lg={6}>
                        <List sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', gap: '10px' }}>
                            <ListItem disableGutters disablePadding>
                                <Typography fontSize={'0.8em'}>Name : {nutrient.name}</Typography>
                            </ListItem>
                            <ListItem disableGutters disablePadding>
                                <Typography fontSize={'0.8em'}>Category : Category</Typography>
                            </ListItem>
                            <ListItem disableGutters disablePadding>
                                <Typography fontSize={'0.8em'}>Calories : {nutrient.properties.calories}kcal/g</Typography>
                            </ListItem>
                            <ListItem disableGutters disablePadding>
                                <Typography fontSize={'0.8em'}>Description : {nutrient.description}</Typography>
                            </ListItem>
                            <ListItem disableGutters disablePadding>
                                <Typography fontSize={'0.8em'}>Carbohydrate : {nutrient.properties.carbohydrate100gr}10g</Typography>
                            </ListItem>
                            <ListItem disableGutters disablePadding>
                                <Typography fontSize={'0.8em'}>Protein : {nutrient.properties.protein100gr}20g</Typography>
                            </ListItem>
                            <ListItem disableGutters disablePadding>
                                <Typography fontSize={'0.8em'}>Fat : {nutrient.properties.fat100gr}g</Typography>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions>
                <TextField
                    label="Grammage"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '15ch' }}
                    value={grammage}
                    color='success'
                    onChange={(e) => setGrammage(e.target.value)}
                    slotProps={{
                        input: {
                            startAdornment: <InputAdornment position="start">g</InputAdornment>,
                        },
                    }}
                />
                <Button variant='contained' color='error' autoFocus onClick={() => onClose()}>
                    Close
                </Button>
                <Button variant='contained' color='success' autoFocus onClick={handleAddToDailyClick}>
                    Add To Daily Calorie
                </Button>
            </DialogActions>
        </Dialog>
    );
}

