import React, { Component } from 'react';
import FormStepper from './FormStepper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default class Courtr extends Component {
  render() {
    return (
      <div className="courtreserve" STYLE={{fontFamily: 'Lato'}}>
        
        <Container >
        <h3 style={{marginTop:'20px',fontFamily: 'Lato',fontWeight: 'bold', color:'white'}}>COURT RESERVATION</h3>
          <Box sx={{ bgcolor: 'white', borderRadius: '20px'}} style={{padding: "10px 30px 30px 10px"}}>
            <FormStepper />
          </Box>
        </Container>
      </div>
    );
  }
}
