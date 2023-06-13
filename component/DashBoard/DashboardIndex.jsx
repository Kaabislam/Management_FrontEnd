import { Container, Typography, Button, Grid, Paper, Box } from "@mui/material";
import { useRouter } from "next/router";

export default function DashboardIndex() {
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


  return (
    <>
    <Box  sx={{justifyContent:"center"}}>
      <Grid container sx={{paddingTop:"10%"}}>
      <Paper sx={{width:"500px" ,padding:"3%"}} elevation={3}>
      <Grid container sx={{justifyContent:"center"}}>    
<Button variant="outlined" onClick={()=>handleAddstd()}>Add Student</Button>    
</Grid>
</Paper>
<Paper  sx={{width:"500px" ,padding:"3%"}} elevation={3}>
    <Grid container  sx={{justifyContent:"center"}}>
    <Button variant="outlined" onClick={()=>handleaddteacher()}>Add Teacher</Button>
    </Grid>
    </Paper>
    <Paper  sx={{width:"500px" ,padding:"3%"}}elevation={3}>
    <Grid container sx={{justifyContent:"center"}}>
    <Button variant="outlined" onClick={()=>handleAllUser()}>All User</Button>
   </Grid>
   </Paper>
   </Grid>
   </Box>


   <Grid container >
   <Paper  sx={{width:"500px" ,padding:"3%"}} elevation={3}>
    <Grid container sx={{justifyContent:"center"}}>
    <Button variant="outlined" onClick={()=>handleAcitve()}>Activate User</Button>
      </Grid>
      </Paper>
      <Paper  sx={{width:"500px" ,padding:"3%"}} elevation={3}>
      <Grid container sx={{justifyContent:"center"}}>
    <Button variant="outlined" onClick={()=>handleDeactive()}>Deactive User</Button>
      </Grid>
      </Paper>
      </Grid>
     
      </>  
   
  );
}
