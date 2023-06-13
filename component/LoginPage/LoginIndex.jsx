import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
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
          // console.log(rec.status)
          if(rec.status===200){
            console.log(rec.data.user.roleType)
            if(rec.data.user.roleType == "ADMIN"){
              router.push('/dashboard');
            }
            if(rec.data.user.roleType == "STUDENT"){
              router.push('/studentdashboard');
            }
            if(rec.data.user.roleType == "TEACHER"){
              router.push('/teacherdashboard');
            }

            // router.push('/dashboard');
          }
        })
      };
    
  return (
    <>

    <Box>
      <Grid container sx={{justifyContent:"center",paddingBottom:"6%",paddingTop:"6%"}}>
<Typography variant='h4'>School Managment</Typography>
      </Grid>
    </Box>
    <Grid container sx={{justifyContent:"center"}}>
        <Paper sx={{width:"700px"}} elevation={3} >
          <Box sx={{padding:"2%"}}>   
        <form onSubmit={handleSubmit(onSubmit)}>
         <Grid container xs={12} sx={{justifyContent:"center"}}>
       <Typography  variant='h4' > Login</Typography>
       </Grid>
       <Grid xs={12} sx={{padding:"1%"}}>
       <TextField fullWidth label="User name" variant="outlined" {...register("userName", {
                      required: false,
                    })} />
       </Grid>
       <Grid xs={12} sx={{padding:"1%"}}>
       <TextField fullWidth type="password" label="Password" variant="outlined" {...register("userPassword", {
                      required: false,
                    })} />
       </Grid>
       <Grid container xs={12} sx={{justifyContent:"center"}}>
       <Button   variant="contained" type="submit"> Submit</Button>
       </Grid>
       </form>
       </Box>
       </Paper>
    </Grid>
    </>
  )
}

export default LoginIndex