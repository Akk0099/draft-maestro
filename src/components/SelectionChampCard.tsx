import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { SCCProps } from "./ComponentProps";

export default function SelectionChampCard(props:SCCProps) {
  const theme = useTheme();
  const picking: String = 'Picking...';

  const box = 
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
  <CardContent sx={{ flex: '1 0 auto' }}>
    <Typography component="div">
      {props.playerName}
    </Typography>
    <Typography component="div" variant="h5">
      {props.picked ? props.champion.name : picking}
    </Typography>
  </CardContent>
</Box>

const cardMedia = 
<CardMedia
component="img"
sx={{ width: 151 }}
image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
alt="Live from space album cover"
/>

  return (
    <Card sx={{ display: 'flex' }}>
      {props.textSide == 'left' ? [box, cardMedia]: [cardMedia, box]}
    </Card>);
}