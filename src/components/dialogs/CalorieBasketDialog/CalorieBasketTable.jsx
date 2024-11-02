import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import $ from "jquery";

export default function DenseTable({ nutrients, remove, setNutrients }) {
  const handleRemove = async (id) => {
    const response = await remove(id);
    if (response.isSuccessful) {
      $(`#${id}`).fadeOut(500, async () => {
      });
    }
  }

  const handleMeasureChange = (id, newMeasure) => {
    setNutrients(prevNutrients =>
      prevNutrients.map(nutrient =>
        nutrient.id === id ? { ...nutrient, measure: newMeasure } : nutrient
      )
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right"></TableCell>
            <TableCell>Nutrient</TableCell>
            <TableCell align="right">Grammage</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {nutrients?.length > 0 ? nutrients.map((row) => (
            <TableRow
              id={row.id}
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center'><DeleteIcon style={{ cursor: 'pointer' }} color='error' onClick={() => handleRemove(row.id)}></DeleteIcon></TableCell>
              <TableCell component="th" scope="row">
                {row.nutrient.name}
              </TableCell>
              <TableCell align="right"><input style={{ textAlign: 'center', width: '50%' }} type="number" value={row.measure} onChange={(e) => handleMeasureChange(row.id, e.target.value)} /></TableCell>
              <TableCell align="right">{row.nutrient.properties.calories}gr</TableCell>
              <TableCell align="right">{row.nutrient.properties.fat}</TableCell>
              <TableCell align="right">{row.nutrient.properties.carbohydrate}</TableCell>
              <TableCell align="right">{row.nutrient.properties.protein}</TableCell>
            </TableRow>
          )) : ""}
        </TableBody>
      </Table>
    </TableContainer>
  );
}