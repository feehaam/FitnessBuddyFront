import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from '../../theme';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const RightBar = ({ showRightbar, setShowRightbar }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  function handleRightbar() {
    if (showRightbar) setShowRightbar(false);
    else setShowRightbar(true);
  }

  return (
    <Box sx={{
        float: 'right',
        marginLeft: '10px',
        marginTop: '10px',
        boxShadow: theme.palette.mode === 'dark' ? 'rgba(0, 200, 200, 0.12) 0px 1px 3px, rgba(0, 200, 200, 0.24) 0px 1px 2px' : 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
        borderRight: '0px',
        padding: '10px',
        borderRadius: '5px',
        maxWidth: '90%'
      }}>
        <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                  backgroundColor={colors.primary[400]}
                  borderRadius="3px"
                  p={1}>
                  Add daily activity
                  <IconButton onClick={handleRightbar}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Typography>
              </Box>
        <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{ m: "15px 0 5px 20px" }}>
          Breakfast
        </Typography>
        <input style={{ width: '100%' }}></input><br />
        <input style={{ width: '100%' }}></input><br />
        <input style={{ width: '100%' }}></input><br />
        <input style={{ width: '100%' }}></input><br />
        <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{ m: "15px 0 5px 20px" }}>
          Lunch
        </Typography>
        <input style={{ width: '100%' }}></input><br />
        <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{ m: "15px 0 5px 20px" }}>
          Dinner
        </Typography>
        <input style={{ width: '100%' }}></input><br />
        <input style={{ width: '100%' }}></input><br />
      </Box>
  );
};

export default RightBar;