import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Topbar from './components/global/Topbar';
import LeftBar from './components/global/LeftBar';
import Diet from './components/pages/Diet';
import Exercise from './components/pages/Exercise';
import TotalStats from './components/pages/TotalStats';
import Plans from './components/pages/Plans';
import Guides from './components/pages/Guides';
import Nutritions from './components/pages/Nutritions';
import Workouts from './components/pages/Workouts';
import Profile from './components/pages/Profile';
import Dashboard from './components/pages/Dashboard';
import Settings from './components/pages/Settings';
import RightBar from './components/global/RightBar';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';

function App() {

  const [theme, colorMode] = useMode();
  const [showRightbar, setShowRightbar] = useState(!isMobile);
  const [page, setPage] = useState("FitnessBuddy")
  const mode = theme.palette.mode;

  function changePage(title){
    setPage(title);
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <LeftBar changePage={changePage} />
          <main className='content'>
            <Topbar showRightbar={showRightbar} setShowRightbar={setShowRightbar} page={page} />
            {/* {showRightbar ? <RightBar showRightbar={showRightbar} setShowRightbar={setShowRightbar} /> : ""} */}
            <div style={{
              minHeight: '100%',
              borderLeft: mode === 'dark' ? '1px solid #555' : '1px solid #ccc',
              padding: '15px'
            }}>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path="/diet" element={<Diet />} />
                <Route path="/exercise" element={<Exercise />} />
                <Route path="/total-stats" element={<TotalStats />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/guides" element={<Guides />} />
                <Route path="/nutritions" element={<Nutritions />} />
                <Route path="/workouts" element={<Workouts />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
