import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import ChampSelectionList from '../components/ChampSelectionList';
import SelectionChampCard from '../components/SelectionChampCard';
import { SCCProps } from '../components/ComponentProps';
import { Champion } from '../components/Interfaces';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Draft() {

  const championsMap = new Map<String, Champion>();
  championsMap.set('Ahri', {name: 'Ahri', image: 'image'});
  championsMap.set('Vi', {name: 'Vi', image: 'image'});
  championsMap.set('Darius', {name: 'Darius', image: 'image'});
  championsMap.set('Caitlyn', {name: 'Caitlyn', image: 'image'});
  championsMap.set('Leona', {name: 'Leona', image: 'image'});
  championsMap.set('Volibear', {name: 'Volibear', image: 'image'});
  championsMap.set('Lee Sin', {name: 'Lee Sin', image: 'image'});
  championsMap.set('Twisted Fate', {name: 'Twisted Fate', image: 'image'});
  championsMap.set('Smolder', {name: 'Smolder', image: 'image'});
  championsMap.set('Karma', {name: 'Karma', image: 'image'});


  const leftPropsArray: Array<SCCProps> = [
    {
      textSide: 'left',
      playerName: 'Kirito',
      champion: {name: 'Darius', image: 'image'},
      picked: true
    },
    {
      textSide: 'left',
      playerName: 'Kirito',
      champion: {name: 'Darius', image: 'image'},
      picked: false
    },
    {
      textSide: 'left',
      playerName: 'Kirito',
      champion: {name: 'Darius', image: 'image'},
      picked: false
    },
    {
      textSide: 'left',
      playerName: 'Kirito',
      champion: {name: 'Darius', image: 'image'},
      picked: false
    },
    {
      textSide: 'left',
      playerName: 'Kirito',
      champion: {name: 'Darius', image: 'image'},
      picked: false
    },
  ];

  const rightPropsArray: Array<SCCProps> = [
    {
      textSide: 'right',
      playerName: 'Kirito',
      champion: {name: 'Darius', image: 'image'},
      picked: true
    },
    {
      textSide: 'right',
      playerName: 'Kirito',
      champion: {name: 'Darius', image: 'image'},
      picked: false
    },
    {
      textSide: 'right',
      playerName: 'Kirito',
      champion: {name: 'Darius', image: 'image'},
      picked: false
    },
    {
      textSide: 'right',
      playerName: 'Kirito',
      champion: {name: 'Darius', image: 'image'},
      picked: false
    },
    {
      textSide: 'right',
      playerName: 'Kirito',
      champion: {name: 'Darius', image: 'image'},
      picked: false
    }
  ]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={3}>  
          <Grid container spacing={2}>

            {leftPropsArray.map((element, i) => 
            <Grid>
            <SelectionChampCard {...element}/>
            </Grid>
            )}
        </Grid>
        </Grid>
        <Grid xs={6}>
           <Grid container display="flex" justifyContent="center" alignItems="center">
            Timer: 30s
            </Grid>
            <Grid container display="flex" justifyContent="center" alignItems="center">
          <ChampSelectionList/>
          </Grid>
        </Grid>
        <Grid xs={3}>  
          <Grid container spacing={2}>
          {rightPropsArray.map((element, i) => 
            <Grid>
            <SelectionChampCard {...element}/>
            </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
