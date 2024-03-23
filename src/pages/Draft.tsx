import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import ChampSelectionList from '../components/ChampSelectionList';
import SelectionChampCard from '../components/SelectionChampCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Draft() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={3}>  
          <Grid container spacing={2}>
          <Grid>
            <SelectionChampCard textSide='right'/>
            </Grid><Grid>
            <SelectionChampCard textSide='right'/>
            </Grid><Grid>
            <SelectionChampCard textSide='right'/>
            </Grid><Grid>
            <SelectionChampCard textSide='right'/>
            </Grid><Grid>
            <SelectionChampCard textSide='right'/>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={6} display="flex" justifyContent="center" alignItems="center">
          <ChampSelectionList/>
        </Grid>
        <Grid xs={3}>  
          <Grid container spacing={2}>
          <Grid>
            <SelectionChampCard textSide='left'/>
            </Grid><Grid>
            <SelectionChampCard textSide='left'/>
            </Grid><Grid>
            <SelectionChampCard textSide='left'/>
            </Grid><Grid>
            <SelectionChampCard textSide='left'/>
            </Grid><Grid>
            <SelectionChampCard textSide='left'/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
