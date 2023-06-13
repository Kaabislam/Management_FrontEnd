import { Container, Typography, Button, Grid } from "@mui/material";
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


  return (
    <Container maxWidth="sm">
      <Grid container>
      <Grid xs={3}>
<Button onClick={()=>handleAddstd()}>View Profile</Button>
    </Grid>
    <Grid xs={3}>
    <Button onClick={()=>handleaddteacher()}>Reset Password</Button>
    </Grid>
    <Grid xs={3}>
    <Button onClick={()=>handleAllUser()}>Edit Profile</Button>
   </Grid>

    <Grid xs={3}>
    <Button onClick={()=>handleAcitve()}>Request A Teacher</Button>
      </Grid>
      

      </Grid>
      
    </Container>
  );
}
