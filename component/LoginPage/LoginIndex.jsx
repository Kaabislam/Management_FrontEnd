import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const LoginIndex = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {
        console.log(data)
        
       
        axios.post('http://localhost:8080/authenticate', data).then((rec)=>{
          console.log(rec.status)
          if(rec.status===200){
            router.push('/dashboard');
          }
        })
      };
    
  return (
    <>
    <Grid container sx={{justifyContent:"center"}}>
        <Paper>
        <form onSubmit={handleSubmit(onSubmit)}>
         <Grid xs={12}>
       <Typography  variant='h4'> Login</Typography>
       </Grid>
       <Grid xs={12}>
       <TextField fullWidth label="User name" variant="outlined" {...register("userName", {
                      required: false,
                    })} />
       </Grid>
       <Grid xs={12}>
       <TextField fullWidth type="password" label="Password" variant="outlined" {...register("userPassword", {
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

export default LoginIndex