import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getFoods } from '../../services/nutrientService';





export default function DenseTable() {

  const [data, setData] = React.useState(null);
  const [rows, setRows] = React.useState([
    { name: '', calories: 0, fat: 0, carbs: 0, protein: 0 }
  ]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        debugger;
        const data = await getFoods(1, 50);
        setData(data);

        const newRows = data.data.map(item =>
          createData(
            item.name,
            item.properties.calories,
            item.properties.fat,
            item.properties.carbohydrate,
            item.properties.protein
          )
        );

        setRows(newRows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
    }
    console.log(rows);
  }, []);









  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nutrient</TableCell>
            <TableCell align="right">Grammage</TableCell>
            <TableCell align="right">Calories&nbsp;(100g)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right"><input style={{ textAlign: 'center', width: '50%' }} type="number" /></TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}