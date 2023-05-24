import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { isMobile } from 'react-device-detect';
import { Link } from "react-router-dom";

const Topbar = ({ showRightbar, setShowRightbar }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const mode = theme.palette.mode;

  function handleRightbar() {
    if (showRightbar) setShowRightbar(false);
    else setShowRightbar(true);
  }

  function love() {

  }

  return (
    <>
      <Box display="flex" justifyContent="space-between" p={2} sx={{
        boxShadow: mode === 'dark' ? '#778 0px 1px 4px 0px' : '#aaa 0px 1px 4px 0px',
        position: 'sticky',
        backgroundColor: mode === 'dark' ? colors.primary[500] : 'white',
        top: 0
      }}>
        {/* SEARCH BAR */}
        <Box
          display="flex"
        >
          <Link to={'/'} style={{
            textDecoration: 'bold'
          }}>
            <Typography variant={isMobile ? 'h4' : 'h2'} color='#ff5544' sx={{
              fontWeight: 600
            }} className="hoverer">
              <IconButton onClick={love} className="love">
                <img src="../../../favicon.ico" />
              </IconButton>
              FitnessBuddy
            </Typography>
          </Link>
        </Box>

        {/* ICONS */}
        <Box display="flex">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          {/* <IconButton>
            <TuneRoundedIcon />
          </IconButton> */}
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
          <IconButton>
            <ExitToAppRoundedIcon />
          </IconButton>
        </Box>
      </Box>
      {showRightbar ?
        ''
        :
        <Box display="flex" justifyContent="right" mr={'25px'} onClick={handleRightbar}
          sx={{
            borderLeft: mode === 'dark' ? '1px solid #555' : '1px solid #ccc',
          }}>
          <Box textAlign="center">
            <Typography className="hoverer"
              variant="h3"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "10px 0 0 0" }}
              backgroundColor={colors.primary[400]}
              borderRadius="3px"
              p={1}>
              Add daily activity
              <IconButton>
                <MenuOpenRoundedIcon />
              </IconButton>
            </Typography>
          </Box>
        </Box>
      }
    </>
  );
};

export default Topbar;