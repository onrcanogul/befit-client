import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useNavigate } from 'react-router-dom';
import CalorieBasketDialog from '../../dialogs/CalorieBasketDialog/CalorieBasketDialog';
import NutrientDetailsDialog from '../../dialogs/NutrientDetailsDialog/NutrientDetailsDialog'

const CustomCard = ({ src, alt, title, description, buttonColor, buttonText, link, openModal }) => {
  const navigate = useNavigate();
  const [openDetails, setOpenDetails] = React.useState(false)

  return (
    <Card sx={{ width: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={src}
          alt={alt}
          sx={{ objectFit: 'cover', height: "20em" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={openModal ? () => setOpenDetails(true) : () => navigate(link)} size="small" variant='outlined' color={buttonColor}>
          {buttonText}
        </Button>
      </CardActions>
      <NutrientDetailsDialog open={openDetails} onClose={() => setOpenDetails(false)} />
    </Card>
  );
}

export default CustomCard;