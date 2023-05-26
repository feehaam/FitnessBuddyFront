import React from 'react'
import BarView from '../Graphical/BarView';
import PieView from '../Graphical/PieView';
import { randomColorArray } from '../Graphical/RandomColor';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from '../../theme';
import { useState } from 'react';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import { weeklyJson, water } from '../../Data/diet1';

const Exercise = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mode = theme.palette.mode;
  const [type, setType] = useState('Weekly');
  const graphColor = mode === 'dark' ? 'light' : 'dark';

  return (
    <div>
      
    </div>
  )
}

export default Exercise