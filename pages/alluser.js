import { Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import DashboardIndex from "../component/DashBoard/DashboardIndex";
import AllUser from "../component/DashBoard/Alluser/AllUser";

export default function Alluser() {
  const router = useRouter();

  return (
    <Container maxWidth="sm">
      <Typography>All User</Typography>
      <AllUser />
    </Container>
  );
}
