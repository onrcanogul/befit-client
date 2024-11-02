import * as React from 'react';
import { Dialog, Button, DialogTitle, DialogContent, Grid, List, ListItem, Typography, DialogActions, TextField, InputAdornment } from '@mui/material';
import { addBasketItem } from '../../../services/basketItemService';
import { currentUserId } from '../../../services/authService';
import { toast } from 'material-react-toastify';


const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOCLu7pWFq6Yh4Mk70QKP6-7MfHpWerVgWw&s"

export default function NutrientDetails({ open, onClose, nutrient }) {
    const [grammage, setGrammage] = React.useState(null);
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
        onClose();
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
                                    style={{ width: '100%', height: '300px', borderRadius: '10px' }}
                                />
                            </ListItem>
                            <ListItem style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <input
                                    id="outlined-start-adornment"
                                    style={{
                                        margin: '8px',
                                        width: '15ch',
                                        padding: '10px',
                                        border: '2px solid #ccc',
                                        borderRadius: '4px',
                                        fontSize: '16px',
                                        color: '#333',
                                        outline: 'none',
                                        transition: 'border-color 0.3s, box-shadow 0.3s',
                                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                                    }}
                                    placeholder='Grammage'
                                    value={grammage}
                                    color='success'
                                    onChange={(e) => setGrammage(e.target.value)}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = '#aaa';
                                        e.target.style.boxShadow = '0 0 5px rgba(170, 170, 170, 0.5)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = '#ccc';
                                        e.target.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
                                    }}
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
                <Button variant='outlined' style={{ alignContent: 'end' }} color='error' autoFocus onClick={() => onClose()}>
                    Close
                </Button>
                <Button variant='contained' color='success' autoFocus onClick={handleAddToDailyClick}>
                    Add To Basket
                </Button>

            </DialogActions>
        </Dialog>
    );
}

