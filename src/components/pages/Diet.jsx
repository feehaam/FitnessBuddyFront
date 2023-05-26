import React from 'react'
import BarView from '../Graphical/BarView';
import PieView from '../Graphical/PieView';
import { randomColorArray } from '../Graphical/RandomColor';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from '../../theme';
import { useState } from 'react';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import { weeklyJson, water } from '../../Data/diet1';

const Diet = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mode = theme.palette.mode;
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
      <div className='graphs-container'>
        <PieView title={'Calories burned from diet'} data={weeklyJson} colors={randomColorArray(weeklyJson.length, graphColor)} size={10} description={type + ' view of your daily intake calories. Each block of the graph shows amount of calories you ate a day.'} />
        <PieView title={'Calories burned from diet'} data={weeklyJson} colors={randomColorArray(weeklyJson.length, graphColor)} size={10} description={type + ' view of your daily intake calories. Each block of the graph shows amount of calories you ate a day.'} />
        <PieView title={'Calories burned from diet'} data={weeklyJson} colors={randomColorArray(weeklyJson.length, graphColor)} size={10} description={type + ' view of your daily intake calories. Each block of the graph shows amount of calories you ate a day.'} />
        <PieView title={'Calories burned from diet'} data={weeklyJson} colors={randomColorArray(weeklyJson.length, graphColor)} size={10} description={type + ' view of your daily intake calories. Each block of the graph shows amount of calories you ate a day.'} />
        <PieView title={'Calories burned from diet'} data={weeklyJson} colors={randomColorArray(weeklyJson.length, graphColor)} size={10} description={type + ' view of your daily intake calories. Each block of the graph shows amount of calories you ate a day.'} />
        <PieView title={'Calories burned from diet'} data={weeklyJson} colors={randomColorArray(weeklyJson.length, graphColor)} size={10} description={type + ' view of your daily intake calories. Each block of the graph shows amount of calories you ate a day.'} />
      </div>
    </div>
  )
}

export default Diet