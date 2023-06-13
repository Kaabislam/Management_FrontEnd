import { Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import DashboardIndex from "../component/DashBoard/DashboardIndex";

export default function Dashboard() {
  const router = useRouter();

  
  return (
    <Container maxWidth="sm">
      <DashboardIndex/>
    </Container>
  );
}
