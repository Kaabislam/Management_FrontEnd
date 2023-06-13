// import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
// import axios from 'axios'
// import { useRouter } from 'next/router'
// import React from 'react'
// import { useState } from 'react'
// import { useForm } from 'react-hook-form'







// const StudentAddIndex = () => {
//     const router = useRouter();
//     const { register, handleSubmit } = useForm();


//     const onSubmit = (data) => {
//         console.log(data)
        
        
//         // router.push('/dashboard');
//         // axios.post('/user', data)
//       };
    
//   return (
//     <>
//     <Grid container sx={{justifyContent:"center"}}>
//         <Paper>
//         <form onSubmit={handleSubmit(onSubmit)}>
//          <Grid xs={12}>
//        <Typography  variant='h4'> Student Details</Typography>
//        </Grid>
//        <Grid xs={12}>
//        <TextField fullWidth label="Student Name" variant="outlined" {...register("userName", {
//                       required: false,
//                     })} />
//        </Grid>
//        <Grid xs={12}>
//        <TextField fullWidth type="password" label="Password" variant="outlined" {...register("userPassword", {
//                       required: false,
//                     })} />
//        </Grid>
//        <Grid xs={12}>
//        <TextField fullWidth type="password" label="Advisor Id" variant="outlined" {...register("advisorId", {
//                       required: false,
//                     })} />
//        </Grid>
//        <Grid xs={12}>
//        <TextField fullWidth type="password" label="Status Type" variant="outlined" {...register("activationStatus", {
//                       required: false,
//                     })} />
//        </Grid>
//        <Grid xs={12}>
//        <Button    type="submit"> Add student</Button>
//        </Grid>
//        </form>
//        </Paper>
//     </Grid>
//     </>
//   )
// }




// export default StudentAddIndex




import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const StudentAddIndex = () => {
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
        activationStatus: "ACTIVE"
      }
    }

    try {
      const response = await axios.put('http://localhost:8080/admin/registerNewStudent', jsonData)
      console.log(response.status)
      // Redirect to the desired page
      // router.push('/dashboard');
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Grid container sx={{ justifyContent: "center" }}>
        <Paper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid xs={12}>
              <Typography variant='h4'> Student Details</Typography>
            </Grid>
            <Grid xs={12}>
              <TextField
                fullWidth
                label="Student Name"
                variant="outlined"
                {...register("userName", {
                  required: false,
                })}
              />
            </Grid>
            <Grid xs={12}>
              <TextField
                fullWidth
                type="password"
                label="Password"
                variant="outlined"
                {...register("userPassword", {
                  required: false,
                })}
              />
            </Grid>
            <Grid xs={12}>
              <TextField
                fullWidth
                type="password"
                label="Advisor Id"
                variant="outlined"
                {...register("advisorId", {
                  required: false,
                })}
              />
            </Grid>
            <Grid xs={12}>
              <TextField
                fullWidth
                type="password"
                label="Status Type"
                variant="outlined"
                {...register("activationStatus", {
                  required: false,
                })}
              />
            </Grid>
            <Grid xs={12}>
              <Button type="submit"> Add student</Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </>
  )
}

export default StudentAddIndex
