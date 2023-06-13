// import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
// import axios from 'axios'
// import { useRouter } from 'next/router'
// import React from 'react'
// import { useState } from 'react'
// import { useForm } from 'react-hook-form'

// const StatusChange = () => {
//     const router = useRouter();
//     const { register, handleSubmit } = useForm();


//     const onSubmit = (data) => {
//         console.log(data)
        
       
//         axios.post('http://localhost:8080/admin/deactiveAccount/t1', data).then((rec)=>{
//           console.log(rec.status)
//           if(rec.status===200){
//             router.push('/dashboard');
//           }
//         })
//       };
    
//   return (
//     <>
//     <Grid container sx={{justifyContent:"center"}}>
//         <Paper>
//         <form onSubmit={handleSubmit(onSubmit)}>
//          <Grid xs={12}>
//        <Typography  variant='h4'> Acivate an User Account </Typography>
//        </Grid>
//        <Grid xs={12}>
//        <TextField fullWidth label="User Id" variant="outlined" {...register("userName", {
//                       required: false,
//                     })} />
//        </Grid>
       
//        <Grid xs={12}>
//        <Button    type="submit"> Activate Account </Button>
//        </Grid>
//        </form>
//        </Paper>
//     </Grid>
//     </>
//   )
// }

// export default StatusChange




import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
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
      <Grid container sx={{ justifyContent: "center" }}>
        <Paper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid xs={12}>
              <Typography variant='h4'> Activate a User Account </Typography>
            </Grid>
            <Grid xs={12}>
              <TextField
                fullWidth
                label="User Id"
                variant="outlined"
                {...register("userName", {
                  required: true,
                })}
              />
            </Grid>
            <Grid xs={12}>
              <Button type="submit"> Activate Account </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </>
  )
}

export default StatusChange
