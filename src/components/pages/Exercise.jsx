import React from 'react'
import BarView from '../Graphical/BarView';
import PieView from '../Graphical/PieView';
import { randomColorArray } from '../Graphical/RandomColor';
import { Box, Button, IconButton, useTheme } from "@mui/material";
import { useState } from 'react';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import MultibarView from '../Graphical/MultibarView';
import MultilineView from '../Graphical/MultilineView';
import { burnedFromEx, frequentEx, topEx } from '../../Data/exercise';
import { tokens } from '../../theme';


const Exercise = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(theme.palette.mode);
  const [type, setType] = useState('Weekly');
  const graphColor = mode === 'dark' ? 'light' : 'dark';

  const getButton = (T) => {
    if (T === type) {
      return <Button variant="contained" disabled onClick={() => setType(T)} style={{
        backgroundColor: mode === 'dark' ? '#aaa' : 'gray',
        color: mode === 'dark' ? 'black' : 'white',
        fontWeight: 'bold'
      }}>{T}</Button>
    }
    else {
      return <Button variant="contained" onClick={() => setType(T)} style={{
        backgroundColor: mode === 'dark' ? 'white' : 'black',
        color: mode === 'dark' ? 'black' : 'white',
        fontWeight: 'bold'
      }}>{T}</Button>
    }
  }

  return (
    <div>
      <Box boxShadow={'1px 1px 5px gray'} padding={'2px'} borderRadius={'10px'}>
        <Box display={'flex'} justifyContent={'space-around'} padding={'3px'} borderRadius={'10px'}>
          {getButton('Weekly')}
          {getButton('Monthly')}
          {getButton('Custom')}
        </Box>
        {type === 'Custom' ?
          <Box display={'flex'} justifyContent={'space-around'} padding={'2px'} overflow={'revert-layer'}>
            <div><label for="from">Start:</label><input type="date" id="from" /></div>
            <div><label for="to">End:</label> <input type="date" id="to" /></div>
            <div>
              <IconButton onClick={() => { }} style={{
                backgroundColor: mode === 'dark' ? 'white' : 'black',
                color: mode === 'dark' ? 'black' : 'white'
              }}><PublishedWithChangesOutlinedIcon /></IconButton>
            </div>
          </Box>
          :
          <Box display={'flex'} justifyContent={'space-around'} padding={'2px'}>
            <div>
              <Button
                variant="outlined" onClick={() => { }} style={{
                  borderColor: mode === 'dark' ? 'white' : 'black',
                  color: mode !== 'dark' ? 'black' : 'white'
                }}>Previous
              </Button>
            </div>
            <div>
              <Button
                variant="outlined" onClick={() => { }} style={{
                  borderColor: mode === 'dark' ? 'white' : 'black',
                  color: mode !== 'dark' ? 'black' : 'white'
                }}>Nexy
              </Button>
            </div>
          </Box>
        }
      </Box>
      <br />
      <div  style={{margin: '10px', backgroundColor: colors.grey[900], textAlign: 'center', borderRadius: '5px'}}><h2>Overall exercise stats</h2></div>
      <div className='graphs-container'>
        <BarView title={'Burned from exercise'} data={burnedFromEx} colors={randomColorArray(burnedFromEx.length, graphColor)} description={type + ' view of your daily intake calories. Each block of the graph shows amount of calories you ate a day.'} />
        <PieView title={'Burned from exercise'} data={burnedFromEx} colors={randomColorArray(burnedFromEx.length, graphColor)} size={10} description={type + ' view of your daily intake calories. Each block of the graph shows amount of calories you ate a day.'} />
        <BarView title={'Most frequent workouts'} data={frequentEx} colors={randomColorArray(frequentEx.length, graphColor)} description={type+' view of foods that you ate most in ascending order'} />
      </div>
      <div  style={{margin: '10px', backgroundColor: colors.grey[900], textAlign: 'center', borderRadius: '5px'}}><h2>Top exercise statistics</h2></div>
      <div className='graphs-container'>
        <BarView title={topEx.parameter1.title} data={topEx.parameter1.data} colors={randomColorArray(topEx.parameter1.data.length, graphColor)} description={type + ' view of your daily intake calories. Each block of the graph shows amount of calories you ate a day.'} />
        <PieView title={topEx.parameter2.title} data={topEx.parameter2.data} colors={randomColorArray(topEx.parameter2.data.length, graphColor)} size={10} description={type + ' view of your daily intake calories. Each block of the graph shows amount of calories you ate a day.'} />
        <MultilineView title={topEx.parameter3.title} data={topEx.parameter3.data} key1={'calories'} colors={randomColorArray(topEx.parameter3.data.length, graphColor)} description={type + ' view of your daily intake calories from carbohydrate, protein and fat. Each block of the graph shows 3 bars presenting 3 different amount of nutritions you ate a day.'} />
      </div>
    </div>
  )
}

export default Exercise;