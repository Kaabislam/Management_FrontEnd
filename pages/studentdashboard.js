import { Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import StudentDashBoard from "../component/StudentDashboard/StudentDashboard";

export default function StudentDashboard() {
  const router = useRouter();

  
  return (
    <Container maxWidth="sm">
      <StudentDashBoard/>
    </Container>
  );
}
