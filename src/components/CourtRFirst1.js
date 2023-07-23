import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './CourtRFirst1.css';
const labelStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};
export default function CourtRFirst() {
  return (
    <FormControl>
      <div style={{backgroundColor:'#FFCD82', marginBottom:'15px', marginTop:'10px', marginLeft:'30px', marginRight:'240px'}}>
        <FormLabel id="demo-row-radio-buttons-group-label" sx={{ marginTop: '5px', marginBottom: '20px',fontFamily:'Lato'}} ><h3>Indoor/Outdoor Court</h3></FormLabel>
        <div style={{fontFamily:'Lato', marginLeft:'40px'}}>
          <h5>Please note that the selected court will be set in advance</h5>
          <h5>Provided elements:</h5>
          <h5 style={{marginLeft:'40px'}}>- 4 balls</h5>
          <h5 style={{marginLeft:'40px'}}>- Music room key(indoor) or radio container key(outdoor)</h5>
          <h5 style={{fontWeight: 'bold'}}>When done, please hand in the used items to the front desk</h5>
        </div>
      </div>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="cout1" control={<Radio />} 
          label={
            <div style={labelStyle}>
                <img src="https://d26itsb5vlqdeq.cloudfront.net//image/49CAD8B1-93F9-E10B-7FBA3112D478F6F6" alt="Court1" /> 
                <span>Court 1</span>
              </div>
          }
            
        />
        <FormControlLabel value="cout2" control={<Radio />} 
          label={
            <div style={labelStyle}>
                <img src="https://static.wixstatic.com/media/a31422_c60f6d435a1a400e8fc40337a044f64a~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_5184,h_3456,al_c/a31422_c60f6d435a1a400e8fc40337a044f64a~mv2_d_5184_3456_s_4_2.jpg" alt="Court1" /> 
                <span>Court 2</span>
              </div>
          }
            
        />

        <FormControlLabel value="cout3" control={<Radio />} 
          label={
            <div style={labelStyle}>
                <img src="https://modularsport.com/wp-content/uploads/2019/10/fotovole3.jpg" alt="Court1" /> 
                <span>Court 3</span>
              </div>
          }
            
        />
        
        <FormControlLabel value="cout4" control={<Radio />} 
          label={
            <div style={labelStyle}>
                <img src="https://cdn11.bigcommerce.com/s-cf8ys9ikz8/stencil/a46a50a0-47cb-0139-4bd7-0242ac11000e/e/ae40e290-d927-0139-7756-1e80c6e1f80d/images/volleyball-usa-concrete-curb-padding-medium.jpg" alt="Court1" /> 
                <span>Court 4</span>
              </div>
          }
            
        />
        <FormControlLabel value="cout5" control={<Radio />} 
          label={
            <div style={labelStyle}>
                <img src="https://www.thehaydengroupcorp.com/wp-content/uploads/2019/09/outdoor-volleyball-court-image.jpg" alt="Court1" /> 
                <span>Court53</span>
              </div>
          }
            
        />
        <FormControlLabel value="cout6" control={<Radio />} 
          label={
            <div style={labelStyle}>
                <img src="https://www.recreationalgroup.com/cmss_files/imagelibrary/volleyball-outdoor-court.jpg" alt="Court1" /> 
                <span>Court 6</span>
              </div>
          }
            
        />

      </RadioGroup>
    </FormControl>
    
  );
}