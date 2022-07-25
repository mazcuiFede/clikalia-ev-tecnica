import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function AppHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Clikalia - Poke Api
          </Typography>
          <Link href="./pokemon">
            <a className="link">Ver listado de Pokemon's</a>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
