import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const ResetPasswordStudentIndex = () => {


    const router = useRouter();
    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {
        console.log(data)
        
       
        axios.put('http://localhost:8080/users/resetPassword', data).then((rec)=>{
          // console.log(rec.status)
          if(rec.status===200){
            console.log()
        
            // router.push('/dashboard');
          }
        })
      };
    
  return (
    <>
    <Grid container sx={{justifyContent:"center"}}>
        <Paper>
        <form onSubmit={handleSubmit(onSubmit)}>
         <Grid xs={12}>
       <Typography  variant='h4'> Reset Password</Typography>
       </Grid>
       <Grid xs={12}>
       <TextField fullWidth label="User name" variant="outlined" {...register("userName", {
                      required: false,
                    })} />
       </Grid>
       <Grid xs={12}>
       <TextField fullWidth type="password" label="New Password" variant="outlined" {...register("userPassword", {
                      required: false,
                    })} />
       </Grid>
       <Grid xs={12}>
       <Button    type="submit"> Submit</Button>
       </Grid>
       </form>
       </Paper>
    </Grid>
    </>
  )
}

export default ResetPasswordStudentIndex