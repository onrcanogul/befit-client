import React from 'react'
import { Grid, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
const NutrientFilter = ({textLabel, selectLabel}) => {
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        typeof value === 'string' ? value.split(',') : value,
      );
    };

  return <div className='quote' style={{ margin: '5px' }}>
    <Grid container spacing={2} alignItems={'center'}>
      <Grid item xs={12} sm={12} margin={2}>
        <Alert severity="success">Aşağıdan filtreleyerek besin aratabilirsiniz.</Alert>
      </Grid>
      <Grid item xs={4} sm={3} md={4}>
        <TextField
          label={textLabel}
          id="outlined"
          defaultValue="Small"
          color='success'
          style={{ width: '100%' }}
        />
      </Grid>
      <Grid item xs={4} sm={2} md={4}>
        <FormControl sx={{ m: 1, width: '100%' }}>
          <InputLabel id="demo-multiple-checkbox-label" color='success' style={{ width: '100%' }}>{selectLabel}</InputLabel>
          <Select
            label={selectLabel}
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label={selectLabel} />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
            color='success'
            style={{ width: '100%' }}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.includes(name)} color='success' />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2} s={6} md={4}>
        <Button color='success' variant='contained' style={{ width: '100%' }}>Filter</Button>
        <Button color='success' variant='outlined' style={{ width: '100%', marginTop: '5px' }}>Clear Filter</Button>
      </Grid>
    </Grid>
  </div>
}


export default NutrientFilter;