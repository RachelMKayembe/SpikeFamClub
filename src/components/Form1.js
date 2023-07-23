import React from 'react'
import { useForm } from 'react-hook-form';
import './Form1.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const CheckboxItem = ({ item }) => {
    return (
      <div>
        <input type="checkbox" id={`checkbox-${item.id}`} />
        <label htmlFor={`checkbox-${item.id}`}>{item.label}</label>
      </div>
    );
  };

export default function Form() {
    const { register, handleSubmit,formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    const checkboxItems = [
        { id: 1, label: "Middle" },
        { id: 2, label: "Outside Hitter(front left)" },
        { id: 3, label: "Outside Hitter(front right" },
        { id: 4, label: "Setter" },
        { id: 5, label: "Libero" },
        ];

    
    
  return (
    
    <section >
        <div style={{marginLeft:'255px', color:'white'}}>
            <h2>Team Registration</h2 >
            <span>Register and join the team</span>
            <Alert severity="info" style={{marginRight:'245px', marginBottom:'20px', marginTop:'10px'}}>
                <AlertTitle>Info</AlertTitle>
                When selecting the competitive league, registration is exclusively for tryouts. Users will receive an email with essential information.—<strong>Competitive team: Tryouts</strong>
            </Alert>
        </div>
        
        <div className="register" >
            <div>
                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)} style={{marginLeft:'285px', marginRight:'60px'}}>
                    <h6 style={{fontWeight: 'bold'}}>First Name:</h6>
                    <input  type="text" {...register("firstname",{required: true})} />
                    {errors.firstname && <p className="error-message">First Name is required</p>}

                    <h6 style={{fontWeight: 'bold'}}>Last Name:</h6>
                    <input type="text" {...register("lastname",{required: true})} />
                    {errors.lastname && <p className="error-message">Last Name is required</p>}

                    <h6 style={{fontWeight: 'bold'}}>Phone Number:</h6>
                    <h7 style={{color:'orange'}}>Max 10 digits</h7>
                    <input type="text" {...register("mobile", { required : true, maxLength: 10, minLength:10})} />
                    {errors.mobile?.type === "required" && <p className="error-message">Mobile Number is required</p>}
                    {errors.mobile?.type === "maxLength" && <p className="error-message">Max Length Exceed</p>}
                    {errors.mobile?.type === "minLength" && <p className="error-message">Invalid phone number</p>}
                    
                    <h6 style={{ fontWeight: 'bold' }}>Email Address:</h6>
                    <input type="text" {...register("email", {required: "Email Address is required", pattern: {value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|fr|ca)$/,message: "Invalid email address",},})}/>
                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                    
                    <div>
                        <h6 style={{fontWeight: 'bold'}}>Gender</h6>
                        <label>
                        <input type="radio" value="Male" {...register("male")} />
                        Male
                        </label>
                        <label>
                        <input type="radio" value="Female" style={{marginLeft:'10px'}}{...register("female")} />
                        Female
                        </label>
                     </div>
                    <h6 style={{fontWeight: 'bold'}}>Date of birth:</h6>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker/>
                        </DemoContainer>
                    </LocalizationProvider>
                    

                    
                </form>

            </div>
            <div>
                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <label>
                            <h6 style={{fontWeight: 'bold'}}>Team :</h6>
                            <select  {...register("team")} style={{width:'330px'}}>
                                <option value="sv">Sitting Volleyball</option>
                                <option value="av">Adult Volleyball</option>
                            </select>
                        </label>
                        <label>
                            <h6 style={{fontWeight: 'bold'}}>League :</h6>
                            <select  {...register("league")} style={{width:'330px'}}>
                                <option value="rl">Recreational</option>
                                <option value="cl">Competitive(Tryouts)</option>
                            </select>
                        </label>
                        <section>
                            <h6 style={{ fontWeight: 'bold' }}>Position(s) Played</h6>
                            {checkboxItems.map((item) => (
                                <CheckboxItem key={item.id} item={item} {...register('positions')} />
                            ))}
                        </section>
                        
                        <button className='btn' style={{marginTop:'60px'}}>Submit</button >
                    </form>
                
            </div>
        </div>
    </section>
  )
}