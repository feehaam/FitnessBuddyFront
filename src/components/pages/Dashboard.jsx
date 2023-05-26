import React from 'react'
import RightBar from '../global/RightBar'
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { isMobile } from 'react-device-detect';
import { useState } from 'react';
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


const Dashboard = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mode = theme.palette.mode;
  const [showRightbar, setShowRightbar] = useState(!isMobile);

  function handleRightbar() {
    if (showRightbar) setShowRightbar(false);
    else setShowRightbar(true);
  }

  return (
    <>
      <Box>
        <Box display="flex" justifyContent="center" mr={'25px'} onClick={handleRightbar}>
          <Box textAlign="center">
            <Typography className="hoverer"
              variant="h4"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "10px 0 0 0" }}
              backgroundColor={colors.primary[400]}
              borderRadius="3px"
              p={1}>
              Add daily activity
              <IconButton>
                {!showRightbar ? <AddBoxRoundedIcon/> : <CloseRoundedIcon/>}
              </IconButton>
            </Typography>
          </Box>
        </Box>
        {showRightbar ? <RightBar showRightbar={showRightbar} setShowRightbar={setShowRightbar} /> : ''}
      </Box>
    </>
  )
}

export default Dashboard