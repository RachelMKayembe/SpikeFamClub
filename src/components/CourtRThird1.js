import * as React from 'react';
import Box from '@mui/material/Box';
import Textarea from 'react-textarea-autosize';
import { useForm } from 'react-hook-form';
import './Form1.css';


export default function TextComp() {
  const { register, handleSubmit,formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
    <p> If necessary, write down an item request needed on the date of the booking. A item request confimation email will be sent to you 24 to 48 hours before the booking time.</p>.

    <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)} style={{marginLeft:'285px', marginRight:'60px'}}>
                    

                   
                    
                    <h6 style={{ fontWeight: 'bold' }}> Email Adress:</h6>
                    <input type="text" {...register("email", {required: "Email Address is required", pattern: {value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|fr|ca)$/,message: "Invalid email address",},})}/>
                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                    
                    <h6 style={{fontWeight: 'bold'}}>Membership Number:</h6>
                    <h7 style={{color:'orange'}}>6 digits</h7>
                    <input type="text" {...register("mobile", { required : true, maxLength: 6, minLength:6})} />
                    {errors.mobile?.type === "required" && <p className="error-message"> Membership# is required</p>}
                    {errors.mobile?.type === "maxLength" && <p className="error-message">Max Length Exceed</p>}
                    {errors.mobile?.type === "minLength" && <p className="error-message">Invalid Membership#</p>}
                    <div>
                      <h6 style={{ fontWeight: 'bold' }}>Enter your requested item:</h6>
                      <Textarea
                        sx={{
                          '--Textarea-focused': 1,
                        }}
                      />
                    </div>
                      
                    
      </form>
    </Box>
    
  );
}
