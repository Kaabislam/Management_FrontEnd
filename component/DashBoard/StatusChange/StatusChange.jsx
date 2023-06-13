
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'

const StatusChange = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await axios.put(`http://localhost:8080/admin/activeAccount/${data.userName}`)
      console.log(response.data)
      if (response.status === 200) {
        // console.log(response)
        router.push('/dashboard')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>

    <Box>
      <Grid container sx={{justifyContent:"center",paddingBottom:"6%",paddingTop:"6%"}}>
<Typography variant='h4'>Activate A User</Typography>
      </Grid>
    </Box>
    <Grid container sx={{justifyContent:"center"}}>
        <Paper sx={{width:"700px"}} elevation={3} >
          <Box sx={{padding:"2%"}}>   
        <form onSubmit={handleSubmit(onSubmit)}>
         <Grid container xs={12} sx={{justifyContent:"center"}}>
       <Typography  variant='h4' > User Info</Typography>
       </Grid>
       <Grid xs={12} sx={{padding:"1%"}}>
       <TextField fullWidth label="User name" variant="outlined" {...register("userName", {
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

export default StatusChange
