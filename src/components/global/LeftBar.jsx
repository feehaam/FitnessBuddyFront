import { useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from '../../theme';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import FoodBankRoundedIcon from '@mui/icons-material/FoodBankRounded';
import RunCircleRoundedIcon from '@mui/icons-material/RunCircleRounded';
import DomainAddRoundedIcon from '@mui/icons-material/DomainAddRounded';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import FitbitRoundedIcon from '@mui/icons-material/FitbitRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import {isMobile} from 'react-device-detect';

const LeftBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mode = theme.palette.mode;
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed} backgroundColor=""
        rootStyles={{
          borderRight: '0px'
        }}
      >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  MENU
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Muhammad Feeham
                  {mode === 'dark' ? <hr className="styleY"/> : <hr className="styleX"/>}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <MenuItem 
                component={<Link to="/"/>} 
                icon={<CottageRoundedIcon />}
                selected={selected}
                setSelected={setSelected}>Home
            </MenuItem>
            

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}>
              Activities
            </Typography>
            <MenuItem 
                component={<Link to="/diet"/>} 
                icon={<FoodBankRoundedIcon />}
                selected={true}
                setSelected={setSelected}>Diet
            </MenuItem>
            <MenuItem 
                component={<Link to="/exercise"/>} 
                icon={<RunCircleRoundedIcon />}
                selected={selected}
                setSelected={setSelected}>Exercises
            </MenuItem>
            <MenuItem 
                component={<Link to="/total-stats"/>} 
                icon={<DomainAddRoundedIcon />}
                selected={selected}
                setSelected={setSelected}>Total Stats
            </MenuItem>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}>
              Health
            </Typography>
            <MenuItem 
                component={<Link to="/plans"/>} 
                icon={<AdsClickIcon />}
                selected={selected}
                setSelected={setSelected}>Plans
            </MenuItem>
            <MenuItem 
                component={<Link to="/guides"/>} 
                icon={<ForkRightIcon />}
                selected={selected}
                setSelected={setSelected}>Guides
            </MenuItem>
            <MenuItem 
                component={<Link to="/nutritions"/>} 
                icon={<FitbitRoundedIcon />}
                selected={selected}
                setSelected={setSelected}>Nutritions
            </MenuItem>
            <MenuItem 
                component={<Link to="/workouts"/>} 
                icon={<FitnessCenterRoundedIcon />}
                selected={selected}
                setSelected={setSelected}>Workouts
            </MenuItem>


            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}>
              Account
            </Typography>
            <MenuItem 
                component={<Link to="/profile"/>} 
                icon={<AccountBoxRoundedIcon />}
                selected={selected}
                setSelected={setSelected}>Profile
            </MenuItem>
            <MenuItem 
                component={<Link to="/settings"/>} 
                icon={<SettingsApplicationsRoundedIcon />}
                selected={selected}
                setSelected={setSelected}>Settings
            </MenuItem>
            <MenuItem 
                component={<Link to="/signout"/>} 
                icon={<ExitToAppRoundedIcon />}
                selected={selected}
                setSelected={setSelected}>Sign out
            </MenuItem>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default LeftBar;