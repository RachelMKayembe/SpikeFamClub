import React from 'react'
import { useForm } from 'react-hook-form';
import './Form1.css';
import './Form2.css';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';



export default function Form() {

    const { register, handleSubmit,formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
    
  return (
    <section >
        <div style={{marginLeft:'255px', color:'white'}}>
            <h2>Tournament Registration</h2 >
            <span>Register and join a tournament</span>
            <Alert severity="info" style={{marginRight:'245px', marginBottom:'20px', marginTop:'10px'}}>
                <AlertTitle>Info</AlertTitle>
                Max number of players: 12 —<strong>Players must be 18 and +</strong>
            </Alert>
        </div>
        <div>
            <div className="register2" >
                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)} style={{marginLeft:'285px', marginRight:'10px'}}>
                    <h6 style={{fontWeight: 'bold'}}>Team Name</h6>
                    <input type="text2" {...register("teamname",{required: true})} />
                    {errors.teamname && <p className="error-message">Team name required</p>}
                    
                        <label>
                            <h6 style={{fontWeight: 'bold'}}>Tournament Selection :</h6>
                            <select placeholder='tournament' {...register("tounament")} style={{width:'330px'}}>
                                <option value="bsvc">BOYS' SITTING VOLLEYBALL (competitive)</option>
                                <option value="bsvc">GIRLS' SITTING VOLLEYBALL (competitive)</option>
                                <option value="bavc">BOYS' ADULT VOLLEYBALL (competitive)</option>
                                <option value="gavc">GIRLS' ADULT VOLLEYBALL (competitive)</option>
                                <option value="bgrsv">BOYS&GIRLS RECREATIONAL SITTING VOLLEYBALL</option>
                                <option value="bgrav">BOYS&GIRLS' RECREATIONAL ADULT VOLLEYBALL</option>
                            </select>
                        </label>
                                
                </form>
                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)} style={{marginLeft:'25px', marginRight:'60px'}}>
                    <h6 style={{fontWeight: 'bold'}}>Coach's Information</h6>
                   
                    <h6 style={{fontWeight: 'bold'}}>First Name:</h6>
                    <input  type="text" {...register("firstname",{required: true})} />
                    {errors.firstname && <p className="error-message">First Name is required</p>}

                    <h6 style={{fontWeight: 'bold'}}>Last Name:</h6>
                    <input type="text" {...register("lastname",{required: true})} />
                    {errors.lastname && <p className="error-message">Last Name is required</p>}

                    <h6 style={{ fontWeight: 'bold' }}>Email Address:</h6>
                    <input type="text" {...register("email", {required: "Email Address is required", pattern: {value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|fr|ca)$/,message: "Invalid email address",},})}/>
                    {errors.email && <p className="error-message">{errors.email.message}</p>}


                                
                </form>


            </div >
            <div >
                <div className="register23">
                    <h5 style={{ fontWeight: 'bold', marginTop:'20px', marginBottom:'20px', marginLeft:'20px'}}>Player Details</h5>
                </div>
                
                <div className="register23" >
                    <form id='form' className='flex' onSubmit={handleSubmit(onSubmit)} style={{ marginLeft: '200px', marginRight: '60px', alignItems: 'center' }}>
                        <h6 style={{ fontWeight: 'bold' }}>Player_1</h6>
                        <input type="text" helperText="Please enter your name" {...register("First Name")} placeholder='First Name' />
                        <input type="text" {...register("Last Name")} placeholder='Last Name' />
                        <input type="text" {...register("Age")} placeholder='Age' />
                        
                    </form> 
                </div>
                <div className="register23">
                    <form id='form' className='flex' onSubmit={handleSubmit(onSubmit)} style={{ marginLeft: '200px', marginRight: '60px', alignItems: 'center' }}>
                        <h6 style={{ fontWeight: 'bold' }}>Player_2</h6>
                        <input type="text" helperText="Please enter your name" {...register("First Name")} placeholder='First Name' />
                        <input type="text" {...register("Last Name")} placeholder='Last Name' />
                        <input type="text" {...register("Age")} placeholder='Age' />
                        
                    </form> 
                </div>
                <div className="register23">
                    <form id='form' className='flex' onSubmit={handleSubmit(onSubmit)} style={{ marginLeft: '200px', marginRight: '60px', alignItems: 'center' }}>
                        <h6 style={{ fontWeight: 'bold' }}>Player_3</h6>
                        <input type="text" helperText="Please enter your name" {...register("First Name")} placeholder='First Name' />
                        <input type="text" {...register("Last Name")} placeholder='Last Name' />
                        <input type="text" {...register("Age")} placeholder='Age' />
                        
                    </form> 
                </div>
                <div className="register23">
                    <form id='form' className='flex' onSubmit={handleSubmit(onSubmit)} style={{ marginLeft: '200px', marginRight: '60px', alignItems: 'center' }}>
                        <h6 style={{ fontWeight: 'bold' }}>Player_4</h6>
                        <input type="text" helperText="Please enter your name" {...register("First Name")} placeholder='First Name' />
                        <input type="text" {...register("Last Name")} placeholder='Last Name' />
                        <input type="text" {...register("Age")} placeholder='Age' />
                        
                    </form> 
                </div>
                <div className="register23">
                    <form id='form' className='flex' onSubmit={handleSubmit(onSubmit)} style={{ marginLeft: '200px', marginRight: '60px', alignItems: 'center' }}>
                        <h6 style={{ fontWeight: 'bold' }}>Player_5</h6>
                        <input type="text" helperText="Please enter your name" {...register("First Name")} placeholder='First Name' />
                        <input type="text" {...register("Last Name")} placeholder='Last Name' />
                        <input type="text" {...register("Age")} placeholder='Age' />
                        
                    </form> 
                </div>
                <div className="register23">
                    <form id='form' className='flex' onSubmit={handleSubmit(onSubmit)} style={{ marginLeft: '200px', marginRight: '60px', alignItems: 'center' }}>
                        <h6 style={{ fontWeight: 'bold' }}>Player_6</h6>
                        <input type="text" helperText="Please enter your name" {...register("First Name")} placeholder='First Name' />
                        <input type="text" {...register("Last Name")} placeholder='Last Name' />
                        <input type="text" {...register("Age")} placeholder='Age' />
                        
                    </form> 
                </div>
                <div className="register23">
                    <form id='form' className='flex' onSubmit={handleSubmit(onSubmit)} style={{ marginLeft: '200px', marginRight: '60px', alignItems: 'center' }}>
                        <h6 style={{ fontWeight: 'bold' }}>Player_7</h6>
                        <input type="text" helperText="Please enter your name" {...register("First Name")} placeholder='First Name' />
                        <input type="text" {...register("Last Name")} placeholder='Last Name' />
                        <input type="text" {...register("Age")} placeholder='Age' />
                        
                    </form> 
                </div>
                <div className="register23">
                    <form id='form' className='flex' onSubmit={handleSubmit(onSubmit)} style={{ marginLeft: '200px', marginRight: '60px', alignItems: 'center' }}>
                        <h6 style={{ fontWeight: 'bold' }}>Player_8</h6>
                        <input type="text" helperText="Please enter your name" {...register("First Name")} placeholder='First Name' />
                        <input type="text" {...register("Last Name")} placeholder='Last Name' />
                        <input type="text" {...register("Age")} placeholder='Age' />
                        
                    </form> 
                </div>
                <div className="register23">
                    <form id='form' className='flex' onSubmit={handleSubmit(onSubmit)} style={{ marginLeft: '200px', marginRight: '60px', alignItems: 'center' }}>
                        <h6 style={{ fontWeight: 'bold' }}>Player_9</h6>
                        <input type="text" helperText="Please enter your name" {...register("First Name")} placeholder='First Name' />
                        <input type="text" {...register("Last Name")} placeholder='Last Name' />
                        <input type="text" {...register("Age")} placeholder='Age' />
                        
                    </form> 
                </div>
                <div className="register23">
                    <form id='form' className='flex' onSubmit={handleSubmit(onSubmit)} style={{ marginLeft: '200px', marginRight: '60px', alignItems: 'center' }}>
                        <h6 style={{ fontWeight: 'bold' }}>Player_10</h6>
                        <input type="text" helperText="Please enter your name" {...register("First Name")} placeholder='First Name' />
                        <input type="text" {...register("Last Name")} placeholder='Last Name' />
                        <input type="text" {...register("Age")} placeholder='Age' />
                        
                    </form> 
                </div>
                <div className="register23">
                    <form id='form' className='flex' onSubmit={handleSubmit(onSubmit)} style={{ marginLeft: '200px', marginRight: '60px', alignItems: 'center' }}>
                        <h6 style={{ fontWeight: 'bold' }}>Player_11</h6>
                        <input type="text" helperText="Please enter your name" {...register("First Name")} placeholder='First Name' />
                        <input type="text" {...register("Last Name")} placeholder='Last Name' />
                        <input type="text" {...register("Age")} placeholder='Age' />
                        
                    </form> 
                </div>
                <div className="register23">
                    <form id='form' className='flex' onSubmit={handleSubmit(onSubmit)} style={{ marginLeft: '200px', marginRight: '60px', alignItems: 'center' }}>
                        <h6 style={{ fontWeight: 'bold' }}>Player_12</h6>
                        <input type="text" helperText="Please enter your name" {...register("First Name")} placeholder='First Name' />
                        <input type="text" {...register("Last Name")} placeholder='Last Name' />
                        <input type="text" {...register("Age")} placeholder='Age' />
                        
                    </form> 
                </div>
            
            
            </div>

            
        </div>
        
        
        <div className="register" >

            <div>
                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                       
                        <button className='btn' style={{marginTop:'60px'}}>Submit</button >
                    </form>
                
            </div>
        </div>
    </section>
  )
}