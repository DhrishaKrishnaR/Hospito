import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import './HomeButton.css'
export default function VariantButtonGroup() {
  return (
    <Box
      sx={{
        color:'#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
      <div >
        <Button type="submit" className="text" href="/Login">Login</Button>
        <Button type="submit" className="text" href="/SignUp">SignUp</Button>
        <Button type="submit" className="text" href="/About">About</Button></div>
      </ButtonGroup>
    </Box>
  );
}