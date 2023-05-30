import React from 'react'
import NeedlePieView from '../Graphical/NeedlePieView'
import MultilineView from '../Graphical/MultilineView'
import { daily, source } from '../../Data/total';
import { randomColorArray } from '../Graphical/RandomColor';
import { Box, Button, useTheme, IconButton } from "@mui/material";
import { useState } from 'react';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import TwowayBarView from '../Graphical/TwowayBarView';
import { tokens } from '../../theme';

const TotalStats = () => {
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
      <div style={{ margin: '10px', backgroundColor: colors.grey[900], textAlign: 'center', borderRadius: '5px' }}><h2>Weight analysis statistics</h2></div>
      <div className='graphs-container'>
        <NeedlePieView />
        <MultilineView title={'Calories from Diet(A) and Exercise(B)'} data={source} key1={'A'} key2={'B'} colors={randomColorArray(source.length, graphColor)} description={type + ' view of your daily intake calories from carbohydrate, protein and fat. Each block of the graph shows 3 bars presenting 3 different amount of nutritions you ate a day.'} />
        <TwowayBarView title={'Daily weight gain/loss'} data={daily} description={'view of your daily weight gain/loss'} colors={randomColorArray(daily.length, graphColor)} />
      </div>
    </div>
  )
}

export default TotalStats