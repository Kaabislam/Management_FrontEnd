import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'

const EditStudentProfile = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const onSubmit = async (data) => {
    const jsonData = {
      userName: data.userName,
      email: data.email,
      advisorId: data.advisorId,
      user: {
        advisorId: data.advisorId,
        userName: data.userName,
        userPassword: data.userPassword,
        roleType: "STUDENT",
        email: data.email,
        activationStatus: "ACTIVE",
        departmentName:data.departmentName
      }
    }

    try {
      const response = await axios.put(`http://localhost:8080/student/editProfile/${data.userName}`,jsonData)
      console.log(response.status)
      // Redirect to the desired page
      router.push('/studentdashboard');
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>

    <Box>
      <Grid container sx={{justifyContent:"center",paddingBottom:"6%",paddingTop:"6%"}}>
<Typography variant='h4'>Update Student Information</Typography>
      </Grid>
    </Box>
    <Grid container sx={{justifyContent:"center"}}>
        <Paper sx={{width:"700px"}} elevation={3} >
          <Box sx={{padding:"2%"}}>   
        <form onSubmit={handleSubmit(onSubmit)}>
         <Grid container xs={12} sx={{justifyContent:"center"}}>
       <Typography  variant='h4' > New Data</Typography>
       </Grid>
       <Grid xs={12} sx={{padding:"1%"}}>
       <TextField fullWidth label="User name" variant="outlined" {...register("userName", {
                      required: false,
                    })} />
       </Grid>
       <Grid xs={12} sx={{padding:"1%"}}>
       <TextField fullWidth label="Email" variant="outlined" {...register("email", {
                      required: false,
                    })} />
       </Grid>
       <Grid xs={12} sx={{padding:"1%"}}>
       <TextField fullWidth label="Advisor Id" variant="outlined" {...register("advisorId", {
                      required: false,
                    })} />
       </Grid>

       <Grid xs={12} sx={{padding:"1%"}}>
       <TextField fullWidth label="Department Name" variant="outlined" {...register("departmentName", {
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

export default EditStudentProfile
