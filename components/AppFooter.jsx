import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function AppFooter() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="footerBar">
        <Toolbar>
          <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
            La presente aplicación está conectada a{' '}
            <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
              PokeApi
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
