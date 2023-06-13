import { Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import DashboardIndex from "../component/DashBoard/DashboardIndex";
import StudentAddIndex from "../component/DashBoard/StatusChange/StatusChange";

export default function Activeuser() {
  const router = useRouter();

  return (
    <Container maxWidth="sm">
     <StudentAddIndex/>
    </Container>
  );
}
