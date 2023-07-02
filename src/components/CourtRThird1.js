import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Textarea from 'react-textarea-autosize';

export default function TextComp() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
    <p> If necessary, write down an item request needed on the date of the booking. A item request confimation email will be sent to you 24 to 48 hours before the booking time.</p>.
    <TextField fullWidth label="Email" id="fullWidth" sx={{ marginTop: '20px', marginBottom: '20px' }} />
    <TextField fullWidth label="MemberShip Number" id="fullWidth" sx={{ marginTop: '20px', marginBottom: '20px' }} />
      
    <Textarea
      placeholder="Enter your requested item"
      sx={{
        '--Textarea-focused': 1,
      }}
    />
    </Box>
    
  );
}
