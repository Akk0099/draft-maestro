import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function SelectionChampCard({textSide = ''}) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
        {textSide == 'left' ?   <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div">
            Player 1
          </Typography>
          <Typography component="div" variant="h5">
            Picking...
          </Typography>
        </CardContent>
      </Box> : null}
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        alt="Live from space album cover"
      />  
      {textSide == 'right' ?   <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div">
            Player 1
          </Typography>
          <Typography component="div" variant="h5">
            Picking...
          </Typography>
        </CardContent>
      </Box> : null}
    </Card>
  );
}