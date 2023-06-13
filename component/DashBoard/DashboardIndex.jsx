import { Container, Typography, Button, Grid } from "@mui/material";
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
    <Container maxWidth="sm">
      <Grid container>
      <Grid xs={3}>
<Button onClick={()=>handleAddstd()}>Add Student</Button>
    </Grid>
    <Grid xs={3}>
    <Button onClick={()=>handleaddteacher()}>Add Teacher</Button>
    </Grid>
    <Grid xs={3}>
    <Button onClick={()=>handleAllUser()}>All User</Button>
   </Grid>

    <Grid xs={3}>
    <Button onClick={()=>handleAcitve()}>Activate User</Button>
      </Grid>
      <Grid xs={3}>
    <Button onClick={()=>handleDeactive()}>Deactive User</Button>
      </Grid>

      </Grid>
      
    </Container>
  );
}
