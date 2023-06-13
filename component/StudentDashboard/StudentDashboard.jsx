import { Container, Typography, Button, Grid, Box, Paper } from "@mui/material";
import { useRouter } from "next/router";

export default function StudentDashBoard() {
    const router = useRouter();
    const handleAddstd=()=>{
        router.push('/addstudent');
    }
    const handleaddteacher=()=>{
        router.push('/addteacher');
    }
    const handleAllUser=()=>{
        router.push('/alluser');
    }
    const handleAcitve=()=>{
        router.push('/activeuser');
    }
    const handleDeactive=()=>{
    router.push('/deactivateUser');
    }


    const handleViewProfileStudent=()=>{
        router.push('/viewProfileStudent');
      }
      const handleResetPasswordStudent=()=>{
        router.push('/resetpasswordstudent');
      }

      const handleEditProfileStudent=()=>{
        router.push('/editprofilestudent');
      }


  return (
    <>
    <Box>
      <Grid container sx={{justifyContent:"center",paddingBottom:"3%",paddingTop:"1%"}}>
<Typography variant='h4'>Student Page</Typography>
      </Grid>
    </Box>
    <Box  sx={{justifyContent:"center"}}>
      <Grid container sx={{paddingTop:"10%"}}>
      <Paper sx={{width:"500px" ,padding:"3%"}} elevation={3}>
      <Grid container sx={{justifyContent:"center"}}>    
<Button variant="outlined" onClick={()=>handleAddstd()}>View Profile</Button>    
</Grid>
</Paper>
<Paper  sx={{width:"500px" ,padding:"3%"}} elevation={3}>
    <Grid container  sx={{justifyContent:"center"}}>
    <Button variant="outlined" onClick={()=>handleEditProfileStudent()}>Edit Profile</Button>
    </Grid>
    </Paper>
    <Paper  sx={{width:"500px" ,padding:"3%"}}elevation={3}>
    <Grid container sx={{justifyContent:"center"}}>
    <Button variant="outlined" onClick={()=>handleAllUser()}>Reset Password</Button>
   </Grid>
   </Paper>
   </Grid>
   </Box>


   <Grid container >
   <Paper  sx={{width:"500px" ,padding:"3%"}} elevation={3}>
    <Grid container sx={{justifyContent:"center"}}>
    <Button variant="outlined" onClick={()=>handleAcitve()}>Send Request To Teacher</Button>
      </Grid>
      </Paper>
      
      </Grid>
     
      </>  
   
  );
}
