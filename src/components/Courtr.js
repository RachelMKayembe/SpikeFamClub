import React, { Component } from 'react';
import FormStepper from './FormStepper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default class Courtr extends Component {
  render() {
    return (
      <div className="courtreserve">
        
        <Container >
        <h5 >COURT RESERVATION</h5>
          <Box sx={{ bgcolor: '#D9D9D9', borderRadius: '20px'}} style={{padding: "30px 30px 30px 30px"}}>
            <FormStepper />
          </Box>
        </Container>
      </div>
    );
  }
}
