import { Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import DashboardIndex from "../component/DashBoard/DashboardIndex";
import StudentAddIndex from "../component/DashBoard/StatusChange/StatusChange";
import StatusChange from "../component/DashBoard/StatusChange/DeactivateUser";
import DeactivateUser from "../component/DashBoard/StatusChange/DeactivateUser";

export default function Activeuser() {
  const router = useRouter();

  return (
    <Container maxWidth="sm">
     <Typography>
        Deactivate User
     </Typography>
     <DeactivateUser/>
    </Container>
  );
}
